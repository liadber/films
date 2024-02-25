import {Component, Input} from '@angular/core';
import {Character} from "../../../assets/models/character.model";

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})
export class CharacterComponent {
  @Input() character: Character = {
    birth_year: '',
    eye_color: '',
    hair_color: '',
    height: '',
    mass: '',
    name: '',
    skin_color: ''
  };
}
