import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import IOnSale from '../types/type';

@Injectable({
  providedIn: 'root',
})
export class SaleService {
  constructor(private http: HttpClient) {}

  private apiURL: string = environment.apiUrl;

  list(): Observable<IOnSale[]> {
    return this.http.get<IOnSale[]>(`${this.apiURL}/promocoes`);
  }
}
