import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Character} from "../../assets/models/character.model";
import {Film} from "../../assets/models/film.model";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) {
  }

  getCharacter(characterUrl: string): Observable<Character> {
    return this.http.get<Character>(characterUrl);
  }
}
