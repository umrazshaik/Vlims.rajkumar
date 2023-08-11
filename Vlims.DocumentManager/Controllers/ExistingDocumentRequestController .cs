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
    [Route("api/existingdocumentreq")]
    public class ExistingDocumentRequestController : ControllerBase
    {

        private readonly IExistingDocumentRequestService existingDocumentRequestService;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="existingDocumentRequestService"></param>
        public ExistingDocumentRequestController(IExistingDocumentRequestService _existingDocumentRequestService)
        {
            this.existingDocumentRequestService = _existingDocumentRequestService;
        }

        /// <summary>
        /// This method is used to Get List of DocumentEffective
        /// </summary>
        /// <param name="requestContext"></param>
        [HttpPost("GetAllDocEff")]
        public ActionResult GetAllDocumentEffective([FromQuery] RequestContext requestContext)
        {
            var result = existingDocumentRequestService.GetAllExistingDocumentRequest(requestContext);
            return Ok(result);
        }

        /// <summary>
        /// This method is used to Get DocumentEffective By Id dEID
        /// </summary>
        /// <param name="dEID"></param>
        [HttpGet("{dEID}")]
        public ActionResult<ExistingDocumentRequest> GetDocumentEffectiveByDEID(string dEID)
        {
            var result = existingDocumentRequestService.GetExistingDocumentRequestByEDRId(dEID);
            return result;
        }

        /// <summary>
        /// This Method is used to Save DocumentEffective
        /// </summary>
        /// <param name="documentEffective"></param>
        [HttpPost("savedocumenteffective")]
        public ActionResult<System.Boolean> SaveDocumentEffective(ExistingDocumentRequest documentEffective)
        {
            var result = existingDocumentRequestService.SaveExistingDocumentRequest(documentEffective);
            return result;
        }

        /// <summary>
        /// This Method is used to update DocumentEffective
        /// </summary>
        /// <param name="documentEffective"></param>
        [HttpPost("updatedocumenteffective")]
        public ActionResult<System.Boolean> UpdateDocumentEffective(ExistingDocumentRequest documentEffective)
        {
            var result = existingDocumentRequestService.UpdateExistingDocumentRequest(documentEffective);
            return result;
        }

        /// <summary>
        /// This Method is used to update DocumentEffective
        /// </summary>
        /// <param name="documentEffective"></param>
        [HttpPost("UpdateDocumentEffectiveApprove")]
        public ActionResult<System.Boolean> UpdateDocumentEffectiveApprove(ExistingDocumentRequest documentEffective)
        {
            var result = existingDocumentRequestService.UpdateExistingDocumentRequest(documentEffective);
            return result;
        }

        /// <summary>
        /// This Method is used to Delete DocumentEffective By Id dEID
        /// </summary>
        /// <param name="dEID"></param>
        [HttpDelete("{dEID}")]
        public ActionResult<bool> DeleteDocumentEffectiveByDEID(string dEID)
        {
            var result = existingDocumentRequestService.DeleteExistingDocumentRequestByEDRId(dEID);
            return result;
        }

        /// <summary>
        /// This Method is used to Delete DocumentEffective By Multiple ids dEIDs
        /// </summary>
        /// <param name="dEIDs"></param>
        [HttpDelete("deleteAll")]
        public ActionResult<bool> DeleteAllDocumentEffective(List<int> dEIDs)
        {
            var result = existingDocumentRequestService.DeleteAllExistingDocumentRequest(dEIDs);
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
            var result = existingDocumentRequestService.GetAllExistingDocumentRequest(requestContext);
            if (result != null)
            {
                //responseContext = result.Response.FirstOrDefault(o => o.documenttype.Equals(name, StringComparison.InvariantCultureIgnoreCase));
            }
            return Ok(responseContext);
        }


        [HttpPost("upload")]
        public async Task<IActionResult> UploadFile(IFormFile file)
        {
            try
            {
                string uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "Exsting");
                if (!Directory.Exists(uploadsFolder))
                {
                    Directory.CreateDirectory(uploadsFolder);
                }

                string uniqueFileName = file.FileName;
                string filePath = Path.Combine(uploadsFolder, uniqueFileName);

                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(fileStream);
                }

                return Ok(new { message = "File uploaded successfully.", uniqueFileName });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred while uploading the file: {ex.Message}");
            }
        }

        [HttpPost("preview")]
        public ActionResult PreviewDocumentPreparation(ExistingDocumentRequest existingDocumentRequest)
        {

            if (!string.IsNullOrEmpty(existingDocumentRequest.document))
            {
                string uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "Exsting");
                uploadsFolder = Path.Combine(uploadsFolder, existingDocumentRequest.document);

                if (System.IO.File.Exists(uploadsFolder))
                {
                    var pdfBytes = System.IO.File.ReadAllBytes(uploadsFolder);
                    return Ok(pdfBytes); //r
                }
            }
            return BadRequest();
        }
        [HttpPost("import")]
        public ActionResult<bool> ImportBulkDocuments(IFormFile fileInfo)
        {
            var result = existingDocumentRequestService.Importbulkdocuments(fileInfo);
            return result;
        }
    }
}