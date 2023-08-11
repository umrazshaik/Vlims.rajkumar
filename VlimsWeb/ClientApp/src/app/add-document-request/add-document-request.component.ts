import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { DepartmentConfiguration, DocumentRequestConfiguration, DocumentTemplateConfiguration, DocumentTypeConfiguration, RequestContext, Usergroupconfiguration, workflowconiguration } from '../model/models';
import { Router } from '@angular/router';
import { CommonService } from '../shared/common.service';
import { DocumentRequestService } from '../Services/document-request.service';
import { ToastrService } from 'ngx-toastr';
import { SpinnerService } from '../spinner/spinner.service';
import { DepartmentconfigurationService } from '../departmentconfiguration.service';
import { DocumentTypeServiceService } from '../Services/document-type-service.service';
import { usergroupconfigurationService } from '../Services/usergroupconfiguration.service';
import { WorkflowServiceService } from '../Services/workflow-service.service';

@Component({
  selector: 'app-add-document-request',
  templateUrl: './add-document-request.component.html',
  styleUrls: ['./add-document-request.component.css']
})
export class AddDocumentRequestComponent implements OnInit {
  adddocreq = new DocumentRequestConfiguration();
  requests: Array<DocumentRequestConfiguration> = [];
  departs: Array<DepartmentConfiguration> = [];
  usergroups: Array<Usergroupconfiguration> = [];
  wflows: Array<workflowconiguration> = [];
  editMode: boolean = false;
  viewMode: boolean = false;
  title: string = 'Add Document Request Configuration';
  doctypes: Array<DocumentTypeServiceService> = [];
  newdocrequest = new DocumentTemplateConfiguration();
  objname: string;
  constructor(private commonsvc: CommonService, private doctypeservice: usergroupconfigurationService, private docReqServ: DocumentRequestService, private deptservice: DepartmentconfigurationService, private wfservice: WorkflowServiceService, private doctypeserv: DocumentTypeServiceService, private router: Router, private toastr: ToastrService, private cdr: ChangeDetectorRef, private loader: SpinnerService,) { }
  ngOnInit() {
    const urlPath = this.router.url;
    const segments = urlPath.split('/');
    const lastSegment = segments[segments.length - 1];
    this.getdocumentrequest();
    this.getdepartments();
    this.getdocumenttypeconfig();
    this.getusergroupInfo();
    this.getworkflowinfo()
    debugger;
    if (lastSegment == "viewdocreq") {
      this.viewMode = this.commonsvc.docrequest != null ? true : false;
      this.viewMode = true;
      if (this.viewMode) {
        this.adddocreq = this.commonsvc.docrequest;
      }
      if (this.viewMode) {
        debugger
        this.objname = this.commonsvc.objname;
        this.getByName(this.objname);
        this.title = "View Document Type Configuration"
      }
      this.cdr.detectChanges();
    }
    if (lastSegment == "editdocreq") {

      this.editMode = this.commonsvc.docrequest != null ? true : false;
      if (this.editMode) {
        this.adddocreq = this.commonsvc.docrequest;
        this.title = "Edit Document Request"
        this.cdr.detectChanges();
        this.loader.hide();
      }
    }

    /*$('select').selectpicker();*/
  }
  getdocumentrequest() {
    let objrequest: RequestContext = { PageNumber: 1, PageSize: 50, Id: 0 };
    this.docReqServ.getdocumentrequest(objrequest).subscribe((data: any) => {
      debugger
      this.requests = data.response;
    });
  }
  getusergroupInfo() {
    let objrequest: RequestContext = { PageNumber: 1, PageSize: 1, Id: 0 };
    return this.doctypeservice.getusergroupconfiguration(objrequest).subscribe((data: any) => {
      debugger
      this.usergroups = data.Response;
    });
  }
  submit(adddocreq: DocumentRequestConfiguration) {
    debugger
    this.adddocrequest(adddocreq);

  }
  adddocrequest(adddocreq: DocumentRequestConfiguration) {
    debugger
    adddocreq.CreatedBy = "admin";
    adddocreq.ModifiedBy = "admin";
    adddocreq.Status = "In-Progress";
    this.docReqServ.adddocreqconfig(adddocreq).subscribe((res: any) => {
      this.toastr.success('Added');
      this.router.navigate(['/mainpage/documentmanager']);
    });

  }
  closepopup() {
    this.router.navigate(['/mainpage/documentmanager']);
  }
  getdepartments() {
    let objrequest: RequestContext = { PageNumber: 1, PageSize: 1, Id: 0 };
    this.deptservice.getdepartments(objrequest).subscribe((data: any) => {
      debugger
      this.departs = data.Response;

    });
  }
  getdocumenttypeconfig() {
    let objrequest: RequestContext = { PageNumber: 1, PageSize: 1, Id: 0 };
    this.doctypeserv.getdoctypeconfig(objrequest).subscribe((data: any) => {
      debugger
      this.doctypes = data.Response;
    });
  }
  getworkflowinfo() {
    let objrequest: RequestContext = { PageNumber: 1, PageSize: 1, Id: 0 };
    this.wfservice.getworkflow(objrequest).subscribe((data: any) => {
      debugger
      this.wflows = data.Response;
    });
  }
  getByName(objname: string) {
    this.loader.show();
    debugger
    return this.docReqServ.getdocrequestbyname(objname).subscribe((data: any) => {
      debugger
      this.commonsvc.docrequest = data;
      this.adddocreq = data;
      this.loader.hide();
      console.log(this.newdocrequest);
    }, er => {
      this.toastr.error('loading failed');
      this.loader.hide();
    });
  }
  ManageApprovalFlow(adddocreq: DocumentRequestConfiguration) {
    adddocreq.CreatedBy = "admin";
    this.docReqServ.ManageApprovalFlow(adddocreq).subscribe((res: any) => {
      this.toastr.success('Added');
      this.router.navigate(['/mainpage/documentmanager']);
    });
  }
}




