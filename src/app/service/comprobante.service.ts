import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TipoComprobante } from '../model/TipoComprobante';
import { HttpClient } from '@angular/common/http';

const base_url =environment.base

@Injectable({
  providedIn: 'root'
})
export class ComprobanteService {

  private url = `${base_url}/tipo_comprobante`
  private listaCambio = new Subject<TipoComprobante[]>()

  constructor(private http:HttpClient) { }

  list(){
    return this.http.get<TipoComprobante[]>(this.url);
  }

  insert(per:TipoComprobante){
    return this.http.post(this.url,per);
  }

  setList(listaNueva:TipoComprobante[]){
    this.listaCambio.next(listaNueva);
  }

  getList(){
    return this.listaCambio.asObservable();
  }

  listId(id:number){
    return this.http.get<TipoComprobante>(`${this.url}/${id}`);
  }

  update(c:TipoComprobante){
    return this.http.put(this.url,c);
  }

  delete(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }
}
