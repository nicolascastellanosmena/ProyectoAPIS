import { Component, inject } from '@angular/core';
import { FinalSpace } from '../../interfaces/finalspace';
import { FinalspaceService } from '../../services/finalspace.service';

@Component({
  selector: 'app-finalspace',
  standalone: true,
  imports: [],
  templateUrl: './finalspace.component.html',
  styleUrl: './finalspace.component.css'
})
export class FinalspaceComponent {
private finalSpaceService: FinalspaceService=inject(FinalspaceService)
apiData!: FinalSpace
constructor() {
  this.loadCharacters();
}
private loadCharacters() {
  this.finalSpaceService.getCharacters().subscribe({
    next: (value) => {
      this.apiData = value;
    },
    error: (err) => {
      alert(err.message);
    },
    complete: () => {
      console.log('Personajes del Final Space cargados');
    },
  });
}
}
