//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Vlims.DMS.Entities
{
    using System;
    using System.Collections.Generic;
    //  using PolicySummary.Common.Entities;


    // Comment
    public class Documentrequest
    {

        private string dridField;

        private string documentmanageridField;

        private string documenttypeField;

        private string departmentField;

        private string purposeField;

        private System.Int32? approvalscountField;

        private string assigntogroupField;

        private string createdbyField;

        private DateTime? createddateField;

        private string modifiedbyField;

        private DateTime? modifieddateField;

        private string statusField;

        private string approvedbyField;

        private DateTime? approvedOnField;

        private string workflowField;
        public string DRID
        {
            get
            {
                return this.dridField;
            }
            set
            {
                this.dridField = value;
            }
        }

        public string documentmanagerid
        {
            get
            {
                return this.documentmanageridField;
            }
            set
            {
                this.documentmanageridField = value;
            }
        }

        public string documenttype
        {
            get
            {
                return this.documenttypeField;
            }
            set
            {
                this.documenttypeField = value;
            }
        }

        public string department
        {
            get
            {
                return this.departmentField;
            }
            set
            {
                this.departmentField = value;
            }
        }

        public string Purpose
        {
            get
            {
                return this.purposeField;
            }
            set
            {
                this.purposeField = value;
            }
        }

        public System.Int32? ApprovalsCount
        {
            get
            {
                return this.approvalscountField;
            }
            set
            {
                this.approvalscountField = value;
            }
        }

        public string AssigntoGroup
        {
            get
            {
                return this.assigntogroupField;
            }
            set
            {
                this.assigntogroupField = value;
            }
        }

        public string CreatedBy
        {
            get
            {
                return this.createdbyField;
            }
            set
            {
                this.createdbyField = value;
            }
        }

        public DateTime? CreatedDate
        {
            get
            {
                return this.createddateField;
            }
            set
            {
                this.createddateField = value;
            }
        }

        public string ModifiedBy
        {
            get
            {
                return this.modifiedbyField;
            }
            set
            {
                this.modifiedbyField = value;
            }
        }

        public DateTime? ModifiedDate
        {
            get
            {
                return this.modifieddateField;
            }
            set
            {
                this.modifieddateField = value;
            }
        }
        public string Status
        {
            get
            {
                return this.statusField;
            }
            set
            {
                this.statusField = value;
            }
        }
        public string Workflow
        {
            get
            {
                return this.workflowField;
            }
            set
            {
                this.workflowField = value;
            }
        }
        public string Approvedby
        {
            get
            {
                return this.approvedbyField;
            }
            set
            {
                this.approvedbyField = value;
            }
        }
        public DateTime? ApprovedOn
        {
            get
            {
                return this.approvedOnField;
            }
            set
            {
                this.approvedOnField = value;
            }
        }
        public string Reviwers { get; set; }
        public string Approvals { get; set; }
    }
}