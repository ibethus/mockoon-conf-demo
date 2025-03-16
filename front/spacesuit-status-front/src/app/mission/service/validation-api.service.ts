import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Validation } from '../model/validation.model';

@Injectable({
  providedIn: 'root',
})
export class ValidationApi {
  private readonly apiURL: string = environment.apiURL + '/spacesuits';

  constructor(private http: HttpClient) {}

  validateSuit(suitId: string): Observable<Validation> {
    return this.http.post<Validation>(`${this.apiURL}/${suitId}/validate`, null);
  }
}
