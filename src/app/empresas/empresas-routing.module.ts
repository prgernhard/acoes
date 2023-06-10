import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { EmpresasFormComponent } from './empresas-form/empresas-form.component';
import { EmpresasListComponent } from './empresas-list/empresas-list.component';

const routes: Routes = [
  { path: 'empresas', component: LayoutComponent, children: [
    { path: 'form', component:  EmpresasFormComponent},
    { path: 'form/:id', component:  EmpresasFormComponent},
    { path: 'list', component: EmpresasListComponent},
    { path: '',redirectTo: '/empresas/list', pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresasRoutingModule { }
