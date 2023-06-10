import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { AcoesFormComponent } from './acoes-form/acoes-form.component';
import { AcoesListComponent } from './acoes-list/acoes-list.component';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [
  { path: 'acoes', component: LayoutComponent, children: [
    { path: 'form', component:  AcoesFormComponent},
    { path: 'form/:id', component:  AcoesFormComponent},
    { path: 'list', component: AcoesListComponent},
    { path: '',redirectTo: '/acoes/list', pathMatch:'full'}
  ]}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[ RouterModule]
})
export class AcoesRoutingModule { }
