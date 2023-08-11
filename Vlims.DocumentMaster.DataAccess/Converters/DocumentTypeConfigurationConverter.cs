//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Vlims.DocumentMaster.DataAccess
{
    using System;
    using System.Linq;
    using System.Data;
    using System.Collections.Generic;
    using Vlims.DocumentMaster.Entities;
    using Vlims.Common;

    // Comment
    public static class DocumentTypeConfigurationConverter
    {
        
        public static List<DocumentMaster.Entities.DocumentTypeConfiguration> SetAllDocumentTypeConfiguration(DataSet dataset)
        {
            try
            {
                List<DocumentTypeConfiguration> result = new List<DocumentTypeConfiguration>();
                DocumentTypeConfiguration documentTypeConfigurationData;
                if (dataset != null && dataset.Tables.Count > 0 && dataset.Tables[0].Rows.Count > 0)
                {
                    for (int i = 0; (i < dataset.Tables[0].Rows.Count); i = (i + 1))
                    {
                        DataRow row = dataset.Tables[0].Rows[i];
                        documentTypeConfigurationData = new DocumentTypeConfiguration();
                        documentTypeConfigurationData.DTCId = Convert.ToString(row[DocumentTypeConfigurationConstants.DTCId.Trim('@')]);
                        documentTypeConfigurationData.DocumentMasterId = Convert.ToString(row[DocumentTypeConfigurationConstants.DocumentMasterId.Trim('@')]);
                        documentTypeConfigurationData.Documenttypename = Convert.ToString(row[DocumentTypeConfigurationConstants.Documenttypename.Trim('@')]);
                        documentTypeConfigurationData.documenttypeprefix = Convert.ToString(row[DocumentTypeConfigurationConstants.documenttypeprefix.Trim('@')]);
                        documentTypeConfigurationData.Description = Convert.ToString(row[DocumentTypeConfigurationConstants.Description.Trim('@')]);
                        documentTypeConfigurationData.Assigntodepartment = Convert.ToString(row[DocumentTypeConfigurationConstants.Assigntodepartment.Trim('@')]);
                        documentTypeConfigurationData.CreatedBy = Convert.ToString(row[DocumentTypeConfigurationConstants.CreatedBy.Trim('@')]);
                        documentTypeConfigurationData.CreatedDate = DatatypeConverter.SetDateTime(row[DocumentTypeConfigurationConstants.CreatedDate.Trim('@')]);
                        documentTypeConfigurationData.ModifiedBy = Convert.ToString(row[DocumentTypeConfigurationConstants.ModifiedBy.Trim('@')]);
                        documentTypeConfigurationData.ModifiedDate = DatatypeConverter.SetDateTime(row[DocumentTypeConfigurationConstants.ModifiedDate.Trim('@')]);
                        documentTypeConfigurationData.Status = Convert.ToString(row[DocumentTypeConfigurationConstants.Status_PSY.Trim('@')]);
                        result.Add(documentTypeConfigurationData);
                    }
                }
                return result;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public static DocumentTypeConfiguration SetDocumentTypeConfiguration(DataSet dataset)
        {
            var result = SetAllDocumentTypeConfiguration(dataset);
            if (result.Count > 0)
            {
                return result.FirstOrDefault();
            }
            return null;
        }
    }
}
