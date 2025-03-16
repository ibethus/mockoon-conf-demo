import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Suit } from '../model/suit';
import { environment } from '../../../environments/environment';
import { PagedSuits } from '../model/paged-suit';

@Injectable({
    providedIn: 'root'
})
export class SpacesuitApi {
    private readonly apiURL: string = environment.apiURL + "/clones";

    constructor(private http: HttpClient) { }

    // Create a new Suit
    create(Suit: Suit): Observable<Suit> {
        return this.http.post<Suit>(this.apiURL, Suit);
    }

    // Get all Suits with pagination
    getAll(page: number = 0, size: number = 10, sort?: string): Observable<PagedSuits> {
        let params = new HttpParams()
            .set('page', page.toString())
            .set('size', size.toString());
        
        if (sort) {
            params = params.set('sort', sort);
        }

        return this.http.get<PagedSuits>(this.apiURL, { params });
    }

    // Get a single Suit by ID
    getById(id: string): Observable<Suit> {
        return this.http.get<Suit>(`${this.apiURL}/${id}`);
    }

    // Update a Suit
    update(id: string, Suit: Suit): Observable<void> {
        return this.http.put<void>(`${this.apiURL}/${id}`, Suit);
    }

    // Delete a Suit
    delete(id: string): Observable<void> {
        return this.http.delete<void>(`${this.apiURL}/${id}`);
    }
}