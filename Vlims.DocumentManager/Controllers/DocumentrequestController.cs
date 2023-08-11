//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Vlims.DocumentManager
{
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Authorization;
    using Vlims.DocumentManager.Manager;
    using Vlims.Common;
    using Vlims.DMS.Entities;
    using DocumentFormat.OpenXml.Wordprocessing;
    using Vlims.DocumentMaster.Entities;



    /// <summary>
    /// Comment
    /// </summary>
    [ApiController()]
    [Route("api/documentrequest")]
    public class DocumentrequestController : ControllerBase
    {

        private readonly IDocumentrequestService documentrequestService;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="documentrequestService"></param>
        public DocumentrequestController(IDocumentrequestService documentrequestService)
        {
            this.documentrequestService = documentrequestService;
        }

        /// <summary>
        /// This method is used to Get List of Documentrequest
        /// </summary>
        /// <param name="requestContext"></param>
        [HttpPost("GetAllDocreq")]
        public ActionResult GetAllDocumentrequest([FromQuery] RequestContext requestContext)
        {
            var result = documentrequestService.GetAllDocumentrequest(requestContext);
            return Ok(result);
        }
        /// <summary>
        /// This method is used to Get List of Documentrequest
        /// </summary>
        /// <param name="docreq"></param>
        [HttpGet("GetDocumentRequestbyName")]
        public ActionResult GetDocumentRequestbyName(string name)
        {
            Documentrequest responseContext = new Documentrequest();
            RequestContext requestContext = new RequestContext();
            requestContext.PageNumber = 1;
            requestContext.PageSize = 50;
            var result = documentrequestService.GetAllDocumentrequest(requestContext);
            if (result != null)
            {
                responseContext = result.Response.FirstOrDefault(o => o.documenttype.Equals(name, StringComparison.InvariantCultureIgnoreCase));
            }
            return Ok(responseContext);
        }

        /// <summary>
        /// This method is used to Get Documentrequest By Id dRID
        /// </summary>
        /// <param name="dRID"></param>
        [HttpGet("getbyId")]
        public ActionResult<Documentrequest> GetDocumentrequestByDRID(int dRID)
        {
            var result = documentrequestService.GetDocumentrequestByDRID(dRID);
            return result;
        }

        /// <summary>
        /// This Method is used to Save Documentrequest
        /// </summary>
        /// <param name="documentrequest"></param>
        [HttpPost("savedocumentrequest")]
        public ActionResult<System.Boolean> SaveDocumentrequest(Documentrequest documentrequest)
        {
            var result = documentrequestService.SaveDocumentrequest(documentrequest);
            return result;
        }

        /// <summary>
        /// This Method is used to update Documentrequest
        /// </summary>
        /// <param name="documentrequest"></param>
        [HttpPost("updatedocumentrequest")]
        public ActionResult<System.Boolean> UpdateDocumentrequest(Documentrequest documentrequest)
        {
            var result = documentrequestService.UpdateDocumentrequest(documentrequest);
            return result;
        }

        /// <summary>
        /// This Method is used to Delete Documentrequest By Id dRID
        /// </summary>
        /// <param name="dRID"></param>
        [HttpDelete("{dRID}")]
        public ActionResult<bool> DeleteDocumentrequestByDRID(string dRID)
        {
            var result = documentrequestService.DeleteDocumentrequestByDRID(dRID);
            return result;
        }

        /// <summary>
        /// This Method is used to Delete Documentrequest By Multiple ids dRIDs
        /// </summary>
        /// <param name="dRIDs"></param>
        [HttpDelete("deleteAll")]
        public ActionResult<bool> DeleteAllDocumentrequest(List<int> dRIDs)
        {
            var result = documentrequestService.DeleteAllDocumentrequest(dRIDs);
            return result;
        }
    }
}
