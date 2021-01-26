import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './clientes/formulario/formulario.component';
import { FormularioLoginComponent } from './logins/formulario/formulario.component'
import { FormularioObjectComponent } from './objects/formulario/formulario.component'


const routes: Routes = [
  {path: '', component: FormularioLoginComponent},
  {path: 'save-client', component: FormularioComponent},
  {path: 'save-object', component: FormularioObjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
