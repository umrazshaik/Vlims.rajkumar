import { Injectable } from '@angular/core';
import { RequestContext, Usergroupconfiguration } from '../model/models';
import { HttpbaseService } from '../shared/httpbase.service';


@Injectable({
  providedIn: 'root'
})
export class usergroupconfigurationService {
  type:string="admin";
  constructor(private http: HttpbaseService) { }

  getusergroupconfiguration(objrequest: RequestContext) {
    debugger
    return this.http.postJsonLogin(objrequest, "api/usergroupconfiguration/getusergroupconfiguration",this.type);
}
addusergroupconfiguration(objrequest: Usergroupconfiguration) {
  debugger
  return this.http.postJsonLogin(objrequest, "api/usergroupconfiguration/saveusergroupconfiguration",this.type);
}
}
