﻿  CREATE PROCEDURE [dbo].[USP_DocumentTypeConfiguration_PSY_DELETE] @DTCId_PSY int 
 AS 
 BEGIN 
  BEGIN TRY 
 DELETE FROM [dbo].[DocumentTypeConfiguration_PSY]  WHERE [DTCId_PSY] IN (@DTCId_PSY) 
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END