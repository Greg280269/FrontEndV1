import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Servicios } from '../model/Servicios';
import { HttpClient } from '@angular/common/http';

const base_url =environment.base

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private url = `${base_url}/Servicios Disponibles`
  private listaCambio = new Subject<Servicios[]>()

  constructor(private http:HttpClient) { }

  list(){
    return this.http.get<Servicios[]>(this.url);
  }

  insert(per:Servicios){
    return this.http.post(this.url,per);
  }

  setList(listaNueva:Servicios[]){
    this.listaCambio.next(listaNueva);
  }

  getList(){
    return this.listaCambio.asObservable();
  }

  listId(id:number){
    return this.http.get<Servicios>(`${this.url}/${id}`);
  }

  update(c:Servicios){
    return this.http.put(this.url,c);
  }

  delete(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }
}
