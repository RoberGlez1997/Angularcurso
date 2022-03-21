import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

 heroes : string[] = ["Spiderman", "Ironman" , "hulk", "thor"]
 heroeborrado: string ="";


 borrarheroe(){
   console.log("borrando...")
   this.heroeborrado = this.heroes.shift() || "";//borra el primer elemento del array y lo retorna

 }
}
