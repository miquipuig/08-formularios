import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent implements OnInit {
  data="Hola";
  constructor() { }

  ngOnInit() {
  }
  guardar( forma: any ){
    console.log("Formulario Posteado");
    console.log(forma);
  }

}
