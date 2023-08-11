import { getLocaleDateFormat } from '@angular/common';
import { Injectable } from '@angular/core';
import { DocumentAdditionalTasks, DocumentPreperationConfiguration, DocumentRequestConfiguration, RequestContext } from '../../models/model';
import { HttpbaseService } from '../../shared/httpbase.service';


@Injectable({
  providedIn: 'root'
})
export class DocumentRevisionService {
  type: string = "manager";
  constructor(private http: HttpbaseService) { }
  getdocumentRevisions(objrequest: RequestContext) {    
    return this.http.postJsonLogin(objrequest, "api/additionaltask/GetAddtask", this.type);
  }
  adddocrevconfig(objrequest: DocumentAdditionalTasks) {    
    return this.http.postJsonLogin(objrequest, "api/additionaltask/saveadditionaltask", this.type);
  }
  updatedocrevconfig(objrequest: DocumentAdditionalTasks) {    
    return this.http.postJsonLogin(objrequest, "api/additionaltask/updateadditionaltask", this.type);
  }
  getbyId1(id: number) {        
    return this.http.getwithheader("api/additionaltask/getbyId" + "?aTID=" + id, this.type);
  }
  getbyId(id: string){
    return this.http.getwithheader("api/additionaltask/"+id,this.type);
  }

}
