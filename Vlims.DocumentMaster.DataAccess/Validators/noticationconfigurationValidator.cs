//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Vlims.Services
{
    using System;
    using System.Text;
    using System.Linq;
    using Vlims.Common;
    using Vlims.DocumentMaster.Entities;

    // Comment
    public static class noticationconfigurationValidator
    {
        
        public static string IsValidnoticationconfiguration(noticationconfiguration noticationconfiguration)
        {
            try
            {
                StringBuilder validationMessages = new StringBuilder();
                ValidationHelper validationHelper = new ValidationHelper();
                validationMessages.Append(validationHelper.LengthCheckValidator(noticationconfiguration.NCId,50, nameof(noticationconfiguration.NCId)));
                validationMessages.Append(validationHelper.NullCheckValidator(noticationconfiguration.DocumentMasterId, nameof(noticationconfiguration.DocumentMasterId)));
                validationMessages.Append(validationHelper.LengthCheckValidator(noticationconfiguration.DocumentMasterId,50, nameof(noticationconfiguration.DocumentMasterId)));
                validationMessages.Append(validationHelper.LengthCheckValidator(noticationconfiguration.CreatedBy,100, nameof(noticationconfiguration.CreatedBy)));
                validationMessages.Append(validationHelper.LengthCheckValidator(noticationconfiguration.ModifiedBy,100, nameof(noticationconfiguration.ModifiedBy)));
                if (!String.IsNullOrEmpty(validationMessages.ToString()))
                {
                    return Convert.ToString(validationMessages.Remove(validationMessages.ToString().LastIndexOf(','),1));
                }
                else
                {
                    return Convert.ToString(validationMessages);
                }
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }
    }
}
