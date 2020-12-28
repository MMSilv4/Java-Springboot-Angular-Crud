import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estabelecimento } from '../models/estabelecimento.model';


const baseUrl = 'http://localhost:8080/api/estabelecimento';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Estabelecimento[]>{
    return this.http.get<Estabelecimento[]>(baseUrl);
  }

  get(id: any): Observable<Estabelecimento>{
    return this.http.get(`${baseUrl}/$id}`);
  }

  create(data: any): Observable<any>{
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any>{
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByNome(nome: any): Observable<Estabelecimento[]> {
    return this.http.get<Estabelecimento[]>(`${baseUrl}?nome=${nome}`);
  }

}
