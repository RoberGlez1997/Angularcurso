import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { heroecomponent } from '../heroe/heroe.component';
import { ListadoComponent } from './listado.component';



@NgModule({
    declarations:[
        heroecomponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports:[
        CommonModule //ngir ngfor
        
    ]
})
export class HeroesModule { }