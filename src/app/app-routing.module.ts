import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'observable',
    loadChildren: ()=> import('./observable/observable.module').then(m=>m.ObservableModule)
  },
  {
    path:'subject',
    loadChildren: ()=> import('./subject/subject.module').then(m=>m.SubjectModule)
  },
  {
    path: '',
    redirectTo: 'observable',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
