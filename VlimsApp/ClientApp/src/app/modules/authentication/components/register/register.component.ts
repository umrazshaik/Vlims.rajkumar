import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentConfiguration, RequestContext, RoleConfiguration, UserConfiguration } from '../../../../models/model';
import { CommonService } from '../../../../shared/common.service';
import { DepartmentconfigurationService } from '../../../services/departmentconfiguration.service';
import { RolesconfigurationService } from '../../../services/rolesconfiguration.service';
import { UsersconfigurationService } from '../../../services/usersconfiguration.service';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  adduser = new UserConfiguration();
  //newuser = new UserConfiguration();
  editMode: boolean = false;
  viewMode: boolean = false;
  //objname: string;
  types: DepartmentConfiguration[] = [];
  roles: RoleConfiguration[] = [];
  griddata:UserConfiguration[]=[];
  isactivedirectory: boolean = false;
  isstandarduser: boolean = false;
  title: string = "New User Configuration";
  objname: string = '';
  userid:string='';
  constructor(private commonsvc: CommonService, private rolesservice: RolesconfigurationService,
    private deptservice: DepartmentconfigurationService,
    private userservice: UsersconfigurationService,
    private location: Location,
    private loader:NgxSpinnerService,
    private toastr: ToastrService,
    private router: Router, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    const urlPath = this.router.url;
    const segments = urlPath.split('/');
    const lastSegment = segments[segments.length - 2];
    this.getdepartments();
    this.getroles();
    this.getusers();
    if (lastSegment == "view") {
      this.viewMode = true;
      if (this.viewMode) {
        
        this.objname = this.commonsvc.objname;
        //this.getdocTypeByName(this.objname);
        this.adduser = this.commonsvc.userConfig;
        this.title = "View Document Type Configuration"
      }
      this.cdr.detectChanges();
    }
    else if (lastSegment == "edit") {
      this.editMode = true;
      this.userid=segments[segments.length - 1];
      this.getbyId();
    }

  }
  submit(adduser: UserConfiguration) {
    debugger
    if(this.editMode){
      this.update(adduser);
    }
    else{
      if(!this.isduplicate())
    this.adddoctype(adduser);
    }
  }
  isduplicate() {
    if (this.griddata != null && this.griddata.length > 0) {
      const type = this.griddata.find(p => p.UserID.toLocaleLowerCase() == this.adduser.UserID.toLocaleLowerCase());
      if (type != null || type != undefined) {
        this.toastr.error('Already Exists');
        this.loader.hide();
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  update(adduser: UserConfiguration) {
    this.loader.show();
    if(adduser.UserID.toLocaleLowerCase()==='admin')
    {
      this.toastr.error('admin user Already Exists')
      this.loader.hide();
    }
   else {
    adduser.ModifiedBy=this.commonsvc.getUsername();
    this.userservice.update(adduser).subscribe((data:any)=>{
      this.toastr.success('updated successfully');
      this.loader.hide();
      this.location.back();
    });
   }
  }
  adddoctype(adduser: UserConfiguration) {
    this.loader.show();
    adduser.Activedirectory = "false";
    adduser.Standarduser = "false";
    adduser.CreatedBy = this.commonsvc.getUsername();
    adduser.ModifiedBy = this.commonsvc.getUsername();
    adduser.CreatedDate=new Date();
    adduser.ModifiedDate=new Date();
    adduser.Status="Active";
    if(adduser.UserID.toLocaleLowerCase()==='admin')
    {
      this.toastr.error('admin user Already Exists')
      this.loader.show();
    }
    else
    {
      this.userservice.adduser(adduser).subscribe((res: any) => {
        this.loader.hide();
        this.toastr.success('user added successfully');
      this.location.back();
    },(error:any)=>{
      this.loader.hide();
      this.toastr.error(error);
    });
  }
  }
  getusers() {
    this.loader.show();
       return this.userservice.getusers(this.commonsvc.req).subscribe((data: any) => {
         this.griddata = data.Response;
         this.loader.hide();
       }, er => {
       });
   }
  getbyId()
  {
    return this.userservice.getbyId(this.userid).subscribe((data:any)=>{
      this.adduser=data;
    });
  }
  closepopup() {
    this.router.navigate(['/mainpage/users']);
  }
  getdepartments() {
   this.loader.show();
    return this.deptservice.getdepartments(this.commonsvc.req).subscribe((data: any) => {
      this.types = data.Response;
      this.loader.hide();
      console.log(this.types);
    }, er => {

    });
  }
  getroles() {
    this.loader.show();
    return this.rolesservice.getroles(this.commonsvc.req).subscribe((data: any) => {
      this.roles = data.Response;
      this.loader.hide();
    }, er => {

    });
  }
  onCancel() {
    this.router.navigate(['/admin/users']);
  }
  calculateTotalUsers(): void {
    if(this.adduser.FirstName!=null || this.adduser.LastName!=null)
    {
    this.adduser.UserID = this.adduser.FirstName+this.adduser.LastName;
    }
  }
}

