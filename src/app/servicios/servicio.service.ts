import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iservicio } from '../modelo/Iservicio';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  
  URL:string = "http://localhost:8080/servicioDaga";
  apiUrl: any;

  constructor(private http:HttpClient) { }
//Listado
  getServicio = () => {
    let header = new HttpHeaders().set('Type-content','application/json');
    return this.http.get(this.URL, {headers : header})
  }

  postServicio = (data:Iservicio) => {
    return this.http.post<Iservicio>(this.URL,data)
    .pipe(map((emp)=>data)); // importar de rxjs
  }

  deleServicio = (id:number) => {
    return this.http.delete<Iservicio>(`${this.URL}/${id}`)
    .pipe(map((emp)=>id));
  }

  putServicio = (data:Iservicio) => {
    return this.http.put<Iservicio>(this.URL,data)
    .pipe(map((emp)=>data)); // importar de rxjs
  }
}
