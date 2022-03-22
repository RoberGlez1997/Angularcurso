import { Injectable } from "@angular/core";
import { personaje } from '../interfaces/dbz.interface';

Injectable()
export class dbzservice{

    private _personajes:personaje[] = [
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
      ];
      get personajes():personaje []{
          return [...this._personajes];//SPREAD //puntos separa los elementos independientes que tiene el array
      }

    constructor(){
        console.log("servicio incializado")
    }


    agregarpersonaje(dato:personaje){
        this._personajes.push(dato);

    }


}