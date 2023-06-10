import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresasRoutingModule } from './empresas-routing.module';
import { EmpresasFormComponent } from './empresas-form/empresas-form.component';
import { EmpresasListComponent } from './empresas-list/empresas-list.component';
import { FormsModule } from '@angular/forms';
import { InformacaoEmpresaComponent } from '../componentes/informacao-empresa/informacao-empresa.component';

@NgModule({
  declarations: [
    EmpresasFormComponent,
    EmpresasListComponent,
    InformacaoEmpresaComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    EmpresasRoutingModule
  ],
  exports: [
    CommonModule,
    EmpresasFormComponent,
    EmpresasListComponent
  ]
})
export class EmpresasModule { }
