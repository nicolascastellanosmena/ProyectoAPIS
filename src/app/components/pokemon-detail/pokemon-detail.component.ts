import { Component, inject, Input } from '@angular/core';
import { PokemonOne } from '../../interfaces/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent {
  @Input('id') id!: number;

  character!: PokemonOne;
  private rmService: PokemonService = inject(PokemonService);

  ngOnInit(): void {
    this.loadCharacter();
  }

  private loadCharacter() {
    this.rmService.getCharacter(this.id).subscribe({
      next: (value) => {
        console.log(value);
        this.character = value;
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        console.log('Pokémon cargado.');
      },
    });
  }
}
