import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../model/Users';
import { HttpClient } from '@angular/common/http';

const base_url =environment.base

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = `${base_url}/usuarios`
  private listaCambio = new Subject<Users[]>()

  constructor(private http:HttpClient) { }


  list(){
    return this.http.get<Users[]>(this.url);
  }

  insert(per:Users){
    return this.http.post(this.url,per);
  }

  setList(listaNueva:Users[]){
    this.listaCambio.next(listaNueva);
  }

  getList(){
    return this.listaCambio.asObservable();
  }

  listId(id:number){
    return this.http.get<Users>(`${this.url}/${id}`);
  }

  update(c:Users){
    return this.http.put(this.url,c);
  }

  delete(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }
}
