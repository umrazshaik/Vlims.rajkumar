﻿  CREATE PROCEDURE [dbo].[USP_AdimManagement_PSY_By_AMId_DELETE] @AMId int 
 AS 
 BEGIN 
  BEGIN TRY 
 DELETE FROM [dbo].[AdimManagement_PSY]  WHERE AMId_PSY IN (@AMId) 
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END