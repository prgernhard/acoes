import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcoesComponent } from './acoes/acoes.component';
import { EmpresasComponent } from './empresas/empresas.component';

@NgModule({
  declarations: [
    AppComponent,
    AcoesComponent,
    EmpresasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
