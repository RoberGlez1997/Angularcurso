
import { NgModule } from "@angular/core";

import { ListadoComponent } from '../../heroes/listado/listado.component';
import { contadorcomponent } from './contador.component';



@NgModule({
    declarations:[
        contadorcomponent
        
    ],
    exports: [
        contadorcomponent,
   
        
    ],
    imports:[
        
        
    ]
})
export class contadormodule { }