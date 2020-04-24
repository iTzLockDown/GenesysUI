import {Injectable} from '@angular/core';
import {Usuario} from '../Models//usuario';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable, throwError } from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class UsuarioService {
  private urlEndPoint: string = "http://localhost:8500/api/usuario";
  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private http: HttpClient,
              private router: Router) {
  }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Usuario[])
    );
  }

  create(usuario: Usuario): Observable<any> {
    return this.http.post<any>(this.urlEndPoint, usuario, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        if (e.status == 400) {
          return throwError(e);
        }
        // Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

  getUsuario(id): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        this.router.navigate(['/usuarios']);
        console.error(e.error.mensaje);
        // Swal.fire('Error al editar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  update(usuario: Usuario): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}/${usuario.cCodigoUsu}`, usuario, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        if (e.status == 400) {
          return throwError(e);
        }
        // Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

  delete(id: number): Observable<Usuario> {
    return this.http.delete<Usuario>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        // Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }
}
