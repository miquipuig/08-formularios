import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
  .ng-invalid.ng-touched:not(form) {
    border: 1px solid red;
  }

  `]
})
export class TemplateComponent implements OnInit {
  data="Hola";


  usuario:Object = {
    nombre: null,
    apellido: null,
    correo: null
  }

  constructor() { }
  ngOnInit() {
  }
  guardar( forma: NgForm ){
    console.log( "Formulario Posteado" );
    console.log( "ngForm: ", forma);
    console.log( "Valor forma", forma.value);
    console.log ("Usuario", this.usuario);

  }

}
