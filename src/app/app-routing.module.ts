import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [


  {path: 'jugadores',
  loadChildren: () => import('./jugadores/jugadores.module').then(m => m.JugadoresModule)},


  // {path: '404', component: ErrorPageComponent},
  // {path: '**', redirectTo: '404'}


  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
