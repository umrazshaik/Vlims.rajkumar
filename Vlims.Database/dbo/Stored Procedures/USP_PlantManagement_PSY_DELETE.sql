﻿  CREATE PROCEDURE [dbo].[USP_PlantManagement_PSY_DELETE] @PMId_PSY int 
 AS 
 BEGIN 
  BEGIN TRY 
 DELETE FROM [dbo].[PlantManagement_PSY]  WHERE [PMId_PSY] IN (@PMId_PSY) 
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END