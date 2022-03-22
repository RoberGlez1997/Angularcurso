import { Component, Input } from '@angular/core';
import { personaje } from '../interfaces/dbz.interface';
import { dbzservice } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent  {



 // @Input() personajes: personaje[]= [];

 get personajes() {
   return this.dbzservice.personajes;
 }

 constructor(private dbzservice: dbzservice){
  
  //this.personajes=this.dbzservice.personajes; //asigna los personajes del servicios al array del main
}


}
