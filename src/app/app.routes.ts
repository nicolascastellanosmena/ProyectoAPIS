import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ValorantComponent } from './apis/valorant/valorant.component';
import { MonsterhunterComponent } from './apis/monsterhunter/monsterhunter.component';
import { PokemonComponent } from './apis/pokemon/pokemon.component';
import { FinalspaceComponent } from './apis/finalspace/finalspace.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';


export const routes: Routes = [
  
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: 'navbar', 
    component: NavbarComponent,
  },
  {
    path: 'footer',
    component: FooterComponent,
  },
  {
    path: 'inicio', title: "Inicio",
    component: InicioComponent,
  },
  {
    path: 'valorant', title: "Valorant API",
    component: ValorantComponent,
  },
  {
    path: 'monsterhunter', title: "Monster Hunter API",
    component: MonsterhunterComponent,
  },
  {
    path: 'pokemon', title: "Pokémon API",
    component: PokemonComponent,
  },
  {
    path: 'finalspace', title: "Final Space API",
    component: FinalspaceComponent,
  },
  {
    path: '**',
    component: PagenotfoundComponent,
  },
];
