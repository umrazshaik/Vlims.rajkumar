﻿


CREATE PROCEDURE [dbo].[USP_Documentrequest_PSY_INSERT] @documentmanagerid_PSY NVarChar(50),
@documenttype_PSY NVarChar(50),
@department_PSY NVarChar(50),
@Purpose_PSY NVarChar(50),
@ApprovalsCount_PSY Int,
@AssigntoGroup_PSY NVarChar(50),
@CreatedBy_PSY NVarChar(100),
@ModifiedBy_PSY NVarChar(100),
@Status_PSY NVarChar(100),
@Workflow_PSY NVarChar(100)
 AS 
 BEGIN 
  BEGIN TRY 
  
 DECLARE @ID INT 
 INSERT INTO [dbo].[Documentrequest_PSY] 
 (documentmanagerid_PSY,
documenttype_PSY,
department_PSY,
Purpose_PSY,
ApprovalsCount_PSY,
AssigntoGroup_PSY,
CreatedBy_PSY,
CreatedDate_PSY,
ModifiedBy_PSY,
ModifiedDate_PSY,
Status_PSY,
Workflow_PSY)
 VALUES 
(@documentmanagerid_PSY,
@documenttype_PSY,
@department_PSY,
@Purpose_PSY,
@ApprovalsCount_PSY,
@AssigntoGroup_PSY,
@CreatedBy_PSY,
 GetDate() ,
@ModifiedBy_PSY,
 GetDate(),
 @Status_PSY,
 @Workflow_PSY);
 SELECT @ID = @@IDENTITY; 


 INSERT into workitems_PSY(TaskName_PSY,TaskType_PSY,Stage_PSY,AssignedToGroup_PSY,InitiatedBy_PSY,InitiatedOn_PSY,Status_PSY,DueDate_PSY,RefrenceId_PSY,ActionType_PSY,IsCompleted_PSY)
 SELECT @documenttype_PSY,'Request','Pending',@AssigntoGroup_PSY,WSR.UserName,GetDate(),@Status_PSY,GetDate(),@ID,WSR.Type,0 from WorkflowUsersMapping WSR WHERE WSR.WorkFlowName=@Workflow_PSY AND WSR.Type='Review'

 INSERT into workitems_PSY(TaskName_PSY,TaskType_PSY,Stage_PSY,AssignedToGroup_PSY,InitiatedBy_PSY,InitiatedOn_PSY,Status_PSY,DueDate_PSY,RefrenceId_PSY,ActionType_PSY,IsCompleted_PSY)
 SELECT @documenttype_PSY,'Request','Pending',@AssigntoGroup_PSY,WSR.UserName,GetDate(),@Status_PSY,GetDate(),@ID,WSR.Type,0 from WorkflowUsersMapping WSR WHERE WSR.WorkFlowName=@Workflow_PSY AND WSR.Type='Approve'

 select @ID 
  
  END TRY 
 BEGIN CATCH 
 SELECT ERROR_MESSAGE(); 
 END CATCH 
 END 
 

GO


