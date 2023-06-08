import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcoesService } from '../../acoes.service';
import { Acao } from '../acao';

@Component({
  selector: 'app-acoes-list',
  templateUrl: './acoes-list.component.html',
  styleUrls: ['./acoes-list.component.css']
})
export class AcoesListComponent implements OnInit {
  acoes: Acao[] = [];
  acaoSelecionada : Acao = new Acao();
  mensagemSucesso : string = "";
  mensagemErro: string = "";

  constructor(private service: AcoesService,
    private router: Router) { }

    ngOnInit(): void {
      this.service.getAcoes()
      .subscribe( (resposta : any ) => this.acoes = resposta);
    }

    novoCadastro(){
      this.router.navigate(['/acoes/form'])
    }

    preparaDelecao(acao:Acao) {
      this.acaoSelecionada = acao;

    }

    deletarAcao(){
      this.service
      .deletar(this.acaoSelecionada)
      .subscribe(
        ( response : any) => {
          this.mensagemSucesso = 'Ação deletada com sucesso!'
          this.ngOnInit();
      },
        (erro: any) => this.mensagemErro = 'Erro ao deletar a Ação.'
      )
    }

}
