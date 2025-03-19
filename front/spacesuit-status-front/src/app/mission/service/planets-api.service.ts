import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Planet } from '../model/planet.model';
import { ResponseWrapper } from '../model/response-wrapper.model';
import { PlanetDetails } from '../model/planet-detail.model';

@Injectable({
    providedIn: 'root',
})
export class PlanetsApi {
    private readonly apiURL: string = environment.planetsApiUrl;

    constructor(private http: HttpClient) { }

    findAll(): Observable<Planet[]> {
        return this.http.get<ResponseWrapper>(this.apiURL).pipe(map((wrapper: ResponseWrapper) => wrapper.results));
    }

    getDetails(uid: string): Observable<PlanetDetails> {
        return this.http.get<PlanetDetails>(`${this.apiURL}/${uid}`);
    }
}
