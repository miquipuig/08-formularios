import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent  {
  usuario: Object = {
    nombrecompleto: {
      nombre: "Fernando",
      apellido: "Herrera"
    },
    correo: "fernando.herrera85@gmail.com",
    pasatiempos: ["correr", "dormir", "comer"]
  }

  forma: FormGroup;
  
  constructor() { 
    console.log(this.usuario);
    this.forma = new FormGroup({
      'nombrecompleto': new FormGroup({
          'nombre': new FormControl('Fernadno', [Validators.required,Validators.minLength(5)]),
          'apellido': new FormControl('', Validators.required)
    }),
      'correo': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      'pasatiempos': new FormArray([
        new FormControl('Correr', Validators.required)
      ])
    });

  // this.forma.setValue(this.usuario);

  }

  agregarPasatiempo() {
      (<FormArray>this.forma.controls['pasatiempos']).push(
          new FormControl('', Validators.required)
      )
  }

  guardarCambios(){
    console.log(this.forma.value);
    console.log(this.forma);
    // this.forma.reset(this.usuario);
    this.forma.reset({
      nombrecompleto: {
        nombre: '',
        apellido: ''
      },
      correo: ''

    });
    // this.forma.controls['correo'].setValue('nuevocorreo@asasasdads.com');
  }

}
