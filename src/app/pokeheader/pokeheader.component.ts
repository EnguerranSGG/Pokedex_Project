import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokeheader',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pokeheader.component.html',
  styleUrl: './pokeheader.component.scss'
})
export class PokeheaderComponent {
playSound() {
  const audio = new Audio('../../assets/sounds/pokemon_red_blue_yellow sound effects.mp3');
  audio.play();
}

}
