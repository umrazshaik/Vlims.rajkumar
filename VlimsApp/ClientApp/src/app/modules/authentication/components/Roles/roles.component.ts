import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Paginator } from 'primeng/paginator';
import { Table } from 'primeng/table';
import { RequestContext, RoleConfiguration } from '../../../../models/model';
import { CommonService } from '../../../../shared/common.service';
import { RolesconfigurationService } from '../../../services/rolesconfiguration.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
})
export class RolesComponent implements OnInit {
  @ViewChild('dt') dataTable!: Table; // ViewChild to get reference to the p-table component
  @ViewChild('paginator') dataPaginator!: Paginator; // ViewChild to get reference to the p-paginator component
  // Pagination properties
  currentPage = 1;
  itemsPerPage = 10;
  rowsPerPageOptions = [10, 20, 50];
  types: Array<RoleConfiguration> = [];
  rol = new RoleConfiguration();
  constructor(private commonsvc: CommonService,
    private loader:NgxSpinnerService,
    private toastr:ToastrService,
     private doctypeservice: RolesconfigurationService  ,private router: Router) { }
  ngOnInit() {
    this.getroles();
  }
  getroles() {
    this.loader.show();
      return this.doctypeservice.getroles(this.commonsvc.req).subscribe((data: any) => {
        this.types = data.Response;
        this.loader.hide();
        if(this.types!=null && this.types.length<10)
        {
          this.currentPage=10;
        }
        console.log(this.types);
      }, er => {
      
      });
  }
  navigateToAddRoles(): void {
    this.router.navigate(['/admin/roles/add']);
  }
  editdoc(doc: RoleConfiguration) {
    
    this.commonsvc.roleConfig = doc;
    this.router.navigate(['/admin/roles/edit', doc.ROCFId]);
  }
  getStatusClass(status: string): string {
    
    if (status === 'In Progress') {
      return 'status-in-progress';
    } else if (status === 'Completed') {
      return 'status-completed';
    } else if (status === 'Active') {
      return 'status-completed';
    } else if (status === 'Active') {
      return 'status-completed';
    }else if (status === 'Under Review') {
      return 'status-under-review';
    } else if (status === 'Pending') {
      return 'status-in-progress';
    } else {
      return '';
    }
  }
}
