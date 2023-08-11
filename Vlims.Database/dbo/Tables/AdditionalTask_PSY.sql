﻿CREATE TABLE [dbo].[AdditionalTask_PSY] (
    [ATID_PSY]             INT            IDENTITY (1, 1) NOT NULL,
    [DocumentEffective_ID] NVARCHAR (50)  NOT NULL,
    [CreatedBy_PSY]        NVARCHAR (100) NULL,
    [CreatedDate_PSY]      DATETIME       NULL,
    [ModifiedBy_PSY]       NVARCHAR (100) NULL,
    [ModifiedDate_PSY]     DATETIME       NULL,
    [Status_PSY]           NVARCHAR (50)  NULL,
    [Version]              NVARCHAR (50)  NULL,
    [Refrence_PSY]         INT            NULL,
    [EffectiveDate_PSY]    DATETIME       NULL,
    [ReviewDate_PSY]       DATETIME       NULL,
    [workflow_PSY]         NVARCHAR (100) NULL,
    CONSTRAINT [PK_AdditionalTask_PSY] PRIMARY KEY CLUSTERED ([ATID_PSY] ASC)
);







