import {
	PgNode,
	PgInteger,
	PgFloat,
	PgString,
	PgBitString,
	PgNull,
	PgAlias,
	PgRangeVar,
	PgTableFunc,
	PgIntoClause,
	PgExpr,
	PgVar,
	PgConst,
	PgParam,
	PgAggref,
	PgGroupingFunc,
	PgWindowFunc,
	PgArrayRef,
	PgFuncExpr,
	PgNamedArgExpr,
	PgOpExpr,
	PgScalarArrayOpExpr,
	PgBoolExpr,
	PgSubLink,
	PgSubPlan,
	PgAlternativeSubPlan,
	PgFieldSelect,
	PgFieldStore,
	PgRelabelType,
	PgCoerceViaIO,
	PgArrayCoerceExpr,
	PgConvertRowtypeExpr,
	PgCollateExpr,
	PgCaseExpr,
	PgCaseWhen,
	PgCaseTestExpr,
	PgArrayExpr,
	PgRowExpr,
	PgRowCompareExpr,
	PgCoalesceExpr,
	PgMinMaxExpr,
	PgSQLValueFunction,
	PgXmlExpr,
	PgNullTest,
	PgBooleanTest,
	PgCoerceToDomain,
	PgCoerceToDomainValue,
	PgSetToDefault,
	PgCurrentOfExpr,
	PgNextValueExpr,
	PgInferenceElem,
	PgTargetEntry,
	PgRangeTblRef,
	PgJoinExpr,
	PgFromExpr,
	PgOnConflictExpr,
	PgQuery,
	PgTypeName,
	PgColumnRef,
	PgParamRef,
	PgA_Expr,
	PgA_Const,
	PgTypeCast,
	PgCollateClause,
	PgRoleSpec,
	PgFuncCall,
	PgA_Star,
	PgA_Indices,
	PgA_Indirection,
	PgA_ArrayExpr,
	PgResTarget,
	PgMultiAssignRef,
	PgSortBy,
	PgWindowDef,
	PgRangeSubselect,
	PgRangeFunction,
	PgRangeTableFunc,
	PgRangeTableFuncCol,
	PgRangeTableSample,
	PgColumnDef,
	PgTableLikeClause,
	PgIndexElem,
	PgDefElem,
	PgLockingClause,
	PgXmlSerialize,
	PgPartitionElem,
	PgPartitionSpec,
	PgPartitionBoundSpec,
	PgPartitionRangeDatum,
	PgPartitionCmd,
	PgRangeTblEntry,
	PgRangeTblFunction,
	PgTableSampleClause,
	PgWithCheckOption,
	PgSortGroupClause,
	PgGroupingSet,
	PgWindowClause,
	PgRowMarkClause,
	PgWithClause,
	PgInferClause,
	PgOnConflictClause,
	PgCommonTableExpr,
	PgTriggerTransition,
	PgRawStmt,
	PgInsertStmt,
	PgDeleteStmt,
	PgUpdateStmt,
	PgSelectStmt,
	PgSetOperationStmt,
	PgCreateSchemaStmt,
	PgAlterTableStmt,
	PgReplicaIdentityStmt,
	PgAlterTableCmd,
	PgAlterCollationStmt,
	PgAlterDomainStmt,
	PgGrantStmt,
	PgObjectWithArgs,
	PgAccessPriv,
	PgGrantRoleStmt,
	PgAlterDefaultPrivilegesStmt,
	PgCopyStmt,
	PgVariableSetStmt,
	PgVariableShowStmt,
	PgCreateStmt,
	PgConstraint,
	PgCreateTableSpaceStmt,
	PgDropTableSpaceStmt,
	PgAlterTableSpaceOptionsStmt,
	PgAlterTableMoveAllStmt,
	PgCreateExtensionStmt,
	PgAlterExtensionStmt,
	PgAlterExtensionContentsStmt,
	PgCreateFdwStmt,
	PgAlterFdwStmt,
	PgCreateForeignServerStmt,
	PgAlterForeignServerStmt,
	PgCreateForeignTableStmt,
	PgCreateUserMappingStmt,
	PgAlterUserMappingStmt,
	PgDropUserMappingStmt,
	PgImportForeignSchemaStmt,
	PgCreatePolicyStmt,
	PgAlterPolicyStmt,
	PgCreateAmStmt,
	PgCreateTrigStmt,
	PgCreateEventTrigStmt,
	PgAlterEventTrigStmt,
	PgCreatePLangStmt,
	PgCreateRoleStmt,
	PgAlterRoleStmt,
	PgAlterRoleSetStmt,
	PgDropRoleStmt,
	PgCreateSeqStmt,
	PgAlterSeqStmt,
	PgDefineStmt,
	PgCreateDomainStmt,
	PgCreateOpClassStmt,
	PgCreateOpClassItem,
	PgCreateOpFamilyStmt,
	PgAlterOpFamilyStmt,
	PgDropStmt,
	PgTruncateStmt,
	PgCommentStmt,
	PgSecLabelStmt,
	PgDeclareCursorStmt,
	PgClosePortalStmt,
	PgFetchStmt,
	PgIndexStmt,
	PgCreateStatsStmt,
	PgCreateFunctionStmt,
	PgFunctionParameter,
	PgAlterFunctionStmt,
	PgDoStmt,
	PgInlineCodeBlock,
	PgRenameStmt,
	PgAlterObjectDependsStmt,
	PgAlterObjectSchemaStmt,
	PgAlterOwnerStmt,
	PgAlterOperatorStmt,
	PgRuleStmt,
	PgNotifyStmt,
	PgListenStmt,
	PgUnlistenStmt,
	PgTransactionStmt,
	PgCompositeTypeStmt,
	PgCreateEnumStmt,
	PgCreateRangeStmt,
	PgAlterEnumStmt,
	PgViewStmt,
	PgLoadStmt,
	PgCreatedbStmt,
	PgAlterDatabaseStmt,
	PgAlterDatabaseSetStmt,
	PgDropdbStmt,
	PgAlterSystemStmt,
	PgClusterStmt,
	PgVacuumStmt,
	PgExplainStmt,
	PgCreateTableAsStmt,
	PgRefreshMatViewStmt,
	PgCheckPointStmt,
	PgDiscardStmt,
	PgLockStmt,
	PgConstraintsSetStmt,
	PgReindexStmt,
	PgCreateConversionStmt,
	PgCreateCastStmt,
	PgCreateTransformStmt,
	PgPrepareStmt,
	PgExecuteStmt,
	PgDeallocateStmt,
	PgDropOwnedStmt,
	PgReassignOwnedStmt,
	PgAlterTSDictionaryStmt,
	PgAlterTSConfigurationStmt,
	PgCreatePublicationStmt,
	PgAlterPublicationStmt,
	PgCreateSubscriptionStmt,
	PgAlterSubscriptionStmt,
	PgDropSubscriptionStmt
} from "pg-query-emscripten";
export const isPgNodeArray = (obj: PgNode): obj is PgNode[] =>
	Array.isArray(obj);
