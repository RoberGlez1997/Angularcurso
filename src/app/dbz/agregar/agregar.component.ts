import { Component, Input, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {


@Input() nuevo : personaje = {
  nombre: "",
  poder :0 
}

@Output() onNuevoPersonaje: EventEmitter<personaje>= new EventEmitter();
 agregar(){
    
  if(this.nuevo.nombre.trim().length===0){ //si no tiene nada dentro
    return;
  }
  
  
  this.onNuevoPersonaje.emit( this.nuevo)

  this.nuevo= {
    nombre: "",
    poder: 0
  }
}

}
