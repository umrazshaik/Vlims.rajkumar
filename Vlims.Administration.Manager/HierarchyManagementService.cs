//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Vlims.Administration.Manager
{
    using System;
    using System.Text;
    using System.IO;
    using System.Linq;
    using System.Data;
    using System.Collections.Generic;

    
    using Vlims.Common;
    using Vlims.Administration.Entities;
    using PolicySummary.Sheet1.Services;
    using Vlims.Administration.DataAccess;


    // Comment
    public class HierarchyManagementService : IHierarchyManagementService
    {
        
      
        
        public ResponseContext<HierarchyManagement> GetAllHierarchyManagement(RequestContext requestContext)
        {
            try
            {
                DataSet dataset = HierarchyManagementData.GetAllHierarchyManagement(requestContext);
                List<HierarchyManagement> result = HierarchyManagementConverter.SetAllHierarchyManagement(dataset);
                return new ResponseContext<HierarchyManagement>() { RowCount = CommonConverter.SetRowsCount(dataset), Response = result };
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public HierarchyManagement GetHierarchyManagementByHMId(string hMId)
        {
            try
            {
                DataSet dataset = HierarchyManagementData.GetHierarchyManagementByHMId(hMId);
                HierarchyManagement result = HierarchyManagementConverter.SetHierarchyManagement(dataset);
                return result;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool SaveHierarchyManagement(HierarchyManagement hierarchyManagement)
        {
            try
            {
                String validationMessages = HierarchyManagementValidator.IsValidHierarchyManagement(hierarchyManagement);
                if (validationMessages.Length <= 0)
                {
                    var result = HierarchyManagementData.SaveHierarchyManagement(hierarchyManagement);
                    return result;
                }
                throw new System.Exception(validationMessages);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool UpdateHierarchyManagement(HierarchyManagement hierarchyManagement)
        {
            try
            {
                String validationMessages = HierarchyManagementValidator.IsValidHierarchyManagement(hierarchyManagement);
                if (validationMessages.Length <= 0)
                {
                    bool result = HierarchyManagementData.UpdateHierarchyManagement(hierarchyManagement);
                    return result;
                }
                throw new System.Exception(validationMessages);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteHierarchyManagementByHMId(string hMId)
        {
            try
            {
                return HierarchyManagementData.DeleteHierarchyManagementByHMId(hMId);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteAllHierarchyManagement(List<int> hMIds)
        {
            try
            {
                return HierarchyManagementData.DeleteAllHierarchyManagement(hMIds);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
    }
}