export const isPgInteger = (obj: PgNode): obj is PgInteger =>
	!!(<any>obj).Integer;
export const isPgFloat = (obj: PgNode): obj is PgFloat => !!(<any>obj).Float;
export const isPgString = (obj: PgNode): obj is PgString => !!(<any>obj).String;
export const isPgBitString = (obj: PgNode): obj is PgBitString =>
	!!(<any>obj).BitString;
export const isPgNull = (obj: PgNode): obj is PgNull => !!(<any>obj).Null;
export const isPgAlias = (obj: PgNode): obj is PgAlias => !!(<any>obj).Alias;
export const isPgRangeVar = (obj: PgNode): obj is PgRangeVar =>
	!!(<any>obj).RangeVar;
export const isPgTableFunc = (obj: PgNode): obj is PgTableFunc =>
	!!(<any>obj).TableFunc;
export const isPgIntoClause = (obj: PgNode): obj is PgIntoClause =>
	!!(<any>obj).IntoClause;
export const isPgExpr = (obj: PgNode): obj is PgExpr => !!(<any>obj).Expr;
export const isPgVar = (obj: PgNode): obj is PgVar => !!(<any>obj).Var;
export const isPgConst = (obj: PgNode): obj is PgConst => !!(<any>obj).Const;
export const isPgParam = (obj: PgNode): obj is PgParam => !!(<any>obj).Param;
export const isPgAggref = (obj: PgNode): obj is PgAggref => !!(<any>obj).Aggref;
export const isPgGroupingFunc = (obj: PgNode): obj is PgGroupingFunc =>
	!!(<any>obj).GroupingFunc;
export const isPgWindowFunc = (obj: PgNode): obj is PgWindowFunc =>
	!!(<any>obj).WindowFunc;
export const isPgArrayRef = (obj: PgNode): obj is PgArrayRef =>
	!!(<any>obj).ArrayRef;
export const isPgFuncExpr = (obj: PgNode): obj is PgFuncExpr =>
	!!(<any>obj).FuncExpr;
export const isPgNamedArgExpr = (obj: PgNode): obj is PgNamedArgExpr =>
	!!(<any>obj).NamedArgExpr;
export const isPgOpExpr = (obj: PgNode): obj is PgOpExpr => !!(<any>obj).OpExpr;
export const isPgScalarArrayOpExpr = (
	obj: PgNode
): obj is PgScalarArrayOpExpr => !!(<any>obj).ScalarArrayOpExpr;
export const isPgBoolExpr = (obj: PgNode): obj is PgBoolExpr =>
	!!(<any>obj).BoolExpr;
