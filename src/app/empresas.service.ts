import { Injectable } from '@angular/core';
import { Empresa } from './empresas/empresa';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  apiURL: string = environment.apiURL;

  constructor(private http: HttpClient) { }

  salvar(empresa: Empresa): Observable<Empresa> {
    return this.http.post<Empresa>(`${this.apiURL}/empresas`, empresa);

  }

  atualizar(empresa: Empresa): Observable<any> {
    return this.http.put<Empresa>(`${this.apiURL}/empresas/${empresa.id}`, empresa);

  }

  getEmpresas(): Observable<Empresa[]> {

    return this.http.get<Empresa[]>(`${this.apiURL}/empresas`);

  }

  getEmpresaById(id: number): Observable<Empresa> {

    return this.http.get<any>(`${this.apiURL}/empresas/${id}`);

  }

  deletar(empresa: Empresa): Observable<any> {

    return this.http.delete<any>(`${this.apiURL}/empresas/${empresa.id}`);

  }
}
