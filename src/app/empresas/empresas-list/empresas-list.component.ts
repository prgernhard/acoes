import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresasService } from 'src/app/empresas.service';
import { Empresa } from '../empresa';

@Component({
  selector: 'app-empresas-list',
  templateUrl: './empresas-list.component.html',
  styleUrls: ['./empresas-list.component.css']
})
export class EmpresasListComponent implements OnInit {
  empresas: Empresa[] = [];
  empresaSelecionada: Empresa = new Empresa();
  mensagemSucesso: string = "";
  mensagemErro: string = "";

  constructor(private service: EmpresasService,
    private router: Router) { }

  ngOnInit(): void {
    this.service.getEmpresas()
      .subscribe((resposta: any) => this.empresas = resposta);
  }

  novoCadastro() {
    this.router.navigate(['/empresas/form'])
  }

  preparaDelecao(empresa: Empresa) {
    this.empresaSelecionada = empresa;

  }

  deletarEmpresa() {
    this.service
      .deletar(this.empresaSelecionada)
      .subscribe(
        (response: any) => {
          this.mensagemSucesso = 'Empresa deletada com sucesso!'
          this.ngOnInit();
        },
        (erro: any) => this.mensagemErro = 'Erro ao deletar a Empresa.'
      )
  }

}