export const isPgSubLink = (obj: PgNode): obj is PgSubLink =>
	!!(<any>obj).SubLink;
export const isPgSubPlan = (obj: PgNode): obj is PgSubPlan =>
	!!(<any>obj).SubPlan;
export const isPgAlternativeSubPlan = (
	obj: PgNode
): obj is PgAlternativeSubPlan => !!(<any>obj).AlternativeSubPlan;
export const isPgFieldSelect = (obj: PgNode): obj is PgFieldSelect =>
	!!(<any>obj).FieldSelect;
export const isPgFieldStore = (obj: PgNode): obj is PgFieldStore =>
	!!(<any>obj).FieldStore;
export const isPgRelabelType = (obj: PgNode): obj is PgRelabelType =>
	!!(<any>obj).RelabelType;
export const isPgCoerceViaIO = (obj: PgNode): obj is PgCoerceViaIO =>
	!!(<any>obj).CoerceViaIO;
export const isPgArrayCoerceExpr = (obj: PgNode): obj is PgArrayCoerceExpr =>
	!!(<any>obj).ArrayCoerceExpr;
export const isPgConvertRowtypeExpr = (
	obj: PgNode
): obj is PgConvertRowtypeExpr => !!(<any>obj).ConvertRowtypeExpr;
export const isPgCollateExpr = (obj: PgNode): obj is PgCollateExpr =>
	!!(<any>obj).CollateExpr;
export const isPgCaseExpr = (obj: PgNode): obj is PgCaseExpr =>
	!!(<any>obj).CaseExpr;
export const isPgCaseWhen = (obj: PgNode): obj is PgCaseWhen =>
	!!(<any>obj).CaseWhen;
export const isPgCaseTestExpr = (obj: PgNode): obj is PgCaseTestExpr =>
	!!(<any>obj).CaseTestExpr;
export const isPgArrayExpr = (obj: PgNode): obj is PgArrayExpr =>
	!!(<any>obj).ArrayExpr;
export const isPgRowExpr = (obj: PgNode): obj is PgRowExpr =>
	!!(<any>obj).RowExpr;
export const isPgRowCompareExpr = (obj: PgNode): obj is PgRowCompareExpr =>
	!!(<any>obj).RowCompareExpr;
export const isPgCoalesceExpr = (obj: PgNode): obj is PgCoalesceExpr =>
	!!(<any>obj).CoalesceExpr;
export const isPgMinMaxExpr = (obj: PgNode): obj is PgMinMaxExpr =>
	!!(<any>obj).MinMaxExpr;
export const isPgSQLValueFunction = (obj: PgNode): obj is PgSQLValueFunction =>
	!!(<any>obj).SQLValueFunction;
export const isPgXmlExpr = (obj: PgNode): obj is PgXmlExpr =>
	!!(<any>obj).XmlExpr;
export const isPgNullTest = (obj: PgNode): obj is PgNullTest =>
	!!(<any>obj).NullTest;
export const isPgBooleanTest = (obj: PgNode): obj is PgBooleanTest =>
	!!(<any>obj).BooleanTest;
export const isPgCoerceToDomain = (obj: PgNode): obj is PgCoerceToDomain =>
	!!(<any>obj).CoerceToDomain;
export const isPgCoerceToDomainValue = (
	obj: PgNode
): obj is PgCoerceToDomainValue => !!(<any>obj).CoerceToDomainValue;
export const isPgSetToDefault = (obj: PgNode): obj is PgSetToDefault =>
	!!(<any>obj).SetToDefault;
export const isPgCurrentOfExpr = (obj: PgNode): obj is PgCurrentOfExpr =>
	!!(<any>obj).CurrentOfExpr;
export const isPgNextValueExpr = (obj: PgNode): obj is PgNextValueExpr =>
	!!(<any>obj).NextValueExpr;
export const isPgInferenceElem = (obj: PgNode): obj is PgInferenceElem =>
	!!(<any>obj).InferenceElem;
export const isPgTargetEntry = (obj: PgNode): obj is PgTargetEntry =>
	!!(<any>obj).TargetEntry;
export const isPgRangeTblRef = (obj: PgNode): obj is PgRangeTblRef =>
	!!(<any>obj).RangeTblRef;
export const isPgJoinExpr = (obj: PgNode): obj is PgJoinExpr =>
	!!(<any>obj).JoinExpr;
export const isPgFromExpr = (obj: PgNode): obj is PgFromExpr =>
	!!(<any>obj).FromExpr;
export const isPgOnConflictExpr = (obj: PgNode): obj is PgOnConflictExpr =>
	!!(<any>obj).OnConflictExpr;
export const isPgQuery = (obj: PgNode): obj is PgQuery => !!(<any>obj).Query;
export const isPgTypeName = (obj: PgNode): obj is PgTypeName =>
	!!(<any>obj).TypeName;
