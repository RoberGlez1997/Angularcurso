import {Component} from "@angular/core";


@Component({
    selector:"app-contador",
    template: `
        <h1>Hola mundo</h1>
        <h3> LA BASE ES: <strong>{{base}}</strong></h3>

        <h1> {{title}}</h1> <!--//mostrar title del archivo .ts-->

        <button (click)="acumular(-base)"> -  {{base}}</button>

        <span> {{numero}} </span>

        <button (click)="acumular(base)"> + {{base}} </button>

    `
})
export class contadorcomponent{
    public title:string = 'Contador App';
    numero:number = 10;
    base : number = 5
   
    /*sumar(){
      this.numero+=1;
    }
    restar(){
     this.numero-=1; */
     acumular(valor :number){
       this.numero +=valor
       
   
     }
   

}