import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/interfaces';
import { ApiService } from '../../services/clients.service';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createclients',
  templateUrl: './createclients.component.html',
  styleUrls: ['./createclients.component.css']
})
export class CreateclientsComponent implements OnInit {
  cliente;
  nombre;
  constructor(private api: ApiService,private formBuilder: FormBuilder,private router: Router) {
    this.cliente = this.formBuilder.group({
      nombre: [''],
      apellido: [''],
      dni: [''],
      edad: [''],
      fechanac: ['']
    });
  }
  cambiaLado(value){
    this.nombre = value
  }
  ngOnInit(): void {
    //this.cliente.controls
    
  }
  goList(){
    this.router.navigate(['/'])
  }
  resetForm(){
    this.cliente = this.formBuilder.group({
      nombre: [''],
      apellido: [''],
      dni: [''],
      edad: [''],
      fechanac: ['']
    });
  }
  //cliente : Client
  saveClient(myForm: NgForm): void{
    console.log("INGRESO AL SAVE")
    console.log(myForm.value)
    console.log(this.nombre)
    //const newClient: Client = Object.assign({},this.cliente)
    this.api.save(myForm.value).subscribe(res => {if(res.fecha!=null){
      if(confirm("Sus datos se registraron a las "+res.fecha)) {
        this.goList();
      }
      this.resetForm()
    }
  })
    /* .subscribe(
      (data: Client) => {
        console.log(data)
        // route navigate
      }
    );*/
  }

}
