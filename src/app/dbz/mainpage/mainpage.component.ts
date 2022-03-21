import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { personaje } from '../interfaces/dbz.interface';
import { AgregarComponent } from '../agregar/agregar.component';



@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
 
})
export class MainpageComponent  {

  personajes:personaje[] = [
    {
    nombre:"goky",
    poder: 15000
    },
    {
    nombre:"simpson",
    poder:300

    },
    {
      nombre:"sinchan",
      poder:100
  
      }
  ]

  nuevo : personaje = {
    nombre: "Maestro Robe",
    poder :111110 }


    agregarnuevopersonaje(argumento:personaje){
      console.log("hola")

      console.log(argumento)
    }
  




}
