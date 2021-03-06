const { mkdir, writeFile } = require("fs").promises;
const { dirname, join: joinPath } = require("path");
const prettier = require("prettier");

const typeMap = require("./types.json");
const enumDefs = require("./enum_defs.json");
const enumDefsKeys = [
	"nodes/lockoptions",
	"nodes/nodes",
	"nodes/primnodes",
	"nodes/parsenodes"
];
const structDefs = require("./struct_defs.json");
const structDefsKeys = ["nodes/value", "nodes/primnodes", "nodes/parsenodes"];

const getOptional = c_type => (c_type.endsWith("*") ? "?" : "");

const getType = (name, c_type) =>
	name === "valuesLists" ? "PgNode[][]" : typeMap[c_type] || `Pg${c_type}`;

const generateFields = fields =>
	fields
		.filter(field => field.name && field.name !== "type")
		.map(
			({ name, c_type, comment }) => `
				${comment || "/**/"}
				${name}${getOptional(c_type)}: ${getType(name, c_type)};
			`
		)
		.join("\n");

const generateEnums = types =>
	Object.keys(types)
		.map(type => {
			const { values, comment } = types[type];
			const enumValues = values
				.filter(v => v.name)
				.map((v, i) => `${v.name} = ${i}`)
				.join(",\n");
			return `
				${comment || "/**/\n"}const enum Pg${type} {
					${enumValues}
				}
			`;
		})
		.join("\n");

const generateInterfaces = types =>
	Object.keys(types)
		.map(type => {
			const { fields, comment } = types[type];
			return `
				${comment || "/**/\n"}interface Pg${type} extends PgNode {
					${type}: {
						${generateFields(fields)}
					}
				}
			`;
		})
		.join("\n");

const writeTypeScriptFile = async (pathRelativeToRoot, content) => {
	const absolutePath = joinPath(__dirname, "../..", pathRelativeToRoot);
	await mkdir(dirname(absolutePath), { recursive: true });

	const options = await prettier.resolveConfig(absolutePath);
	const formattedContent = prettier.format(content, {
		...options,
		filepath: absolutePath
	});

	await writeFile(absolutePath, formattedContent, "utf8");
};

const generateTypeDeclaration = () => {
	const enums = enumDefsKeys
		.map(key => enumDefs[key])
		.map(types => generateEnums(types))
		.join("\n");
	const interfaces = structDefsKeys
		.map(key => structDefs[key])
		.map(types => generateInterfaces(types))
		.join("\n");
	return `
		declare module "pg-query-emscripten" {
			interface PgNode {}
			
			${enums}
			${interfaces}

			interface PgParseError extends Error {
				filename: string;
				lineno: number;
				cursorpos: number;
				funcname: string;
				context: string;
			}
			
			interface PgParseResult {
				parse_tree?: PgNode[];
				error?: PgParseError;
			}
			
			function parse(query: string): PgParseResult;
		}
	`;
};

const generateTypeGuards = () => {
	const types = structDefsKeys
		.map(key => structDefs[key])
		.flatMap(types => Object.keys(types));
	const imports = types.map(type => `Pg${type}`).join(", ");
	const typeGuards = types
		.map(
			type =>
				`export const isPg${type} = (obj: PgNode): obj is Pg${type} => !!(<any>obj).${type};`
		)
		.join("\n");
	return `
		import { PgNode, ${imports} } from "pg-query-emscripten";
		export const isPgNodeArray = (obj: PgNode): obj is PgNode[] => Array.isArray(obj);
		${typeGuards}
	`;
};

async function main() {
	await writeTypeScriptFile(
		"typings/pg-query-emscripten/index.d.ts",
		generateTypeDeclaration()
	);
	await writeTypeScriptFile(
		"src/analysis/pg-query-emscripten-type-guards.ts",
		generateTypeGuards()
	);
}

main().catch(console.error);
