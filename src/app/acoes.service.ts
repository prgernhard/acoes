import { Injectable } from '@angular/core';
import { Acao } from './acoes/acao';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AcoesService {

  apiURL: string = environment.apiURL;

  constructor(private http: HttpClient) { }

  salvar(acao: Acao): Observable<Acao>{
    return this.http.post<Acao>(`${this.apiURL}/acoes`, acao);

  }
  atualizar(acao: Acao): Observable<any>{
    return this.http.put<Acao>(`${this.apiURL}/acoes/${acao.id}`, acao);

  }

  getAcoes() : Observable<Acao[]>{

    return this.http.get<Acao[]>(`${this.apiURL}/acoes`);

  }

  getAcaoById(id: number): Observable<Acao>{

    return this.http.get<any>(`${this.apiURL}/acoes/${id}`);

  }

  deletar(acao: Acao): Observable<any>{

    return this.http.delete<any>(`${this.apiURL}/acoes/${acao.id}`);

  }
}
