import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ListComponent} from "./components/list/list.component";
import {CardComponent} from "./components/card/card.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatGridListModule, MatCardModule, CardComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'liad-app';
}
