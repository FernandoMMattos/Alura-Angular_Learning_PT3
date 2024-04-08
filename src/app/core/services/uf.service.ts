import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { shareReplay } from 'rxjs/operators';
import { IUF } from '../types/type';

@Injectable({
  providedIn: 'root',
})
export class UFService {
  constructor(private http: HttpClient) {}

  private apiURL: string = environment.apiUrl;
  private cache$?: Observable<IUF[]>;

  private requestSates(): Observable<IUF[]> {
    return this.http.get<IUF[]>(`${this.apiURL}/estados`);
  }

  list(): Observable<IUF[]> {
    if (!this.cache$) this.cache$ = this.requestSates().pipe(shareReplay(1));
    return this.cache$;
  }
}
