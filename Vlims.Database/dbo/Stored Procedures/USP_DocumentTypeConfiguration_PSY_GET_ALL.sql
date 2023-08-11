﻿ CREATE PROCEDURE [dbo].[USP_DocumentTypeConfiguration_PSY_GET_ALL]  @PageSize  INT=50, @PageNumber INT=1  
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
ModifiedDate_PSY,
Status_PSY,
 count(*) over() as TotalRows 
 FROM [dbo].[DocumentTypeConfiguration_PSY] WITH (NOLOCK) 
 Order by [DTCId_PSY]  
 OFFSET @PageSize * (@PageNumber - 1) ROWS 
  FETCH NEXT @PageSize ROWS ONLY; 
  END TRY 
 BEGIN CATCH 
  SELECT ERROR_MESSAGE(); 
 END CATCH 
 END