export const isPgColumnRef = (obj: PgNode): obj is PgColumnRef =>
	!!(<any>obj).ColumnRef;
export const isPgParamRef = (obj: PgNode): obj is PgParamRef =>
	!!(<any>obj).ParamRef;
export const isPgA_Expr = (obj: PgNode): obj is PgA_Expr => !!(<any>obj).A_Expr;
export const isPgA_Const = (obj: PgNode): obj is PgA_Const =>
	!!(<any>obj).A_Const;
export const isPgTypeCast = (obj: PgNode): obj is PgTypeCast =>
	!!(<any>obj).TypeCast;
export const isPgCollateClause = (obj: PgNode): obj is PgCollateClause =>
	!!(<any>obj).CollateClause;
export const isPgRoleSpec = (obj: PgNode): obj is PgRoleSpec =>
	!!(<any>obj).RoleSpec;
export const isPgFuncCall = (obj: PgNode): obj is PgFuncCall =>
	!!(<any>obj).FuncCall;
export const isPgA_Star = (obj: PgNode): obj is PgA_Star => !!(<any>obj).A_Star;
export const isPgA_Indices = (obj: PgNode): obj is PgA_Indices =>
	!!(<any>obj).A_Indices;
export const isPgA_Indirection = (obj: PgNode): obj is PgA_Indirection =>
	!!(<any>obj).A_Indirection;
export const isPgA_ArrayExpr = (obj: PgNode): obj is PgA_ArrayExpr =>
	!!(<any>obj).A_ArrayExpr;
export const isPgResTarget = (obj: PgNode): obj is PgResTarget =>
	!!(<any>obj).ResTarget;
export const isPgMultiAssignRef = (obj: PgNode): obj is PgMultiAssignRef =>
	!!(<any>obj).MultiAssignRef;
export const isPgSortBy = (obj: PgNode): obj is PgSortBy => !!(<any>obj).SortBy;
export const isPgWindowDef = (obj: PgNode): obj is PgWindowDef =>
	!!(<any>obj).WindowDef;
export const isPgRangeSubselect = (obj: PgNode): obj is PgRangeSubselect =>
	!!(<any>obj).RangeSubselect;
export const isPgRangeFunction = (obj: PgNode): obj is PgRangeFunction =>
	!!(<any>obj).RangeFunction;
export const isPgRangeTableFunc = (obj: PgNode): obj is PgRangeTableFunc =>
	!!(<any>obj).RangeTableFunc;
export const isPgRangeTableFuncCol = (
	obj: PgNode
): obj is PgRangeTableFuncCol => !!(<any>obj).RangeTableFuncCol;
export const isPgRangeTableSample = (obj: PgNode): obj is PgRangeTableSample =>
	!!(<any>obj).RangeTableSample;
export const isPgColumnDef = (obj: PgNode): obj is PgColumnDef =>
	!!(<any>obj).ColumnDef;
export const isPgTableLikeClause = (obj: PgNode): obj is PgTableLikeClause =>
	!!(<any>obj).TableLikeClause;
export const isPgIndexElem = (obj: PgNode): obj is PgIndexElem =>
	!!(<any>obj).IndexElem;
export const isPgDefElem = (obj: PgNode): obj is PgDefElem =>
	!!(<any>obj).DefElem;
export const isPgLockingClause = (obj: PgNode): obj is PgLockingClause =>
	!!(<any>obj).LockingClause;
export const isPgXmlSerialize = (obj: PgNode): obj is PgXmlSerialize =>
	!!(<any>obj).XmlSerialize;
export const isPgPartitionElem = (obj: PgNode): obj is PgPartitionElem =>
	!!(<any>obj).PartitionElem;
export const isPgPartitionSpec = (obj: PgNode): obj is PgPartitionSpec =>
	!!(<any>obj).PartitionSpec;
export const isPgPartitionBoundSpec = (
	obj: PgNode
): obj is PgPartitionBoundSpec => !!(<any>obj).PartitionBoundSpec;
export const isPgPartitionRangeDatum = (
	obj: PgNode
): obj is PgPartitionRangeDatum => !!(<any>obj).PartitionRangeDatum;
export const isPgPartitionCmd = (obj: PgNode): obj is PgPartitionCmd =>
	!!(<any>obj).PartitionCmd;
export const isPgRangeTblEntry = (obj: PgNode): obj is PgRangeTblEntry =>
	!!(<any>obj).RangeTblEntry;
export const isPgRangeTblFunction = (obj: PgNode): obj is PgRangeTblFunction =>
	!!(<any>obj).RangeTblFunction;
export const isPgTableSampleClause = (
	obj: PgNode
): obj is PgTableSampleClause => !!(<any>obj).TableSampleClause;
export const isPgWithCheckOption = (obj: PgNode): obj is PgWithCheckOption =>
	!!(<any>obj).WithCheckOption;
