import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PokeService {
  url = 'https://api.pokemontcg.io/v2/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private httpClient: HttpClient) { }

  getAllCards(page: number): Observable<any> {
    return this.httpClient.get(`${this.url}/cards?page=${page}&pageSize=250`)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getCard(id: string): Observable<any> {
    return this.httpClient.get(`${this.url}/cards/${id}`)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getTypes(): Observable<any> {
    return this.httpClient.get(`${this.url}/types`)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getSubTypes(): Observable<any> {
    return this.httpClient.get(`${this.url}/subtypes`)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) errorMessage = error.error.message;
    else errorMessage = `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;

    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
