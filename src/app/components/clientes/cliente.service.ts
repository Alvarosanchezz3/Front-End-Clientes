import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable, catchError, throwError} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlBase = 'http://localhost:8080/api/clientes'
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, private router: Router) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.urlBase);
  }

  create(cliente: Cliente) : Observable<Cliente> {
    return this.http.post<Cliente>(this.urlBase, cliente, {headers: this.httpHeaders})
  }

  getCliente(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.urlBase}/${id}`).pipe(
      catchError(e => {
        console.error(e.error.mensaje)
        this.router.navigate(['/clientes']);
        Swal.fire('Error al editar', e.error.mensaje, 'error')
        return throwError(e);
      })
    );
  }

  update(cliente: Cliente) : Observable<Cliente> {
    return this.http.put<Cliente>(`${this.urlBase}/${cliente.id}`, cliente, {headers: this.httpHeaders})
  }

  delete(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.urlBase}/${id}`, {headers: this.httpHeaders})
  }
}