export const isPgSortGroupClause = (obj: PgNode): obj is PgSortGroupClause =>
	!!(<any>obj).SortGroupClause;
export const isPgGroupingSet = (obj: PgNode): obj is PgGroupingSet =>
	!!(<any>obj).GroupingSet;
export const isPgWindowClause = (obj: PgNode): obj is PgWindowClause =>
	!!(<any>obj).WindowClause;
export const isPgRowMarkClause = (obj: PgNode): obj is PgRowMarkClause =>
	!!(<any>obj).RowMarkClause;
export const isPgWithClause = (obj: PgNode): obj is PgWithClause =>
	!!(<any>obj).WithClause;
export const isPgInferClause = (obj: PgNode): obj is PgInferClause =>
	!!(<any>obj).InferClause;
export const isPgOnConflictClause = (obj: PgNode): obj is PgOnConflictClause =>
	!!(<any>obj).OnConflictClause;
export const isPgCommonTableExpr = (obj: PgNode): obj is PgCommonTableExpr =>
	!!(<any>obj).CommonTableExpr;
export const isPgTriggerTransition = (
	obj: PgNode
): obj is PgTriggerTransition => !!(<any>obj).TriggerTransition;
export const isPgRawStmt = (obj: PgNode): obj is PgRawStmt =>
	!!(<any>obj).RawStmt;
export const isPgInsertStmt = (obj: PgNode): obj is PgInsertStmt =>
	!!(<any>obj).InsertStmt;
export const isPgDeleteStmt = (obj: PgNode): obj is PgDeleteStmt =>
	!!(<any>obj).DeleteStmt;
export const isPgUpdateStmt = (obj: PgNode): obj is PgUpdateStmt =>
	!!(<any>obj).UpdateStmt;
export const isPgSelectStmt = (obj: PgNode): obj is PgSelectStmt =>
	!!(<any>obj).SelectStmt;
export const isPgSetOperationStmt = (obj: PgNode): obj is PgSetOperationStmt =>
	!!(<any>obj).SetOperationStmt;
export const isPgCreateSchemaStmt = (obj: PgNode): obj is PgCreateSchemaStmt =>
	!!(<any>obj).CreateSchemaStmt;
export const isPgAlterTableStmt = (obj: PgNode): obj is PgAlterTableStmt =>
	!!(<any>obj).AlterTableStmt;
export const isPgReplicaIdentityStmt = (
	obj: PgNode
): obj is PgReplicaIdentityStmt => !!(<any>obj).ReplicaIdentityStmt;
export const isPgAlterTableCmd = (obj: PgNode): obj is PgAlterTableCmd =>
	!!(<any>obj).AlterTableCmd;
export const isPgAlterCollationStmt = (
	obj: PgNode
): obj is PgAlterCollationStmt => !!(<any>obj).AlterCollationStmt;
export const isPgAlterDomainStmt = (obj: PgNode): obj is PgAlterDomainStmt =>
	!!(<any>obj).AlterDomainStmt;
export const isPgGrantStmt = (obj: PgNode): obj is PgGrantStmt =>
	!!(<any>obj).GrantStmt;
export const isPgObjectWithArgs = (obj: PgNode): obj is PgObjectWithArgs =>
	!!(<any>obj).ObjectWithArgs;
export const isPgAccessPriv = (obj: PgNode): obj is PgAccessPriv =>
	!!(<any>obj).AccessPriv;
export const isPgGrantRoleStmt = (obj: PgNode): obj is PgGrantRoleStmt =>
	!!(<any>obj).GrantRoleStmt;
export const isPgAlterDefaultPrivilegesStmt = (
	obj: PgNode
): obj is PgAlterDefaultPrivilegesStmt =>
	!!(<any>obj).AlterDefaultPrivilegesStmt;
export const isPgCopyStmt = (obj: PgNode): obj is PgCopyStmt =>
	!!(<any>obj).CopyStmt;
export const isPgVariableSetStmt = (obj: PgNode): obj is PgVariableSetStmt =>
	!!(<any>obj).VariableSetStmt;
export const isPgVariableShowStmt = (obj: PgNode): obj is PgVariableShowStmt =>
	!!(<any>obj).VariableShowStmt;
export const isPgCreateStmt = (obj: PgNode): obj is PgCreateStmt =>
	!!(<any>obj).CreateStmt;
export const isPgConstraint = (obj: PgNode): obj is PgConstraint =>
	!!(<any>obj).Constraint;
export const isPgCreateTableSpaceStmt = (
	obj: PgNode
): obj is PgCreateTableSpaceStmt => !!(<any>obj).CreateTableSpaceStmt;
export const isPgDropTableSpaceStmt = (
	obj: PgNode
): obj is PgDropTableSpaceStmt => !!(<any>obj).DropTableSpaceStmt;
export const isPgAlterTableSpaceOptionsStmt = (
	obj: PgNode
): obj is PgAlterTableSpaceOptionsStmt =>
	!!(<any>obj).AlterTableSpaceOptionsStmt;
