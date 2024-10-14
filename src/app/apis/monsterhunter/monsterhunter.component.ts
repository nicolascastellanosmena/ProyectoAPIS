import { Component, inject } from '@angular/core';
import { MonsterhunterService } from '../../services/monsterhunter.service';
import { MonsterHunter } from '../../interfaces/monsterhunter';

@Component({
  selector: 'app-monsterhunter',
  standalone: true,
  imports: [],
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
