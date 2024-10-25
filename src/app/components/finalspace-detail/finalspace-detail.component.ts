import { Component, inject, Input } from '@angular/core';
import { Root2 } from '../../interfaces/finalspace';
import { FinalspaceService } from '../../services/finalspace.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-finalspace-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './finalspace-detail.component.html',
  styleUrl: './finalspace-detail.component.css'
})
export class FinalspaceDetailComponent {
  @Input('id') id!: number;

  
  private rmService: FinalspaceService = inject(FinalspaceService);
  character!: Root2;

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
        console.log('Personaje cargado.');
      },
    });
  }

}
