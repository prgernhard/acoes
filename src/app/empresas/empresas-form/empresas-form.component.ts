import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmpresasService } from 'src/app/empresas.service';
import { Empresa } from 'src/app/empresas/empresa';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-empresas-form',
  templateUrl: './empresas-form.component.html',
  styleUrls: ['./empresas-form.component.css']
})
export class EmpresasFormComponent implements OnInit {


  formEmpresa: FormGroup | any;

  empresa: Empresa;
  empresas: Empresa[] = [];
  success: boolean = false;
  errors: String[] = [];
  id: number = 0;



  constructor(
    private service: EmpresasService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {

    this.empresa = new Empresa();
    this.service.getEmpresas()
      .subscribe((resposta: any) => this.empresas = resposta);

  }


  ngOnInit() {
    this.createForm(new Empresa());

    let params = this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id) {
        this.service
          .getEmpresaById(this.id)
          .subscribe(response => this.empresa = response,
            errorResponse => this.empresa = new Empresa()
          )
      }

    });

  }

  createForm(empresa: Empresa) {
    this.formEmpresa = this.formBuilder.group({
      id: [empresa.id],
      nome: [empresa.nome, [Validators.required, Validators.minLength(3)]],
      cnpj: [empresa.cnpj, [Validators.required, Validators.maxLength(18), Validators.pattern(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/)]],
      tipoEmpresa: [empresa.tipoEmpresa],
      data: [empresa.data]

    })

  }


  voltarParaListagem() {
    this.router.navigate(['/empresas/lista']);


  }

  onSubmit() {
    console.log(this.formEmpresa.value)
    if (this.id) {
      this.service
        .atualizar(this.formEmpresa.value)
        .subscribe(response => {
          this.success = true;
          this.errors = [];
        }, errorResponse => {
          this.errors = ['Erro ao atualizar a Ação.']

        })


    } else {

      this.service.salvar(this.formEmpresa.value).subscribe(response => {
        this.success = true;
        this.errors = [];
        this.empresa = response;
        this.createForm(new Empresa());
      }, (errorResponse) => {
        this.success = false;
        this.errors = errorResponse.error.errors;

      })
    }
  }


}
