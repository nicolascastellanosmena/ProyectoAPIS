import { Component, inject } from '@angular/core';
import { ValorantService } from '../../services/valorant.service';
import { Valorant } from '../../interfaces/valorant';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-valorant',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './valorant.component.html',
  styleUrl: './valorant.component.css'
})
export class ValorantComponent {
  private valorantService: ValorantService = inject(ValorantService)
  apiData!: Valorant;
  constructor() {
    this.loadCharacters();
  }
  private loadCharacters() {
    this.valorantService.getCharacters().subscribe({
      next: (value) => {
        this.apiData = value;
      },
      error: (err) => {
        alert(err.message);
      },
      complete: () => {
        console.log('Personajes del Valorant cargados');
      },
    });
  }
}
