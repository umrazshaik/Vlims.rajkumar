//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Vlims.DocumentManager.DataAccess
{
    using System;
    using System.Data;
    using System.Linq;
    using System.Data.SqlClient;
    using System.Collections.Generic;
    using Newtonsoft.Json;
    using Vlims.Common;
    using Vlims.DMS.Entities;



    // Comment
    public interface IAdditionalTaskData
    {
        
        DataSet GetAllAdditionalTask(RequestContext requestContext);
        
        DataSet GetAdditionalTaskByATID(string aTID);
        
        bool SaveAdditionalTask(AdditionalTask additionalTask);
        
        bool UpdateAdditionalTask(AdditionalTask additionalTask);
        
        bool DeleteAdditionalTaskByATID(string aTID);
        
        bool DeleteAllAdditionalTask(List<int> aTIDs);
    }
}
