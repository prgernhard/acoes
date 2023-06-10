
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresas-form',
  templateUrl: './empresas-form.component.html',
  styleUrls: ['./empresas-form.component.css']
})
export class EmpresasFormComponent implements OnInit {
  dadosEmpresa: Object[];
  constructor() {
    this.dadosEmpresa = [
      {
        nome: 'ITAU SA',
        cnpj: '11111111'
      }
    ];
  }
  ngOnInit() {
    console.log(this.dadosEmpresa);
}

}
