import { Injectable } from '@angular/core';
import { DocumentPreperationConfiguration, RequestContext } from '../../models/model';
import { HttpbaseService } from '../../shared/httpbase.service';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DocumentPreperationService {
  type: string = "manager";

  constructor(private http: HttpbaseService) {
  }
  getdocumentpreparations(objrequest: RequestContext): Observable<ArrayBuffer> {    
    return this.http.postJsonLogin(objrequest, "api/documentpreparation/GetAllDocPrep",this.type);
  }
  getdocumentrequestbyId(objrequest: RequestContext) {
    debugger
    return this.http.postJsonLogin(objrequest, "api/documentpreparation/getdocId");
  }
  ManageDocument(objrequest: DocumentPreperationConfiguration) {
    debugger
    return this.http.postJsonLogin(objrequest, "api/documentpreparation/updatedocumentpreparation",this.type);
  }
  preview(objrequest: DocumentPreperationConfiguration) {
    debugger
    return this.http.postJsonLogin(objrequest, "api/documentpreparation/preview",this.type);
  }
  upload(objrequest: FormData){
    debugger
    return this.http.postJsonLogin(objrequest, "api/documentpreparation/upload",this.type);
  }
  getbyId(id: number) {        
    return this.http.getwithheader("api/documentpreparation/getbyId" + "?dPNID=" + id, this.type);
  }

}
