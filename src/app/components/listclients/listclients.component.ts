import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/interfaces';
import { ApiService } from '../../services/clients.service';
@Component({
  selector: 'app-listclients',
  templateUrl: './listclients.component.html',
  styleUrls: ['./listclients.component.css']
})
export class ListclientsComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getClientes().subscribe(datos => this.datos = datos)
  }
  datos: Client[] = []
  
}