export const isPgAlterTableMoveAllStmt = (
	obj: PgNode
): obj is PgAlterTableMoveAllStmt => !!(<any>obj).AlterTableMoveAllStmt;
export const isPgCreateExtensionStmt = (
	obj: PgNode
): obj is PgCreateExtensionStmt => !!(<any>obj).CreateExtensionStmt;
export const isPgAlterExtensionStmt = (
	obj: PgNode
): obj is PgAlterExtensionStmt => !!(<any>obj).AlterExtensionStmt;
export const isPgAlterExtensionContentsStmt = (
	obj: PgNode
): obj is PgAlterExtensionContentsStmt =>
	!!(<any>obj).AlterExtensionContentsStmt;
export const isPgCreateFdwStmt = (obj: PgNode): obj is PgCreateFdwStmt =>
	!!(<any>obj).CreateFdwStmt;
export const isPgAlterFdwStmt = (obj: PgNode): obj is PgAlterFdwStmt =>
	!!(<any>obj).AlterFdwStmt;
export const isPgCreateForeignServerStmt = (
	obj: PgNode
): obj is PgCreateForeignServerStmt => !!(<any>obj).CreateForeignServerStmt;
export const isPgAlterForeignServerStmt = (
	obj: PgNode
): obj is PgAlterForeignServerStmt => !!(<any>obj).AlterForeignServerStmt;
export const isPgCreateForeignTableStmt = (
	obj: PgNode
): obj is PgCreateForeignTableStmt => !!(<any>obj).CreateForeignTableStmt;
export const isPgCreateUserMappingStmt = (
	obj: PgNode
): obj is PgCreateUserMappingStmt => !!(<any>obj).CreateUserMappingStmt;
export const isPgAlterUserMappingStmt = (
	obj: PgNode
): obj is PgAlterUserMappingStmt => !!(<any>obj).AlterUserMappingStmt;
export const isPgDropUserMappingStmt = (
	obj: PgNode
): obj is PgDropUserMappingStmt => !!(<any>obj).DropUserMappingStmt;
export const isPgImportForeignSchemaStmt = (
	obj: PgNode
): obj is PgImportForeignSchemaStmt => !!(<any>obj).ImportForeignSchemaStmt;
export const isPgCreatePolicyStmt = (obj: PgNode): obj is PgCreatePolicyStmt =>
	!!(<any>obj).CreatePolicyStmt;
export const isPgAlterPolicyStmt = (obj: PgNode): obj is PgAlterPolicyStmt =>
	!!(<any>obj).AlterPolicyStmt;
export const isPgCreateAmStmt = (obj: PgNode): obj is PgCreateAmStmt =>
	!!(<any>obj).CreateAmStmt;
export const isPgCreateTrigStmt = (obj: PgNode): obj is PgCreateTrigStmt =>
	!!(<any>obj).CreateTrigStmt;
export const isPgCreateEventTrigStmt = (
	obj: PgNode
): obj is PgCreateEventTrigStmt => !!(<any>obj).CreateEventTrigStmt;
export const isPgAlterEventTrigStmt = (
	obj: PgNode
): obj is PgAlterEventTrigStmt => !!(<any>obj).AlterEventTrigStmt;
export const isPgCreatePLangStmt = (obj: PgNode): obj is PgCreatePLangStmt =>
	!!(<any>obj).CreatePLangStmt;
export const isPgCreateRoleStmt = (obj: PgNode): obj is PgCreateRoleStmt =>
	!!(<any>obj).CreateRoleStmt;
export const isPgAlterRoleStmt = (obj: PgNode): obj is PgAlterRoleStmt =>
	!!(<any>obj).AlterRoleStmt;
export const isPgAlterRoleSetStmt = (obj: PgNode): obj is PgAlterRoleSetStmt =>
	!!(<any>obj).AlterRoleSetStmt;
export const isPgDropRoleStmt = (obj: PgNode): obj is PgDropRoleStmt =>
	!!(<any>obj).DropRoleStmt;
export const isPgCreateSeqStmt = (obj: PgNode): obj is PgCreateSeqStmt =>
	!!(<any>obj).CreateSeqStmt;
export const isPgAlterSeqStmt = (obj: PgNode): obj is PgAlterSeqStmt =>
	!!(<any>obj).AlterSeqStmt;
export const isPgDefineStmt = (obj: PgNode): obj is PgDefineStmt =>
	!!(<any>obj).DefineStmt;
export const isPgCreateDomainStmt = (obj: PgNode): obj is PgCreateDomainStmt =>
	!!(<any>obj).CreateDomainStmt;
