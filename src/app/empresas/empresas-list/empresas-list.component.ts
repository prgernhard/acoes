import { Component,OnInit} from '@angular/core';

@Component({

  selector: 'app-empresas-list',
  templateUrl: './empresas-list.component.html',
  styleUrls: ['./empresas-list.component.css']
})
export class EmpresasListComponent implements OnInit{
  public empresa =  {
    "id": 1,
    "nome": "Itau SA",
    "cnpj": "111111111",
    "tipoEmpresa": "privada",
    "data": "29/05/2023"
  }

  constructor() { }

  ngOnInit() {

  }

  public alerta(e:string) {
    alert('Alerta: ' + e);
    console.log(e);
  }
}
