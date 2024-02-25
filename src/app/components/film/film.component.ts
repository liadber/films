import {Component, Input} from '@angular/core';
import {Character} from "../../../assets/models/character.model";
import {Film} from "../../../assets/models/film.model";

@Component({
  selector: 'app-film',
  standalone: true,
  imports: [],
  templateUrl: './film.component.html',
  styleUrl: './film.component.scss'
})
export class FilmComponent {
  @Input() film: Film = {release_date: '', opening_crawl: '', producer: '', title: '', director: '', characters: []};
}
