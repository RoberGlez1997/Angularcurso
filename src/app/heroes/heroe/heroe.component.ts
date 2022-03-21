import { Component } from "@angular/core";


@Component({
    selector : 'app-heroe',
    templateUrl: "heroe.component.html"
})
export class heroecomponent {

    nombre:string= "ironman";
    edad :number =45;
    
    get nombremayusculas() {
        return this.nombre.toUpperCase();
    }

    obtenernombre():string{
        return ` ${ this.nombre} - ${this.edad}`
        //return `  this.nombre + "-" +" this.edad` 
    }

    cambiarnombre() :void{

            this.nombre ="Spiderman";

    }

    cambiaredad() :void{

        this.edad =32;

}
}