import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/clients.service';
import { Kpiclient } from 'src/app/models/interfaces';

@Component({
  selector: 'app-kpiclients',
  templateUrl: './kpiclients.component.html',
  styleUrls: ['./kpiclients.component.css']
})
export class KpiclientsComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getKpi().subscribe(datos => this.datos = datos)
  }
  datos: Kpiclient
}
