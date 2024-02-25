import {Component, OnInit} from '@angular/core';
import {MatGridListModule} from "@angular/material/grid-list";
import {FilmService} from "./services/film.service";
import {Film} from "../assets/models/film.model";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {forkJoin, Observable} from "rxjs";
import {Character} from "../assets/models/character.model";
import {CharacterService} from "./services/character.service";
import {MatListModule} from "@angular/material/list";
import {CharacterComponent} from "./components/character/character.component";
import {FilmComponent} from "./components/film/film.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule,
    CommonModule,
    MatGridListModule,
    MatListModule,
    CharacterComponent,
    FilmComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'liad-app';

  public films: Film[] = [];
  public selectedCharacter: Character | null = null;

  constructor(private filmService: FilmService, private characterService: CharacterService) {
    this.getFilms();
  }

  ngOnInit() {
    this.getFilms();
  }

  getFilms(): void {
    this.filmService.getFilms()
      .subscribe(films => {
        this.films = films.map((film) => {
          const characterObservables: Observable<Character>[] = film.characters
            .map((cApi: string) =>
              this.characterService.getCharacter(cApi).pipe((character: Observable<Character>) => character)
            );
          forkJoin(characterObservables)
            .subscribe((characters: Character[]) => {
              film.charactersList = characters;
            });
          return film;
        });
      });
  }

  selectCharacter(character: Character) {
    this.selectedCharacter = character;
  }
}
