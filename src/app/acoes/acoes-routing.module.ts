import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcoesFormComponent } from './acoes-form/acoes-form.component';
import { AcoesListComponent } from './acoes-list/acoes-list.component';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [
  { path: 'acoes', component: LayoutComponent, children: [
    { path: 'form', component:  AcoesFormComponent},
    { path: 'form/:id', component:  AcoesFormComponent},
    { path: 'lista', component: AcoesListComponent},
    { path: '',redirectTo: '/acoes/lista', pathMatch:'full'}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcoesRoutingModule { }
