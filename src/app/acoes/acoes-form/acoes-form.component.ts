import { Component, OnInit } from '@angular/core';
import { Acao } from '../acoes';
import { Router, ActivatedRoute } from '@angular/router';
import { AcoesService } from '../../acoes.service';
import { EmpresasService } from 'src/app/empresas.service';
import { Empresa } from 'src/app/empresas/empresa';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-acoes-form',
  templateUrl: './acoes-form.component.html',
  styleUrls: ['./acoes-form.component.css'],
  providers: [EmpresasService]
})
export class AcoesFormComponent implements OnInit {

  formAcao: FormGroup | any;

  acao: Acao;
  empresas: Empresa[] = [];
  success: boolean = false;
  errors: String[] = [];
  id: number = 0;



  constructor(
    private service: AcoesService,
    private serviceEmpresa: EmpresasService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {

    this.acao = new Acao();
    this.serviceEmpresa.getEmpresas();
    this.serviceEmpresa.getEmpresas()
      .subscribe((resposta: any) => this.empresas = resposta);

  }


  ngOnInit() {
    this.createForm(new Acao());

    let params = this.activatedRoute.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      if (this.id) {
        this.service
          .getAcaoById(this.id)
          .subscribe(response => this.acao = response,
            errorResponse => this.acao = new Acao()
          )
      }

    });

  }


  createForm(acao: Acao) {
    this.formAcao = this.formBuilder.group({
      id: [acao.id],
      nome: [acao.nome, [Validators.required, Validators.minLength(3)]],
      valor: [acao.valor, [Validators.required, Validators.minLength(2), Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]],
      data: [acao.data],
      dividento: [acao.dividento],
      empresa: [acao.empresa]

    })

  }


  voltarParaListagem() {
    this.router.navigate(['/acoes/lista']);


  }

  onSubmit() {
    console.log(this.formAcao.value)
    if (this.id) {
      this.service
        .atualizar(this.formAcao.value)
        .subscribe(response => {
          this.success = true;
          this.errors = [];
        }, errorResponse => {
          this.errors = ['Erro ao atualizar a Ação.']

        })


    } else {

      this.service.salvar(this.formAcao.value).subscribe(response => {
        this.success = true;
        this.errors = [];
        this.acao = response;
        this.createForm(new Acao());
      }, (errorResponse) => {
        this.success = false;
        this.errors = errorResponse.error.errors;

      }

      )
    }
  }


}
