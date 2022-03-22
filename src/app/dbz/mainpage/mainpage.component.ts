import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { personaje } from '../interfaces/dbz.interface';
import { AgregarComponent } from '../agregar/agregar.component';
import { dbzservice } from '../services/dbz.service';



@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
 
})
export class MainpageComponent  {



  nuevo : personaje = {
    nombre: "Maestro Robe",
    poder :111110 }
/*
  get personajes():personaje[]{ //obtener informacion de los personajes del service mediante get
    return this.dbzservice.personajes;
  }


    agregarnuevopersonaje(argumento:personaje){
      this.personajes.push(argumento) //añadir personaje */
      
      //debugger; para el codigo donde queremos
      
    }

   
  





