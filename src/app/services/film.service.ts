import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Film} from "../../assets/models/film.model";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private baseUrl = 'https://swapi.dev/api/films'; // Replace with your actual API base URL

  constructor(private http: HttpClient) {
  }

  getFilms(): Observable<Film[]> {
    return this.http.get<{ results: Film[] }>(this.baseUrl).pipe(
      map((response: { results: Film[] }) => response.results),
      catchError(error => {
        console.error('Error loading profile', error);
        return [];
      })
    );
  }

}
