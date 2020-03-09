import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { SubjectRoutingModule } from "./subject-routing.module";

//components
import { SenderComponent } from "./sender/sender.component";
import { ReceiverComponent } from "./receiver/receiver.component";
import { SubjectComponent } from "./subject.component";


@NgModule({
    declarations:[
        SenderComponent,
        ReceiverComponent,
        SubjectComponent
    ],
    imports:[
        CommonModule,
        SubjectRoutingModule,
        FormsModule
    ]
})

export class SubjectModule{}