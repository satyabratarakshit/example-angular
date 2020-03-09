import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { ObservableRoutingModule } from "../observable/observable-routing.module";
import { ObsSubComponent } from "../observable/obs-sub/obs-sub.component";

@NgModule({
    declarations:[
        ObsSubComponent
    ],
    imports:[
        CommonModule,
        ObservableRoutingModule
    ]
})

export class ObservableModule{}
