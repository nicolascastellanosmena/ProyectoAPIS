import { Component, inject } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../interfaces/pokemon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
private pokemonService: PokemonService = inject(PokemonService)
apiData!:Pokemon;
constructor() {
  this.loadCharacters();
}
private loadCharacters() {
  this.pokemonService.getCharacters().subscribe({
    next: (value) => {
      this.apiData = value;
    },
    error: (err) => {
      alert(err.message);
    },
    complete: () => {
      console.log('Personajes de Pokémon cargados');
    },
  });
}
}
