//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace PolicySummary.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Authorization;
    using Vlims.DocumentManager.Manager;
    using Vlims.Common;
    using Vlims.DMS.Entities;



    /// <summary>
    /// Comment
    /// </summary>
    [ApiController()]
    [Route("api/documenteffective")]
    public class DocumentEffectiveController : ControllerBase
    {
        
        private readonly IDocumentEffectiveService documentEffectiveService;
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="documentEffectiveService"></param>
        public DocumentEffectiveController(IDocumentEffectiveService documentEffectiveService)
        {
            this.documentEffectiveService = documentEffectiveService;
        }
        
        /// <summary>
        /// This method is used to Get List of DocumentEffective
        /// </summary>
        /// <param name="requestContext"></param>
        [HttpPost("GetAllDocEff")]
        public ActionResult GetAllDocumentEffective([FromQuery] RequestContext requestContext)
        {
            var result = documentEffectiveService.GetAllDocumentEffective(requestContext);
            return Ok(result);
        }
        
        /// <summary>
        /// This method is used to Get DocumentEffective By Id dEID
        /// </summary>
        /// <param name="dEID"></param>
        [HttpGet("getbyId")]
        public ActionResult<DocumentEffective> GetDocumentEffectiveByDEID(int dEID)
        {
            var result = documentEffectiveService.GetDocumentEffectiveByDEID(dEID);
            return result;
        }
        
        /// <summary>
        /// This Method is used to Save DocumentEffective
        /// </summary>
        /// <param name="documentEffective"></param>
        [HttpPost("savedocumenteffective")]
        public ActionResult<System.Boolean> SaveDocumentEffective(DocumentEffective documentEffective)
        {
            var result = documentEffectiveService.SaveDocumentEffective(documentEffective);
            return result;
        }
        
        /// <summary>
        /// This Method is used to update DocumentEffective
        /// </summary>
        /// <param name="documentEffective"></param>
        [HttpPost("updatedocumenteffective")]
        public ActionResult<System.Boolean> UpdateDocumentEffective(DocumentEffective documentEffective)
        {
            var result = documentEffectiveService.UpdateDocumentEffective(documentEffective);
            return result;
        }

        /// <summary>
        /// This Method is used to update DocumentEffective
        /// </summary>
        /// <param name="documentEffective"></param>
        [HttpPost("UpdateDocumentEffectiveApprove")]
        public ActionResult<System.Boolean> UpdateDocumentEffectiveApprove(DocumentEffective documentEffective)
        {
            var result = documentEffectiveService.UpdateDocumentEffectiveApprove(documentEffective);
            return result;
        }

        /// <summary>
        /// This Method is used to Delete DocumentEffective By Id dEID
        /// </summary>
        /// <param name="dEID"></param>
        [HttpDelete("{dEID}")]
        public ActionResult<bool> DeleteDocumentEffectiveByDEID(string dEID)
        {
            var result = documentEffectiveService.DeleteDocumentEffectiveByDEID(dEID);
            return result;
        }
        
        /// <summary>
        /// This Method is used to Delete DocumentEffective By Multiple ids dEIDs
        /// </summary>
        /// <param name="dEIDs"></param>
        [HttpDelete("deleteAll")]
        public ActionResult<bool> DeleteAllDocumentEffective(List<int> dEIDs)
        {
            var result = documentEffectiveService.DeleteAllDocumentEffective(dEIDs);
            return result;
        }
        /// <summary>
        /// This method is used to Get List of Documentrequest
        /// </summary>
        /// <param name="docreq"></param>
        [HttpGet("GetDocumentRequestbyName")]
        public ActionResult GetDocumentRequestbyName(string name)
        {
            DocumentEffective responseContext = new DocumentEffective();
            RequestContext requestContext = new RequestContext();
            requestContext.PageNumber = 1;
            requestContext.PageSize = 50;
            var result = documentEffectiveService.GetAllDocumentEffective(requestContext);
            if (result != null)
            {
                responseContext = result.Response.FirstOrDefault(o => o.documenttype.Equals(name, StringComparison.InvariantCultureIgnoreCase));
            }
            return Ok(responseContext);
        }
    }
}