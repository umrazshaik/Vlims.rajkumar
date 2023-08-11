import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentPreperationConfiguration, RequestContext, WorkItemsConfiguration } from 'src/app/models/model';
import { DocumentTypeServiceService } from 'src/app/modules/services/document-type-service.service';
import { WorkflowServiceService } from 'src/app/modules/services/workflow-service.service';
import { DepartmentconfigurationService } from 'src/app/modules/services/departmentconfiguration.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonService } from 'src/app/shared/common.service';
import { DocumentTemplateServiceService } from 'src/app/modules/services/document-template-service.service';
import { DocumentPreperationService } from 'src/app/modules/services/document-preperation.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { WorkitemsService } from 'src/app/modules/services/workitems.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-review-prepation',
  templateUrl: './review-prepation.component.html',
  styleUrls: ['./review-prepation.component.scss']
})
export class ReviewPrepationComponent {

  preparation: DocumentPreperationConfiguration = new DocumentPreperationConfiguration();
  selectedFile: any;
  isUploaded: boolean = false;
  departmentsSource = [];
  typeSource = [];
  workflowsSource = [];
  docNoType = 'User Defined';
  @ViewChild("fileInput", { static: false })
  InputVar: ElementRef | undefined;
  fileBytes: Uint8Array = new Uint8Array();
  modalRef: BsModalRef | undefined;
  pdfBytes: Uint8Array | undefined;
  safePdfDataUrl: SafeResourceUrl | undefined;
  data: string = '<base64-encoded-data>';
  pdfUrl: string | null = null;
  viewMode: boolean = false;
  editMode: boolean = false;
  requestId:number=0;workId:number=0;statuss:string='';type:string='';iscompleted:boolean=false;
  isreview:boolean=false;isapprove:boolean=false;reviewpendingcount=0;
  username:string=''
  workitems: Array<WorkItemsConfiguration> = [];
  finalStatus:string=''
  stageSource = [
    { label: 'Select Stage', value: '' },
    { label: 'Stage 1', value: 'option2' },
    { label: 'Stage 2', value: 'option3' },
  ];

  templatesSource = [];

  constructor(private location: Location, private router: Router, 
    private workitemssvc:WorkitemsService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private modalService: BsModalService, private sanitizer: DomSanitizer, private spinner: NgxSpinnerService, private docPreperationService: DocumentPreperationService, private commonsvc: CommonService, private deptservice: DepartmentconfigurationService, private wfservice: WorkflowServiceService, private doctypeserv: DocumentTypeServiceService, private templateService: DocumentTemplateServiceService) { }

  ngOnInit() {
    debugger
    const user=localStorage.getItem("username");
    if(user!=null && user!=undefined)
    {
      this.commonsvc.createdBy=user;
      this.username=user;
    }
    this.route.params.subscribe(params => {
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
    else if (this.commonsvc.preperation.dpnid) {
      this.preparation = this.commonsvc.preperation;
    }
    else {
      this.location.back();
    }
    this.getdocttemplate();
    
  }
  getbyId(arg0: number) {
    this.spinner.show();
    return this.docPreperationService.getbyId(arg0).subscribe((data: any) => {
      this.preparation = data;
      this.spinner.hide();
      console.log('request', this.preparation);
    });
  }
  approve() {
    //this.preparation.status = 'Approved'
    this.preparation.ModifiedBy=this.username;
    this.preparation.status=this.finalStatus;
    if(this.isapprove && this.reviewpendingcount>0)
    {
      this.toastr.error('Reviews Pending');
    }
    else
    {
    this.savePreparation();
    }
  }
  reinitiative() {
    this.location.back();
  }
  reject() {
    this.preparation.ModifiedBy=this.commonsvc.getUsername();
    this.preparation.status='Rejected';
    this.savePreparation();
    //this.location.back();
  }
  savePreparation() {    
    this.spinner.show();
    if(this.viewMode && this.preparation.status!='Rejected')
    {
      this.preparation.ModifiedBy=this.commonsvc.createdBy;
      this.preparation.status=this.finalStatus;
    }
    this.docPreperationService.ManageDocument(this.preparation).subscribe(res => {
      this.commonsvc.preperation = new DocumentPreperationConfiguration();
      console.log(res);
      this.spinner.hide();
      this.location.back();
    }, er => {
      console.log(er);
      this.spinner.hide();
    })
  }

  onCancel() {
    this.location.back();
  }


  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.isUploaded = false; // Reset upload status when a new file is selected
  }
  onUpload(): void {
    if (!this.selectedFile) {
      console.error('No file selected.');
      return;
    }
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    this.spinner.show();
    this.docPreperationService.upload(formData)
      .subscribe(
        (response: any) => {

          this.preparation.path = response.filePath;
          this.preparation.document = response.filePath;
          this.commonsvc.preperation = this.preparation;
          this.isUploaded = true; // Set upload status to true after successful upload
          this.spinner.hide();
        },
        (error) => {
          console.error('Error uploading file:', error);
          this.spinner.hide();
        }
      );
  }
  onDeleteFile(): void {
    this.selectedFile = null;
    this.isUploaded = false;
    this.preparation.document = '';
    this.preparation.path = '';
    if (this.InputVar) this.InputVar.nativeElement.value = "";
  }

  closeModel() {
    if (this.modalRef)
      this.modalRef.hide();
  }

  openViewer(template: TemplateRef<any>): void {
    if (this.pdfBytes) {
      console.log("safePdfDataUrl" + "-" + this.pdfBytes);
      const pdfBlob = this.b64toBlob(this.pdfBytes.toString(), 'application/pdf');
      this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(pdfBlob)) as string;
      console.log("safePdfDataUrl" + "-" + this.safePdfDataUrl);
      this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    }
  }

  // Function to convert base64 to Blob
  private b64toBlob(b64Data: string, contentType: string = '', sliceSize: number = 512): Blob {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    return new Blob(byteArrays, { type: contentType });
  }
  previewtemplate(template: TemplateRef<any>) {
    this.spinner.show();
    this.docPreperationService.preview(this.preparation).subscribe((data: any) => {
      debugger
      this.fileBytes = data;
      this.pdfBytes = this.fileBytes;
      this.spinner.hide();
      this.openViewer(template);
    }, er => {
      this.spinner.hide();
    });
  }

  getdocttemplate() {
    let objrequest: RequestContext = { PageNumber: 1, PageSize: 1, Id: 0 };
    this.templateService.getdocttemplate(objrequest).subscribe((data: any) => {
      this.templatesSource = data.Response;
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
        this.workitems=this.workitems.filter(p=>p.ReferenceId==this.requestId && p.TaskType=='Preparation');
        if(this.workitems)
        {
          this.workitems.sort((a, b) => a.WITId - b.WITId);
          const work=this.workitems.filter(o=>o.WITId==this.workId);
                  this.statuss = work[0].ActionType;
                  this.iscompleted=work[0].IsCompleted;
                  const totalreviewcount = this.workitems.filter(o => o.ActionType === this.statuss).length;
                  this.reviewpendingcount = this.workitems.filter(o => o.ActionType === 'Review' && o.IsCompleted==false).length;
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
