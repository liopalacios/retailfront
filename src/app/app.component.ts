import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './services/clients.service';
import { Client } from './models/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'retailfront';
  /*constructor(public httpClient: HttpClient){
    this.httpClient.get('http://localhost:8080/api/listclientes').subscribe
    (data => console.log(data), error => console.log(error), ()=>console.log("peticion realizada"))
  }*/
  constructor(private api: ApiService){}

  ngOnInit(){
    this.api.getClientes().subscribe(datos => this.datos = datos)
  }

  datos: Client[] = []

}