export const isPgCreateOpClassStmt = (
	obj: PgNode
): obj is PgCreateOpClassStmt => !!(<any>obj).CreateOpClassStmt;
export const isPgCreateOpClassItem = (
	obj: PgNode
): obj is PgCreateOpClassItem => !!(<any>obj).CreateOpClassItem;
export const isPgCreateOpFamilyStmt = (
	obj: PgNode
): obj is PgCreateOpFamilyStmt => !!(<any>obj).CreateOpFamilyStmt;
export const isPgAlterOpFamilyStmt = (
	obj: PgNode
): obj is PgAlterOpFamilyStmt => !!(<any>obj).AlterOpFamilyStmt;
export const isPgDropStmt = (obj: PgNode): obj is PgDropStmt =>
	!!(<any>obj).DropStmt;
export const isPgTruncateStmt = (obj: PgNode): obj is PgTruncateStmt =>
	!!(<any>obj).TruncateStmt;
export const isPgCommentStmt = (obj: PgNode): obj is PgCommentStmt =>
	!!(<any>obj).CommentStmt;
export const isPgSecLabelStmt = (obj: PgNode): obj is PgSecLabelStmt =>
	!!(<any>obj).SecLabelStmt;
export const isPgDeclareCursorStmt = (
	obj: PgNode
): obj is PgDeclareCursorStmt => !!(<any>obj).DeclareCursorStmt;
export const isPgClosePortalStmt = (obj: PgNode): obj is PgClosePortalStmt =>
	!!(<any>obj).ClosePortalStmt;
export const isPgFetchStmt = (obj: PgNode): obj is PgFetchStmt =>
	!!(<any>obj).FetchStmt;
export const isPgIndexStmt = (obj: PgNode): obj is PgIndexStmt =>
	!!(<any>obj).IndexStmt;
export const isPgCreateStatsStmt = (obj: PgNode): obj is PgCreateStatsStmt =>
	!!(<any>obj).CreateStatsStmt;
export const isPgCreateFunctionStmt = (
	obj: PgNode
): obj is PgCreateFunctionStmt => !!(<any>obj).CreateFunctionStmt;
export const isPgFunctionParameter = (
	obj: PgNode
): obj is PgFunctionParameter => !!(<any>obj).FunctionParameter;
export const isPgAlterFunctionStmt = (
	obj: PgNode
): obj is PgAlterFunctionStmt => !!(<any>obj).AlterFunctionStmt;
export const isPgDoStmt = (obj: PgNode): obj is PgDoStmt => !!(<any>obj).DoStmt;
export const isPgInlineCodeBlock = (obj: PgNode): obj is PgInlineCodeBlock =>
	!!(<any>obj).InlineCodeBlock;
export const isPgRenameStmt = (obj: PgNode): obj is PgRenameStmt =>
	!!(<any>obj).RenameStmt;
export const isPgAlterObjectDependsStmt = (
	obj: PgNode
): obj is PgAlterObjectDependsStmt => !!(<any>obj).AlterObjectDependsStmt;
export const isPgAlterObjectSchemaStmt = (
	obj: PgNode
): obj is PgAlterObjectSchemaStmt => !!(<any>obj).AlterObjectSchemaStmt;
export const isPgAlterOwnerStmt = (obj: PgNode): obj is PgAlterOwnerStmt =>
	!!(<any>obj).AlterOwnerStmt;
export const isPgAlterOperatorStmt = (
	obj: PgNode
): obj is PgAlterOperatorStmt => !!(<any>obj).AlterOperatorStmt;
export const isPgRuleStmt = (obj: PgNode): obj is PgRuleStmt =>
	!!(<any>obj).RuleStmt;
export const isPgNotifyStmt = (obj: PgNode): obj is PgNotifyStmt =>
	!!(<any>obj).NotifyStmt;
export const isPgListenStmt = (obj: PgNode): obj is PgListenStmt =>
	!!(<any>obj).ListenStmt;
export const isPgUnlistenStmt = (obj: PgNode): obj is PgUnlistenStmt =>
	!!(<any>obj).UnlistenStmt;
export const isPgTransactionStmt = (obj: PgNode): obj is PgTransactionStmt =>
	!!(<any>obj).TransactionStmt;
export const isPgCompositeTypeStmt = (
	obj: PgNode
): obj is PgCompositeTypeStmt => !!(<any>obj).CompositeTypeStmt;
export const isPgCreateEnumStmt = (obj: PgNode): obj is PgCreateEnumStmt =>
	!!(<any>obj).CreateEnumStmt;
export const isPgCreateRangeStmt = (obj: PgNode): obj is PgCreateRangeStmt =>
	!!(<any>obj).CreateRangeStmt;
export const isPgAlterEnumStmt = (obj: PgNode): obj is PgAlterEnumStmt =>
	!!(<any>obj).AlterEnumStmt;
export const isPgViewStmt = (obj: PgNode): obj is PgViewStmt =>
	!!(<any>obj).ViewStmt;
