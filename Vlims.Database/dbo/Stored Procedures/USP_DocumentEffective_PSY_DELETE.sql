﻿  CREATE PROCEDURE [dbo].[USP_DocumentEffective_PSY_DELETE] @DEID_PSY int 
 AS 
 BEGIN 
  BEGIN TRY 
 DELETE FROM [dbo].[DocumentEffective_PSY]  WHERE [DEID_PSY] IN (@DEID_PSY) 
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END