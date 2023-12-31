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
    using System.Text;
    using System.IO;
    using System.Linq;
    using System.Data;
    using System.Collections.Generic;
    using Newtonsoft.Json;
    using Vlims.DMS.Entities;
    using Vlims.Common;

    //using PolicySummary.Sheet1.Entities;
    //using VAMLIbrary.Core.Extentions;
    //using PolicySummary.Common.Entities;


    // Comment
    public static class DocumentPreparationConverter
    {
        
        public static List<DocumentPreparation> SetAllDocumentPreparation(DataSet dataset)
        {
            try
            {
                List<DocumentPreparation> result = new List<DocumentPreparation>();
                DocumentPreparation documentPreparationData;
                if (dataset != null && dataset.Tables.Count > 0 && dataset.Tables[0].Rows.Count > 0)
                {
                    for (int i = 0; (i < dataset.Tables[0].Rows.Count); i = (i + 1))
                    {
                        DataRow row = dataset.Tables[0].Rows[i];
                        documentPreparationData = new DocumentPreparation();
                        documentPreparationData.DPNID = Convert.ToString(row[DocumentPreparationConstants.DPNID.Trim('@')]);
                        documentPreparationData.Documentmanagerid = Convert.ToString(row[DocumentPreparationConstants.Documentmanagerid.Trim('@')]);
                        documentPreparationData.documenttitle = Convert.ToString(row[DocumentPreparationConstants.documenttitle.Trim('@')]);
                        documentPreparationData.documentno = Convert.ToString(row[DocumentPreparationConstants.documentno.Trim('@')]);
                        documentPreparationData.documenttype = Convert.ToString(row[DocumentPreparationConstants.documenttype.Trim('@')]);
                        documentPreparationData.department = Convert.ToString(row[DocumentPreparationConstants.department.Trim('@')]);
                        documentPreparationData.document = Convert.ToString(row[DocumentPreparationConstants.document.Trim('@')]);
                        documentPreparationData.template = Convert.ToString(row[DocumentPreparationConstants.template.Trim('@')]);
                        documentPreparationData.wokflow = Convert.ToString(row[DocumentPreparationConstants.wokflow.Trim('@')]);
                        documentPreparationData.details = Convert.ToString(row[DocumentPreparationConstants.details.Trim('@')]);
                        documentPreparationData.CreatedBy = Convert.ToString(row[DocumentPreparationConstants.CreatedBy.Trim('@')]);
                        documentPreparationData.CreatedDate = DatatypeConverter.SetDateTime(row[DocumentPreparationConstants.CreatedDate.Trim('@')]);
                        documentPreparationData.ModifiedBy = Convert.ToString(row[DocumentPreparationConstants.ModifiedBy.Trim('@')]);
                        documentPreparationData.ModifiedDate = DatatypeConverter.SetDateTime(row[DocumentPreparationConstants.ModifiedDate.Trim('@')]);
                        documentPreparationData.Status= Convert.ToString(row[DocumentPreparationConstants.Status.Trim('@')]);
                        documentPreparationData.path = documentPreparationData.document;
                        result.Add(documentPreparationData);
                    }
                }
                return result;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
        
        public static DocumentPreparation SetDocumentPreparation(DataSet dataset)
        {
            var result = SetAllDocumentPreparation(dataset);
            if (result.Count > 0)
            {
                return result.FirstOrDefault();
            }
            return null;
        }
    }
}
