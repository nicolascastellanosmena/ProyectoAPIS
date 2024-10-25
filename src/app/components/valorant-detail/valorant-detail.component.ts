import { Component, inject, Input } from '@angular/core';
import { Daum } from '../../interfaces/valorant';
import { ValorantService } from '../../services/valorant.service';

@Component({
  selector: 'app-valorant-detail',
  standalone: true,
  imports: [],
  templateUrl: './valorant-detail.component.html',
  styleUrl: './valorant-detail.component.css'
})
export class ValorantDetailComponent {
  @Input('id') id!: number;

  character!: Daum;
  private rmService: ValorantService = inject(ValorantService);

  ngOnInit(): void {
    this.loadCharacter();
  }

  private loadCharacter() {
    this.rmService.getCharacter(this.id).subscribe({
      next: (value) => {
        console.log(value);
        this.character = value.data;
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        console.log('Personaje cargado.');
      },
    });
  }
}
