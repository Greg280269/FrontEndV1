import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Roles } from '../model/Roles';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private url = `${base_url}/roles`
  private listaCambio = new Subject<Roles[]>()

  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Roles[]>(this.url);
  }

  insert(per:Roles){
    return this.http.post(this.url,per);
  }

  setList(listaNueva:Roles[]){
    this.listaCambio.next(listaNueva);
  }

  getList(){
    return this.listaCambio.asObservable();
  }

  listId(id:number){
    return this.http.get<Roles>(`${this.url}/${id}`);
  }

  update(c:Roles){
    return this.http.put(this.url,c);
  }

  delete(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }
}
