import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcoesRoutingModule } from './acoes-routing.module';
import { AcoesFormComponent } from './acoes-form/acoes-form.component';
import { AcoesListComponent } from './acoes-list/acoes-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AcoesListComponent,
    AcoesFormComponent],
  imports: [
    CommonModule,
    AcoesRoutingModule,
    FormsModule
  ],
  exports: [
    AcoesListComponent,
    AcoesFormComponent
  ]
})
export class AcoesModule { }
