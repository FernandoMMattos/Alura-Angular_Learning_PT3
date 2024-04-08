import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IReview } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }

  private apiURL: string = environment.apiUrl

  list(): Observable<IReview[]>{
    return this.http.get<IReview[]>(`${this.apiURL}/depoimentos`)
  }
}
