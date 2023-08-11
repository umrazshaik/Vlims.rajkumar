﻿  CREATE PROCEDURE [dbo].[USP_DocumentTypeConfiguration_PSY_By_DocumentMasterId_GET] @DocumentMasterId int 
 AS 
 BEGIN 
 BEGIN TRY 
  SELECT DTCId_PSY,
DocumentMasterId_PSY,
Documenttypename_PSY,
documenttypeprefix_PSY,
Description_PSY,
Assigntodepartment_PSY,
CreatedBy_PSY,
CreatedDate_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY 
  FROM [dbo].[DocumentTypeConfiguration_PSY] WITH (NOLOCK) where DocumentMasterId_PSY = @DocumentMasterId   
 END TRY 
 BEGIN CATCH 
  SELECT ERROR_MESSAGE(); 
 END CATCH 
 END