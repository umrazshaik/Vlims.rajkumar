import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { CommonService } from 'src/app/shared/common.service';
import { UsersconfigurationService } from 'src/app/modules/services/usersconfiguration.service';
import { UserConfiguration } from 'src/app/models/model';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent {
  griddata:UserConfiguration[]=[];
  currentuser=new UserConfiguration();
  currentPassword: string = '';
  newPassword: string = '';
  confirmNewPassword: string = '';

  constructor(private location: Location,
    private commomsvc:CommonService,
    private loader:NgxSpinnerService,
    private toaster:ToastrService,
    private loginservice: LoginService, private router: Router,
    private userssvc:UsersconfigurationService,
    ){}
   
  ngOnInit(){
    this.getusers();
  }
  getusers() {
    this.loader.show();
    this.userssvc.getusers(this.commomsvc.req).subscribe((data:any)=>{
      this.griddata=data.Response;
      const user=this.griddata.find(o=>o.UserID.toLocaleLowerCase()==this.commomsvc.getUsername().toLocaleLowerCase());
      this.currentuser=user? user : new UserConfiguration();
      this.loader.hide();
    })
  }
    
  changePassword() {
    // Implement change password logic here
    if (this.currentPassword !== this.currentuser.Password) {
      this.toaster.error("Old password don't match");
      return;
    }
    if (this.newPassword !== this.confirmNewPassword) {
      this.toaster.error("New password and confirm new password don't match");
      return;
    }
    if(this.currentuser!=null || this.currentuser!=undefined){
      this.currentuser.Password=this.newPassword;
    this.userssvc.update(this.currentuser).subscribe((data:any)=>{
      this.toaster.success("Password Changed Successfully");
      this.loginservice.logout();
    this.router.navigate(['/login']);
    });
  }
  else{
    this.toaster.error("Update Failed");
  }
  }
  onCancel(){
    this.location.back();
  }
}
