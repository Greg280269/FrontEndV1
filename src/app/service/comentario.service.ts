import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comentario } from '../model/comentario';

const base_url =environment.base

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  private url = `${base_url}/comentarios`
  private listaCambio = new Subject<Comentario[]>()

  constructor(private http:HttpClient) { }

  list(){
    let token = sessionStorage.getItem('token');
    return this.http.get<Comentario[]>(this.url, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  insert(per:Comentario){
    let token = sessionStorage.getItem('token');
    return this.http.post(this.url,per, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  setList(listaNueva:Comentario[]){
    this.listaCambio.next(listaNueva);
  }

  getList(){
    return this.listaCambio.asObservable();
  }

  listId(id:number){
    let token = sessionStorage.getItem('token');
    return this.http.get<Comentario>(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  update(c:Comentario){
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
