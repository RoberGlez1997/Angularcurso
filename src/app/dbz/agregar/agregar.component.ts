import { Component, Input, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { personaje } from '../interfaces/dbz.interface';
import { dbzservice } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {


@Input() nuevo : personaje = {
  nombre: "",
  poder :0 
}

constructor(private dbzservice: dbzservice ){ //servicio importado

}

//@Output() onNuevoPersonaje: EventEmitter<personaje>= new EventEmitter(); emitir cosas
 agregar(){
    
  if(this.nuevo.nombre.trim().length===0){ //si no tiene nada dentro
    return;
  }

  this.dbzservice.agregarpersonaje(this.nuevo);
  
  
  //this.onNuevoPersonaje.emit( this.nuevo)

  this.nuevo= {
    nombre: "",
    poder: 0
  }
}

}
