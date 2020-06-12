import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client, Kpiclient } from '../models/interfaces';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public httpClient: HttpClient) {

  }
  getClientes(): Observable<Client[]>{
    return this.httpClient.get<Client[]>('http://localhost:8080/api/listclientes')
  }
  getKpi(): Observable<Kpiclient>{
    return this.httpClient.get<Kpiclient>('http://localhost:8080/api/kpideclientes')
  }
  save(client: Client): Observable<Client> {
    console.log(client)
    return this.httpClient.post<Client>('http://localhost:8080/api/creacliente', client,{
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'*',
        'Content-type': 'application/json'
      })
    })
  }
}
