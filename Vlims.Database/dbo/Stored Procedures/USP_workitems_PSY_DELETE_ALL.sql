﻿  CREATE PROCEDURE [dbo].[USP_workitems_PSY_DELETE_ALL] @WITId_PSY nvarchar(max)  
 AS 
 BEGIN 
  BEGIN TRY 
 DELETE FROM [dbo].[workitems_PSY] WHERE [WITId_PSY] IN (select value from STRING_SPLIT(@WITId_PSY, ',')) 
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END