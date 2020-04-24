import {NgModule} from '@angular/core';
import {DashboardRouting, routes} from './dashboard.routing';
import {CommonModule} from '@angular/common';
import {AppUsuarioComponent} from './app-usuario/app-usuario.component';
import {FormUsuarioComponent} from './app-usuario/form-usuario/form-usuario.component';
import {UsuarioService} from '../Services/usuario.service';

@NgModule({
  imports: [
    CommonModule,
    DashboardRouting
  ],
  declarations: [
    AppUsuarioComponent,
    FormUsuarioComponent,
  ],
  providers: [
    UsuarioService
  ],

})
export class DashboardModule { }
