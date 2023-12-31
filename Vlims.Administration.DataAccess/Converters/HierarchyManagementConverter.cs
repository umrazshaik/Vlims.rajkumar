//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Vlims.Administration.DataAccess
{
    using System;
    using System.Text;
    using System.IO;
    using System.Linq;
    using System.Data;
    using System.Collections.Generic;
    using Newtonsoft.Json;
    using Vlims.Administration.Entities;
    using Vlims.Common;


    // Comment
    public static class HierarchyManagementConverter
    {
        
        public static List<HierarchyManagement> SetAllHierarchyManagement(DataSet dataset)
        {
            try
            {
                List<HierarchyManagement> result = new List<HierarchyManagement>();
                HierarchyManagement hierarchyManagementData;
                if (dataset != null && dataset.Tables.Count > 0 && dataset.Tables[0].Rows.Count > 0)
                {
                    for (int i = 0; (i < dataset.Tables[0].Rows.Count); i = (i + 1))
                    {
                        DataRow row = dataset.Tables[0].Rows[i];
                        hierarchyManagementData = new HierarchyManagement();
                        hierarchyManagementData.HMId = Convert.ToString(row[HierarchyManagementConstants.HMId.Trim()]);
                        hierarchyManagementData.AdminManagerId = Convert.ToString(row[HierarchyManagementConstants.AdminManagerId.Trim()]);
                        hierarchyManagementData.DepartmentConfiguration = Convert.ToString(row[HierarchyManagementConstants.DepartmentConfiguration.Trim()]);
                        hierarchyManagementData.RoleConfiguration = Convert.ToString(row[HierarchyManagementConstants.RoleConfiguration.Trim()]);
                        hierarchyManagementData.SetFunctionalProfile = Convert.ToString(row[HierarchyManagementConstants.SetFunctionalProfile.Trim()]);
                        hierarchyManagementData.CreatedBy = Convert.ToString(row[HierarchyManagementConstants.CreatedBy.Trim()]);
                        hierarchyManagementData.CreatedDate = DatatypeConverter.SetDateTime(row[HierarchyManagementConstants.CreatedDate.Trim()]);
                        hierarchyManagementData.ModifiedBy = Convert.ToString(row[HierarchyManagementConstants.ModifiedBy.Trim()]);
                        hierarchyManagementData.ModifiedDate = DatatypeConverter.SetDateTime(row[HierarchyManagementConstants.ModifiedDate.Trim()]);
                        result.Add(hierarchyManagementData);
                    }
                }
                return result;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public static HierarchyManagement SetHierarchyManagement(DataSet dataset)
        {
            var result = SetAllHierarchyManagement(dataset);
            if (result.Count > 0)
            {
                return result.FirstOrDefault();
            }
            return null;
        }
    }
}
