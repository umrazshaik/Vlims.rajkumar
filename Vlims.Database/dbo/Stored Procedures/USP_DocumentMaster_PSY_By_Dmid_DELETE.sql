﻿  CREATE PROCEDURE [dbo].[USP_DocumentMaster_PSY_By_Dmid_DELETE] @Dmid int 
 AS 
 BEGIN 
  BEGIN TRY 
 DELETE FROM [dbo].[DocumentMaster_PSY]  WHERE Dmid_PSY IN (@Dmid) 
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END