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
    public static class DocumentEffectiveConverter
    {

        public static List<DocumentEffective> SetAllDocumentEffective(DataSet dataset)
        {
            try
            {
                List<DocumentEffective> result = new List<DocumentEffective>();
                DocumentEffective documentEffectiveData;
                if (dataset != null && dataset.Tables.Count > 0 && dataset.Tables[0].Rows.Count > 0)
                {
                    for (int i = 0; (i < dataset.Tables[0].Rows.Count); i = (i + 1))
                    {
                        DataRow row = dataset.Tables[0].Rows[i];
                        documentEffectiveData = new DocumentEffective();
                        documentEffectiveData.DEID = Convert.ToString(row[DocumentEffectiveConstants.DEID.Trim('@')]);
                        documentEffectiveData.Documentmanagerid = Convert.ToString(row[DocumentEffectiveConstants.Documentmanagerid.Trim('@')]);
                        documentEffectiveData.documenttitle = Convert.ToString(row[DocumentEffectiveConstants.documenttitle.Trim('@')]);
                        documentEffectiveData.documentno = Convert.ToString(row[DocumentEffectiveConstants.documentno.Trim('@')]);
                        documentEffectiveData.documenttype = Convert.ToString(row[DocumentEffectiveConstants.documenttype.Trim('@')]);
                        documentEffectiveData.document = Convert.ToString(row[DocumentEffectiveConstants.document.Trim('@')]);
                        documentEffectiveData.Department = Convert.ToString(row[DocumentEffectiveConstants.department.Trim('@')]);
                        //documentEffectiveData.document = Convert.ToString(row[DocumentEffectiveConstants.document.Trim('@')]);
                        //documentEffectiveData.EffectiveDate = DatatypeConverter.SetDateTime(row[DocumentEffectiveConstants.EffectiveDate.Trim('@')]);
                        //documentEffectiveData.ReviewDate = DatatypeConverter.SetDateTime(row[DocumentEffectiveConstants.Reviewdate.Trim('@')]);

                        DateTime? effective = DatatypeConverter.SetDateTime(row[DocumentEffectiveConstants.EffectiveDate.Trim('@')]);
                        DateTime? reviwed = DatatypeConverter.SetDateTime(row[DocumentEffectiveConstants.Reviewdate.Trim('@')]);
                        documentEffectiveData.EffectiveDate = GetUIDate(effective);
                        documentEffectiveData.ReviewDate = GetUIDate(reviwed);

                        documentEffectiveData.CreatedBy = Convert.ToString(row[DocumentEffectiveConstants.CreatedBy.Trim('@')]);
                        documentEffectiveData.CreatedDate = DatatypeConverter.SetDateTime(row[DocumentEffectiveConstants.CreatedDate.Trim('@')]);
                        documentEffectiveData.ModifiedBy = Convert.ToString(row[DocumentEffectiveConstants.ModifiedBy.Trim('@')]);
                        documentEffectiveData.ModifiedDate = DatatypeConverter.SetDateTime(row[DocumentEffectiveConstants.ModifiedDate.Trim('@')]);
                        documentEffectiveData.Status = Convert.ToString(row[DocumentEffectiveConstants.Status.Trim('@')]);
                        //documentEffectiveData.template = Convert.ToString(row[DocumentEffectiveConstants.template.Trim('@')]);
                        result.Add(documentEffectiveData);
                    }
                }
                return result;
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }

        private static string GetUIDate(DateTime? documentEffectiveData)
        {
            string dateString = string.Empty; if (documentEffectiveData != null)
            {
                int year = (int)(documentEffectiveData?.Year);
                int month = (int)(documentEffectiveData?.Month);
                int day = (int)(documentEffectiveData?.Day);
                DateTime date = new DateTime(year, month, day);
                dateString = date.ToString("yyyy-MM-dd");
            }
            return dateString;
        }

        public static DocumentEffective SetDocumentEffective(DataSet dataset)
        {
            var result = SetAllDocumentEffective(dataset);
            if (result.Count > 0)
            {
                return result.FirstOrDefault();
            }
            return null;
        }
    }
}
