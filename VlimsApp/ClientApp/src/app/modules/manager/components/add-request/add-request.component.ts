import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { DocumentRequestConfiguration, RequestContext, WorkItemsConfiguration } from 'src/app/models/model';
import { DepartmentconfigurationService } from 'src/app/modules/services/departmentconfiguration.service';
import { WorkflowServiceService } from 'src/app/modules/services/workflow-service.service';
import { DocumentTypeServiceService } from 'src/app/modules/services/document-type-service.service';
import { DocumentRequestService } from 'src/app/modules/services/document-request.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';
import { ToastrService } from 'ngx-toastr';
import { WorkitemsService } from 'src/app/modules/services/workitems.service';
@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.scss'],
})
export class AddRequestComponent {
  departmentsSource = []; type:string=''
  requestId:number=0;workId:number=0;statuss:string='';iscompleted:boolean=false;
  username:string='';isreview:boolean=false;isapprove:boolean=false;reviewpendingcount=0;
  workitems: Array<WorkItemsConfiguration> = [];
  finalStatus:string=''
  typeSource = [];
  workflowsSource = [];
  request = new DocumentRequestConfiguration();
  editMode: boolean = false;
  viewMode: boolean = false;
  stageSource = [
    { label: 'Select Stage', value: '' },
    { label: 'Stage 1', value: 'option2' },
    { label: 'Stage 2', value: 'option3' },
  ];


  constructor(private router: Router, private location: Location, private toastr: ToastrService, 
    private workitemssvc:WorkitemsService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService, private commonsvc: CommonService, private deptservice: DepartmentconfigurationService, private wfservice: WorkflowServiceService, private doctypeserv: DocumentTypeServiceService, private documentRequestService: DocumentRequestService) { }

  ngOnInit() {
    debugger
    const user=localStorage.getItem("username");
    if(user!=null && user!=undefined)
    {
      this.commonsvc.createdBy=user;
      this.username=user;
    }
    this.route.params.subscribe(params => {
      debugger
      this.requestId = params['requestId'];
      this.workId = params['workId'];
      this.type=params['type'];
    });
    const urlPath = this.router.url;
    const segments = urlPath.split('/');
    if (this.type == 'view') {
      this.viewMode = true;
      this.getbyId(this.requestId);
      this.getworkflowitems();
    }
    else if (segments.slice(-1).toString() == 'edit') {
      this.editMode = true;
      if(this.commonsvc.request==null)
      {
        this.location.back();
      }
      this.request = this.commonsvc.request;
    }
    this.getdepartments();
    this.getdocumenttypeconfig();
    this.getworkflowinfo();
  }
  getbyId(arg0: number) {
    this.spinner.show();
    return this.documentRequestService.getbyId(arg0).subscribe((data: any) => {
      this.request = data;
      this.spinner.hide();
      console.log('request', data);
    });
  }
  approve() {
    //this.request.status = this.statuss;
    
    this.request.modifiedBy=this.username;
    this.request.status=this.finalStatus;
    if(this.isapprove && this.reviewpendingcount>0)
    {
      this.toastr.error('Reviews Pending');
    }
    else
    {
    this.updateRequest();
    }
  }
  reinitiative() {
    this.request.status = 'Re-Initiated'
    this.location.back();
    //this.updateRequest();
  }
  reject() {
    this.request.modifiedBy=this.commonsvc.getUsername();
    this.request.status = 'Rejected'
    this.location.back();
    this.updateRequest();
  }

  saveRequest() {
    if (this.editMode) {
      this.updateRequest();
    }
    else {
      this.addRequest();
    }
  }

  addRequest() {
    if (!this.viewMode) {
      this.request.createdBy = 'admin';
      this.request.modifiedBy = 'admin';
      this.request.status = 'In-Progress';
      this.request.createdDate = new Date().toISOString();
      this.request.modifiedDate = new Date().toISOString();
      this.spinner.show();

      this.documentRequestService.adddocreqconfig(this.request).subscribe(res => {
        this.commonsvc.request = new DocumentRequestConfiguration();
        this.location.back();
        this.spinner.hide();
        this.toastr.success('Document Request Saved Succesfull!', 'Saved.!');
      }, er => {
        console.log(er);
        this.spinner.hide();
      });
    }
  }

  updateRequest() {
    if(this.viewMode && this.request.status!='Rejected')
    {
      this.request.modifiedBy=this.commonsvc.createdBy;
      this.request.status=this.finalStatus;
    }
    this.documentRequestService.updatedocreqconfig(this.request).subscribe(res => {
      this.commonsvc.request = new DocumentRequestConfiguration();
      this.location.back();
      this.spinner.hide();
    }, er => {
      console.log(er);
      this.spinner.hide();
    });
  }

  onCancel() {
    this.location.back();
  }

  getdepartments() {
    let objrequest: RequestContext = { PageNumber: 1, PageSize: 1, Id: 0 };
    this.deptservice.getdepartments(objrequest).subscribe((data: any) => {
      this.departmentsSource = data.Response;
    });
  }
  getdocumenttypeconfig() {
    let objrequest: RequestContext = { PageNumber: 1, PageSize: 1, Id: 0 };
    this.doctypeserv.getdoctypeconfig(objrequest).subscribe((data: any) => {
      this.typeSource = data.Response;
    });
  }
  getworkflowinfo() {
    let objrequest: RequestContext = { PageNumber: 1, PageSize: 1, Id: 0 };
    this.wfservice.getworkflow(objrequest).subscribe((data: any) => {
      this.workflowsSource = data.Response;
      console.log(this.workflowsSource);
    });
  }
  getworkflowitems() {
    this.spinner.show();
    const user=localStorage.getItem("username");
    if(user!=null && user!=undefined){
      this.commonsvc.createdBy=user;
    }
    return this.workitemssvc.getworkitems(this.commonsvc.req).subscribe((data: any) => {
      debugger
      this.workitems = data.Response;
      if(this.workitems.length>0){
        this.workitems=this.workitems.filter(p=>p.ReferenceId== this.requestId && p.TaskType=='Request');
        if(this.workitems)
        {
          this.workitems.sort((a, b) => a.WITId - b.WITId);
          const work=this.workitems.filter(o=>o.WITId==this.workId);
                  this.statuss = work[0].ActionType;
                  this.iscompleted=work[0].IsCompleted;
                  const totalreviewcount = this.workitems.filter(o => o.ActionType === this.statuss).length;
                  debugger
                  this.reviewpendingcount = this.workitems.filter(o => o.ActionType === 'Review' && o.IsCompleted==false).length;
                  console.log('pendingcount-',this.reviewpendingcount);
                  const reviewedcount = this.workitems.filter(o => o.ActionType === this.statuss && o.IsCompleted).length;
                  const countt = totalreviewcount - reviewedcount;
                  if (this.statuss === 'Review') {
                    this.isreview=true;
                    if (countt === 1) {
                      this.finalStatus = 'Reviewed';
                    } else if (countt > 1) {
                      this.finalStatus = 'Pending Review';
                    } else if (countt === totalreviewcount) {
                      this.finalStatus = 'Pending Review';
                    }
                  } else {
                    if (countt === 1) {
                      this.isapprove=true;
                      this.finalStatus = 'Approved';
                    } else if (countt > 1) {
                      this.finalStatus = 'Pending Approve';
                    } else if (countt === totalreviewcount) {
                      this.finalStatus = 'Pending Approve';
                    }
                  }
                  console.log('status', this.finalStatus);
                }
              }
              this.spinner.hide();
            });
          }
}
