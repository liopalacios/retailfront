import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/interfaces';
import { ApiService } from '../../services/clients.service';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-createclients',
  templateUrl: './createclients.component.html',
  styleUrls: ['./createclients.component.css']
})
export class CreateclientsComponent implements OnInit {
  cliente;
  nombre;
  constructor(private api: ApiService,private formBuilder: FormBuilder) {
    this.cliente = this.formBuilder.group({
      nombre: [''],
      apellido: [''],
      dni: [''],
      edad: [''],
      fechanac: ['']
    });
    this.nombre = "";
  }
  cambiaLado(value){
    this.nombre = value
  }
  ngOnInit(): void {
    //this.cliente.controls
    
  }
  
  //cliente : Client
  saveClient(myForm: NgForm): void{
    console.log("INGRESO AL SAVE")
    console.log(myForm.value)
    console.log(this.nombre)
    //const newClient: Client = Object.assign({},this.cliente)
    this.api.save(myForm.value).subscribe()
    /* .subscribe(
      (data: Client) => {
        console.log(data)
        // route navigate
      }
    );*/
  }

}
