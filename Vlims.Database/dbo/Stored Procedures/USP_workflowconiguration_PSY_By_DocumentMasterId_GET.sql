﻿  CREATE PROCEDURE [dbo].[USP_workflowconiguration_PSY_By_DocumentMasterId_GET] @DocumentMasterId int 
 AS 
 BEGIN 
 BEGIN TRY 
  SELECT WFCId_PSY,
DocumentMasterId_PSY,
documentstage_PSY,
documenttype_PSY,
department_PSY,
reviewsCount_PSY,
approvalsCount_PSY,
CreatedBy_PSY,
CreatedDate_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY 
  FROM [dbo].[workflowconiguration_PSY] WITH (NOLOCK) where DocumentMasterId_PSY = @DocumentMasterId   
 END TRY 
 BEGIN CATCH 
  SELECT ERROR_MESSAGE(); 
 END CATCH 
 END