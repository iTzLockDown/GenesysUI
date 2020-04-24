import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppDefaultLayoutComponent} from './Common/app-default-layout/app-default-layout.component';
import {AppUsuarioComponent} from './app-usuario/app-usuario.component';
import {AppError404Component} from './Common/error/app-error404/app-error404.component';
import {FormUsuarioComponent} from './app-usuario/form-usuario/form-usuario.component';

export const routes: Routes = [
  {
    path: '', component: AppDefaultLayoutComponent,
    children: [
      {
        path: 'usuario', component: AppUsuarioComponent
      },
      {
        path: 'usuario/ucreate', component: FormUsuarioComponent
      },
      { path: '**', component: AppError404Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class DashboardRouting {}
