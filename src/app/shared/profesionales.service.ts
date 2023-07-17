import { Injectable } from '@angular/core';
import { Profesional } from '../models/profesional';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfesionalesService {

  private url: string = 'http://localhost:3000/profesionales';

  constructor(private http: HttpClient) { }

  public getProfesionales(name: string, last_name: string){
    if (name != '' && last_name !=''){
      return this.http.get(this.url + '?name=' + name + '&last_name=' + last_name);
    }
    else{
      return this.http.get(this.url);
    }
  }

  public postProfesionales(profesional: Profesional){
      return this.http.post(this.url, profesional);
  }

  public putProfesionales(profesional: Profesional){
    return this.http.put(this.url, profesional);
}

  public deleteProfesionales(name: string, last_name: string){
    return this.http.request('delete',this.url,{body:{name: name, last_name: last_name}})
  }
}
