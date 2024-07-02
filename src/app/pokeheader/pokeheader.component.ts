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
  const audio = new Audio('https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/assets/sounds/Poke_click.mov?raw=true');
  audio.play();
}

onAlert() {
  alert('Ce bouton aura une utilité dans un futur proche !');
}

}
