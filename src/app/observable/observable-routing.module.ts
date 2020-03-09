import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObsSubComponent } from './obs-sub/obs-sub.component';

const routes:Routes = [
    {
        path: "",
        component: ObsSubComponent,
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ObservableRoutingModule{}