export const isPgLoadStmt = (obj: PgNode): obj is PgLoadStmt =>
	!!(<any>obj).LoadStmt;
export const isPgCreatedbStmt = (obj: PgNode): obj is PgCreatedbStmt =>
	!!(<any>obj).CreatedbStmt;
export const isPgAlterDatabaseStmt = (
	obj: PgNode
): obj is PgAlterDatabaseStmt => !!(<any>obj).AlterDatabaseStmt;
export const isPgAlterDatabaseSetStmt = (
	obj: PgNode
): obj is PgAlterDatabaseSetStmt => !!(<any>obj).AlterDatabaseSetStmt;
export const isPgDropdbStmt = (obj: PgNode): obj is PgDropdbStmt =>
	!!(<any>obj).DropdbStmt;
export const isPgAlterSystemStmt = (obj: PgNode): obj is PgAlterSystemStmt =>
	!!(<any>obj).AlterSystemStmt;
export const isPgClusterStmt = (obj: PgNode): obj is PgClusterStmt =>
	!!(<any>obj).ClusterStmt;
export const isPgVacuumStmt = (obj: PgNode): obj is PgVacuumStmt =>
	!!(<any>obj).VacuumStmt;
export const isPgExplainStmt = (obj: PgNode): obj is PgExplainStmt =>
	!!(<any>obj).ExplainStmt;
export const isPgCreateTableAsStmt = (
	obj: PgNode
): obj is PgCreateTableAsStmt => !!(<any>obj).CreateTableAsStmt;
export const isPgRefreshMatViewStmt = (
	obj: PgNode
): obj is PgRefreshMatViewStmt => !!(<any>obj).RefreshMatViewStmt;
export const isPgCheckPointStmt = (obj: PgNode): obj is PgCheckPointStmt =>
	!!(<any>obj).CheckPointStmt;
export const isPgDiscardStmt = (obj: PgNode): obj is PgDiscardStmt =>
	!!(<any>obj).DiscardStmt;
export const isPgLockStmt = (obj: PgNode): obj is PgLockStmt =>
	!!(<any>obj).LockStmt;
export const isPgConstraintsSetStmt = (
	obj: PgNode
): obj is PgConstraintsSetStmt => !!(<any>obj).ConstraintsSetStmt;
export const isPgReindexStmt = (obj: PgNode): obj is PgReindexStmt =>
	!!(<any>obj).ReindexStmt;
export const isPgCreateConversionStmt = (
	obj: PgNode
): obj is PgCreateConversionStmt => !!(<any>obj).CreateConversionStmt;
export const isPgCreateCastStmt = (obj: PgNode): obj is PgCreateCastStmt =>
	!!(<any>obj).CreateCastStmt;
export const isPgCreateTransformStmt = (
	obj: PgNode
): obj is PgCreateTransformStmt => !!(<any>obj).CreateTransformStmt;
export const isPgPrepareStmt = (obj: PgNode): obj is PgPrepareStmt =>
	!!(<any>obj).PrepareStmt;
export const isPgExecuteStmt = (obj: PgNode): obj is PgExecuteStmt =>
	!!(<any>obj).ExecuteStmt;
export const isPgDeallocateStmt = (obj: PgNode): obj is PgDeallocateStmt =>
	!!(<any>obj).DeallocateStmt;
export const isPgDropOwnedStmt = (obj: PgNode): obj is PgDropOwnedStmt =>
	!!(<any>obj).DropOwnedStmt;
export const isPgReassignOwnedStmt = (
	obj: PgNode
): obj is PgReassignOwnedStmt => !!(<any>obj).ReassignOwnedStmt;
export const isPgAlterTSDictionaryStmt = (
	obj: PgNode
): obj is PgAlterTSDictionaryStmt => !!(<any>obj).AlterTSDictionaryStmt;
export const isPgAlterTSConfigurationStmt = (
	obj: PgNode
): obj is PgAlterTSConfigurationStmt => !!(<any>obj).AlterTSConfigurationStmt;
export const isPgCreatePublicationStmt = (
	obj: PgNode
): obj is PgCreatePublicationStmt => !!(<any>obj).CreatePublicationStmt;
export const isPgAlterPublicationStmt = (
	obj: PgNode
): obj is PgAlterPublicationStmt => !!(<any>obj).AlterPublicationStmt;
export const isPgCreateSubscriptionStmt = (
	obj: PgNode
): obj is PgCreateSubscriptionStmt => !!(<any>obj).CreateSubscriptionStmt;
export const isPgAlterSubscriptionStmt = (
	obj: PgNode
): obj is PgAlterSubscriptionStmt => !!(<any>obj).AlterSubscriptionStmt;
export const isPgDropSubscriptionStmt = (
	obj: PgNode
): obj is PgDropSubscriptionStmt => !!(<any>obj).DropSubscriptionStmt;
