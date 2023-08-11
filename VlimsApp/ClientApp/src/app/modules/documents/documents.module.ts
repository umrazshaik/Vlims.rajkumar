import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';

import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentsLandingComponent } from './components/documents-landing/documents-landing.component';
import { AssignedComponent } from './components/assigned/assigned.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DocumentTypesComponent } from './components/document-types/document-types.component';
import { AddDocumentTypeComponent } from './components/add-document-type/add-document-type.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { AddTemplateComponent } from './components/add-template/add-template.component';
import { WorkflowsComponent } from './components/workflows/workflows.component';
import { AddWorkflowComponent } from './components/add-workflow/add-workflow.component';
import { DocumentMasterHomeComponent } from './components/document-master-home/document-master-home.component';
import { AppintializorService, serverConfigInitializerFactory } from 'src/app/shared/appintializor.service';
import { NgxSpinnerModule } from 'ngx-spinner';

import { RolesComponent } from '../authentication/components/Roles/roles.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SecuritymgmtComponent } from '../authentication/components/Securitymgmt/securitymgmt.component';
import { PlantComponent } from '../authentication/components/Plantmanagement/plantmanagement.component';
import { DepartmentComponent } from '../authentication/components/Department/department.component';
import { UserConfigurationComponent } from '../authentication/components/User-configuration/user-configuration.component';
import { ApprovalConfigurationsComponent } from '../authentication/components/Approval-Configuration/approval-configurations.component';
import { UsergroupconfigurationComponent } from '../authentication/components/User-Group/usergroupconfiguration.component';
import { AddDepartmentComponent } from '../authentication/components/Department/add-department.component';
import { NewPlantRegistrationComponent } from '../authentication/components/New-plant-registration/new-plant-registration.component';
import { RegisterComponent } from '../authentication/components/register/register.component';
import { AddusergroupconfigurationComponent } from '../authentication/components/Add-user-group-configuration/add-usergroupconfiguration.component';
import { AddRoleComponent } from '../authentication/components/Roles/new-role.component';
import { SetfunctionalprofileComponent } from '../authentication/components/set-functional-profile/setfunctionalprofile.component';
import { ActivateDeactivateuserComponent } from '../authentication/components/Activate-deactivate-user/activate-deactivateuser.component';
import { ChangepasswordComponent } from '../authentication/components/changepassword/changepassword.component';



@NgModule({
  declarations: [
    DocumentsLandingComponent,
    AssignedComponent,
    DocumentTypesComponent,
    AddDocumentTypeComponent,
    TemplatesComponent,
    AddTemplateComponent,
    WorkflowsComponent,
    AddWorkflowComponent,
    DocumentMasterHomeComponent,
    SecuritymgmtComponent,
    PlantComponent,
    RolesComponent,
    DepartmentComponent,
    UserConfigurationComponent,
    ApprovalConfigurationsComponent,
    RolesComponent,
    AddusergroupconfigurationComponent,
    UsergroupconfigurationComponent,
    AddDepartmentComponent,
    NewPlantRegistrationComponent,
    AddRoleComponent,
    SetfunctionalprofileComponent,
    ActivateDeactivateuserComponent,
    ChangepasswordComponent
   

  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    DocumentsRoutingModule,
    FontAwesomeModule,
    TableModule,
    MultiSelectModule,
    DropdownModule,
    ToastModule,
    NgxSpinnerModule,
    
  ],
  providers: [] 
})
export class DocumentsModule { }
