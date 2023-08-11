import { Component,ChangeDetectorRef, OnInit,Directive,Input } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { CommonService } from '../shared/common.service';
import { DocumentTypeServiceService } from '../Services/document-type-service.service';
import { ToastrService } from 'ngx-toastr';
import { SpinnerService } from '../spinner/spinner.service';
import { Router } from '@angular/router';
import { DocumentTemplateConfiguration, DocumentTypeConfiguration, RequestContext } from '../model/models';
import { DocumentTemplateServiceService } from '../Services/document-template-service.service';

@Component({
  selector: 'app-add-document-template-config',
  templateUrl: './add-document-template-config.component.html',
  styleUrls: ['./add-document-template-config.component.css']
})

export class AddDocumentTemplateConfigComponent implements OnInit {
  doctypes: Array<DocumentTypeConfiguration>=[];
  newdoctemplate=new DocumentTemplateConfiguration();
  editMode: boolean = false;
 viewMode:boolean=false;
 objname:string;
 title:string ="Add Document Template Configuration";
 fm: FormGroup;
  constructor(private commonsvc: CommonService, private doctypeservice: DocumentTypeServiceService  ,
    private doctemplateservice:DocumentTemplateServiceService,private cdr: ChangeDetectorRef,
    private toastr: ToastrService, private loader: SpinnerService,private router: Router) {
      
     }
  ngOnInit() {
    debugger
    const urlPath = this.router.url;
    const segments = urlPath.split('/');
    const lastSegment = segments[segments.length - 1];
    this.getdocumenttypeconfig();
    if(lastSegment=="viewdoctemplate")
    {
   this.viewMode= true;
   if(this.viewMode)
   {
   this.objname=this.commonsvc.objname;;
   this.title="View Document Template Configuration"
   this.getByName(this.objname);
   }
   this.cdr.detectChanges();
  }
  else if(lastSegment=="editdoctemplate")
  {
    this.editMode= true;
    if(this.editMode)
    {
    this.newdoctemplate=this.commonsvc.objdoctemplate;
    this.title="Edit Document Template Configuration"
    this.cdr.detectChanges();
    }
  }
  }
  getByName(objname:string)
  {
    this.loader.show();
    debugger
      return this.doctemplateservice.getdoctemplatebyname(objname).subscribe((data:any)=>{
        debugger
        this.newdoctemplate=data;
        this.loader.hide();
        console.log(this.newdoctemplate);
      }, er => {
        this.toastr.error('loading failed');
        this.loader.hide();
      });
  }
 getdocumenttypeconfig() {
    this.loader.show();
   let objrequest: RequestContext={PageNumber:1,PageSize:1,Id:0};
      return this.doctypeservice.getdoctypeconfig(objrequest).subscribe((data: any) => {
        debugger
        this.doctypes = data.Response;
        debugger
        this.loader.hide();
        console.log(this.doctypes);
      }, er => {
        this.toastr.error('loading failed');
        this.loader.hide();
      });
  }
  submit(doctype: DocumentTemplateConfiguration) {
    debugger
      
        this.adddoctype(doctype);
      
    }
    adddoctype(doctype: DocumentTemplateConfiguration) {
      debugger
      doctype.CreatedBy="admin";
      doctype.ModifiedBy = "admin";
      doctype.Status = "Pending";
      doctype.rows=doctype.rows.toString();
      doctype.columns=doctype.columns.toString();
      doctype.footerrows=doctype.footerrows.toString();
      doctype.footercolumns=doctype.footercolumns.toString();
      
      //this.router.navigate(['/products']);
      this.doctemplateservice.adddoctemplate(doctype).subscribe((res:any)=>{
        this.toastr.success('Added');
        this.router.navigate(['/mainpage/documentmaster/doctemplate']);
      });
      
      
    }
    closepopup() {
      if(this.viewMode)
      {
        this.router.navigate(['/mainpage/workitems']);
      }
      else
      {
      this.router.navigate(['/mainpage/doctemplate']);
      }
    }
}
