import { Component, inject } from '@angular/core';
import { MonsterhunterService } from '../../services/monsterhunter.service';
import { MonsterHunter } from '../../interfaces/monsterhunter';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-monsterhunter',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './monsterhunter.component.html',
  styleUrl: './monsterhunter.component.css'
})
export class MonsterhunterComponent {
private monsterHunterService: MonsterhunterService=inject(MonsterhunterService)
apiData!: MonsterHunter;
constructor() {
  this.loadCharacters();
}
private loadCharacters() {
  this.monsterHunterService.getCharacters().subscribe({
    next: (value) => {
      this.apiData = value;
    },
    error: (err) => {
      alert(err.message);
    },
    complete: () => {
      console.log('Personajes del Monster Hunter cargados');
    },
  });
}
}
