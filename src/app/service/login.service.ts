import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Login} from '../Models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(usuario:Login):Observable<any>
  {
    console.log(usuario);
    const urslEndPoint = 'http://200.60.61.250:8007/api/seguridad/token';
    const httpHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    let params = new URLSearchParams();
    params.set('Usuario', usuario.Usuario);
    params.set('Contraseña',usuario.Contrasenia);
    console.log(params.toString());
    return this.http.post<any>(urslEndPoint, params.toString(), {headers: httpHeaders});
  }
}
