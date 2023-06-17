import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresasFormComponent } from './empresas-form/empresas-form.component';
import { EmpresasListComponent } from './empresas-list/empresas-list.component';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [
  { path: 'empresas', component: LayoutComponent, children: [
    { path: 'form', component:  EmpresasFormComponent},
    { path: 'form/:id', component:  EmpresasFormComponent},
    { path: 'lista', component: EmpresasListComponent},
    { path: '',redirectTo: '/empresas/lista', pathMatch:'full'}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresasRoutingModule { }
