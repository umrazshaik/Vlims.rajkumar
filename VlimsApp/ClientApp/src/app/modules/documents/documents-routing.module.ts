import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../authentication/guards/auth.guard';
import { DocumentsLandingComponent } from './components/documents-landing/documents-landing.component';
import { AssignedComponent } from './components/assigned/assigned.component';
import { DocumentTypesComponent } from './components/document-types/document-types.component';
import { AddDocumentTypeComponent } from './components/add-document-type/add-document-type.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { AddTemplateComponent } from './components/add-template/add-template.component';
import { AddWorkflowComponent } from './components/add-workflow/add-workflow.component';
import { WorkflowsComponent } from './components/workflows/workflows.component';
import { DocumentMasterHomeComponent } from './components/document-master-home/document-master-home.component';
import { AdminHomeComponent } from '../authentication/components/Admin-Home/Admin-home.component';
import { SecuritymgmtComponent } from '../authentication/components/Securitymgmt/securitymgmt.component';
import { PlantComponent } from '../authentication/components/Plantmanagement/plantmanagement.component';
import { RolesComponent } from '../authentication/components/Roles/roles.component';
import { Usergroupconfiguration } from '../../models/model';
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

const routes: Routes = [
  { path: 'documents', redirectTo: 'home', pathMatch: 'full' },
  { path: 'doc-home', redirectTo: 'document-types', pathMatch: 'full' },
  {
    path: 'home',
    component: DocumentsLandingComponent,
    canActivate: [AuthGuard],
  },
  { path: 'assigned', component: AssignedComponent, canActivate: [AuthGuard] },
  { path: 'document-master', component: DocumentMasterHomeComponent, canActivate: [AuthGuard] },
  {
    path: 'document-types', component: DocumentTypesComponent,

    canActivate: [AuthGuard],
  },
  {
    path: 'document-type/add',
    component: AddDocumentTypeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'document-type/edit/:typeId',
    component: AddDocumentTypeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'document-type/view/:typeName',
    component: AddDocumentTypeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'templates',
    component: TemplatesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'templates/add/:count',
    component: AddTemplateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'templates/edit/:templateId',
    component: AddTemplateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'templates/view/:templateName',
    component: AddTemplateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'workflow',
    component: WorkflowsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'workflows/add/:count',
    component: AddWorkflowComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'workflows/edit/:workflowId',
    component: AddWorkflowComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    component: AdminHomeComponent
  },
  {
    path: 'admin/groups',
    component: UsergroupconfigurationComponent,
  },
  {
    path: 'admin/groups/add/:count',
    component: AddusergroupconfigurationComponent,
  },
  {
    path: 'admin/groups/edit/:groupId',
    component: AddusergroupconfigurationComponent,
  },
  {
    path: 'admin/departments',
    component: DepartmentComponent,
  },
  {
    path: 'admin/departments/add',
    component: AddDepartmentComponent,
  },
  {
    path: 'admin/departments/edit/:deptId',
    component: AddDepartmentComponent,
  },
  {
    path: 'admin/roles',
    component: RolesComponent,
  },
  {
    path: 'admin/roles/add',
    component: AddRoleComponent,
  },
  {
    path: 'admin/roles/edit/:deptId',
    component: AddRoleComponent,
  },
  {
    path: 'admin/users',
    component: UserConfigurationComponent,
  },
  {
    path: 'admin/users/add',
    component: RegisterComponent,
  },
  {
    path: 'admin/users/edit/:userId',
    component: RegisterComponent,
  },
  {
    path: 'admin/security',
    component: SecuritymgmtComponent,
  },
  {
    path: 'admin/plant',
    component: PlantComponent,
  },
  {
    path: 'admin/plant/edit/:plantId',
    component: NewPlantRegistrationComponent,
  },
  {
    path: 'admin/addplant',
    component: NewPlantRegistrationComponent,
  },
  {
    path: 'admin/approval',
    component: ApprovalConfigurationsComponent,
  },
  {
    path: 'admin/profile',
    component: SetfunctionalprofileComponent,
  },
  {
    path: 'admin/activeuser',
    component: ActivateDeactivateuserComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentsRoutingModule { }
