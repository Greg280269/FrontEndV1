import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TipoComprobante } from '../model/TipoComprobante';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const base_url =environment.base

@Injectable({
  providedIn: 'root'
})
export class ComprobanteService {

  private url = `${base_url}/tipo_comprobante`
  private listaCambio = new Subject<TipoComprobante[]>()

  constructor(private http:HttpClient) { }

  list(){
    let token = sessionStorage.getItem('token');
    return this.http.get<TipoComprobante[]>(this.url, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  insert(per:TipoComprobante){
    let token = sessionStorage.getItem('token');
    return this.http.post(this.url,per, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  setList(listaNueva:TipoComprobante[]){
    this.listaCambio.next(listaNueva);
  }

  getList(){
    return this.listaCambio.asObservable();
  }

  listId(id:number){
    let token = sessionStorage.getItem('token');
    return this.http.get<TipoComprobante>(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  update(c:TipoComprobante){
    let token = sessionStorage.getItem('token');
    return this.http.put(this.url,c, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  delete(id:number){
    let token = sessionStorage.getItem('token');
    return this.http.delete(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
}
