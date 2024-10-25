import { Component, inject, Input } from '@angular/core';
import { Root2 } from '../../interfaces/monsterhunter';
import { MonsterhunterService } from '../../services/monsterhunter.service';

@Component({
  selector: 'app-monsterhunter-detail',
  standalone: true,
  imports: [],
  templateUrl: './monsterhunter-detail.component.html',
  styleUrl: './monsterhunter-detail.component.css'
})
export class MonsterhunterDetailComponent {
  @Input('id') id!: number;

  character!: Root2;
  private rmService: MonsterhunterService = inject(MonsterhunterService);

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
        console.log('Arma cargada.');
      },
    });
  }
}
