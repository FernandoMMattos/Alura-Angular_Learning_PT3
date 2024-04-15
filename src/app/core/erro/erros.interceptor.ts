import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { MensagemService } from '../services/mensagem.service';

@Injectable()
export class ErrosInterceptor implements HttpInterceptor {
  constructor(private service: MensagemService) {}

  intercept(
    request: HttpRequest<HttpErrorResponse>,
    next: HttpHandler
  ): Observable<HttpEvent<HttpErrorResponse>> {
    return next.handle(request).pipe(
      catchError((erro: HttpErrorResponse) => {
        let errorMessage = 'Ocorreu um erro desconhecido';
        if (erro.error instanceof ErrorEvent) {
          errorMessage = `Erro do cliente: ${erro.error.message}`;
        } else if (erro.status === 404) {
          errorMessage = 'Recurso nao encontrado';
        } else if (erro.status === 500) {
          errorMessage = 'Erro interno do servidor';
        } else if (erro.status === 401) {
          errorMessage = 'Voce nao tem autorizacao para acessar esse recurso';
        }

        this.service.openSnackBar(errorMessage);

        return throwError(() => new Error('Ops, ocorreu um erro'));
      })
    );
  }
}
