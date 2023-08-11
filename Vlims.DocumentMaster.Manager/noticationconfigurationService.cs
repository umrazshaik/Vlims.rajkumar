//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Vlims.DocumentMaster.Manager
{
    using System;
    using System.Data;
    using System.Collections.Generic;
    using Vlims.Common;
    using Vlims.DocumentMaster.Entities;
    using Vlims.DocumentMaster.DataAccess;
    using Vlims.Services;

    // Comment
    public class noticationconfigurationService : InoticationconfigurationService
    {
        
        public ResponseContext<noticationconfiguration> GetAllnoticationconfiguration(RequestContext requestContext)
        {
            try
            {
                DataSet dataset = noticationconfigurationData.GetAllnoticationconfiguration(requestContext);
                List<noticationconfiguration> result = noticationconfigurationConverter.SetAllnoticationconfiguration(dataset);
                return new ResponseContext<noticationconfiguration>() { RowCount = CommonConverter.SetRowsCount(dataset), Response = result };
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public noticationconfiguration GetnoticationconfigurationByNCId(int nCId)
        {
            try
            {
                DataSet dataset = noticationconfigurationData.GetnoticationconfigurationByNCId(nCId);
                noticationconfiguration result = noticationconfigurationConverter.Setnoticationconfiguration(dataset);
                return result;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool Savenoticationconfiguration(noticationconfiguration noticationconfiguration)
        {
            try
            {
                String validationMessages = noticationconfigurationValidator.IsValidnoticationconfiguration(noticationconfiguration);
                if (validationMessages.Length <= 0)
                {
                    var result = noticationconfigurationData.Savenoticationconfiguration(noticationconfiguration);
                    return result;
                }
                throw new System.Exception(validationMessages);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool Updatenoticationconfiguration(noticationconfiguration noticationconfiguration)
        {
            try
            {
                String validationMessages = noticationconfigurationValidator.IsValidnoticationconfiguration(noticationconfiguration);
                if (validationMessages.Length <= 0)
                {
                    bool result = noticationconfigurationData.Updatenoticationconfiguration(noticationconfiguration);
                    return result;
                }
                throw new System.Exception(validationMessages);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeletenoticationconfigurationByNCId(int nCId)
        {
            try
            {
                return noticationconfigurationData.DeletenoticationconfigurationByNCId(nCId);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public bool DeleteAllnoticationconfiguration(List<int> nCIds)
        {
            try
            {
                return noticationconfigurationData.DeleteAllnoticationconfiguration(nCIds);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
    }
}