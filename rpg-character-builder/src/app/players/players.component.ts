
export interface PlayersItem {
  name: string;
  gender: string;
  class: string;
  faction: string;
  startingLocation: string;
  funFact: string;
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h1>Our Players</h1>
      <p>
        Explore our selection of handcrafted tacos, each filled with fresh
        ingredients and vibrant flavors to satisfy your cravings.
      </p>
      <ul class="players-container">
        @for (item of players; track item) {
        <li class="players-item">
          <div class="card">
            <h3>{{ item.name }}</h3>
            <p>{{ item.gender }}</p>
            <p>{{ item.class }}</p>
            <p>{{ item.faction }}</p>
            <p>{{ item.startingLocation }}</p>
            <p>{{ item.funFact }}</p>
          </div>
        </li>
        }
      </ul>
    </div>
  `,
  styles: [
    `
      .players-container {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
      }
      .players-item {
        flex: 0 1 calc(33.33% - 20px);
        margin: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
      .card {
        padding: 20px;
        background-color: white;
      }
    `,
  ],
})
export class PlayersComponent {
  players: PlayersItem[];

  constructor() {
    this.players = [
      {
        name: 'Bernice',
        gender:
          'female',
        class: 'Mage',
        faction: 'Eternal',
        startingLocation: 'Ohio',
        funFact: '',
      },
      {
        name: 'Berenice',
        gender:
          'female',
        class: 'Mage',
        faction: 'Eternal',
        startingLocation: 'Judaea',
        funFact: 'Berenice of Cilicia, also known as Julia Berenice and sometimes spelled Bernice, was a Jewish client queen of the Roman Empire during the second half of the 1st century. Berenice was a member of the Herodian Dynasty that ruled the Roman province of Judaea between 39 BC and 92 AD.',
      },
      {
        name: 'Asherah',
        gender:
          'female',
        class: 'Mage',
        faction: 'Eternal',
        startingLocation: 'Ancient Israel',
        funFact: 'a goddess in ancient Semitic religions',
      },
      {
        name: 'Shechinah',
        gender:
          'female',
        class: 'Mage',
        faction: 'Jewish',
        startingLocation: 'Ancient Israel',
        funFact: 'Divine presence',
      },
      {
        name: 'Hatshepsut',
        gender:
          'female',
        class: 'Mage',
        faction: 'Eternal',
        startingLocation: 'Ancient Egypt',
        funFact: 'She was Ancient Egypts second confirmed queen regnant',
      },
      {
        name: 'Sobekneferu',
        gender:
          'female',
        class: 'Mage',
        faction: 'Eternal',
        startingLocation: 'Ancient Egypt',
        funFact: 'Nefrusobek. She was Ancient Egypts first confirmed queen regnant',
      },
      {
        name: 'Maat',
        gender:
          'female',
        class: 'Mage',
        faction: 'Eternal',
        startingLocation: 'Ancient Egypt',
        funFact: 'Goddess who personified truth, justice, and order',
      },
      {
        name: 'Nut',
        gender:
          'female',
        class: 'Mage',
        faction: 'Eternal',
        startingLocation: 'Ancient Egypt',
        funFact: 'A sky goddess, a member of the Ennead',
      },
      {
        name: 'Hathor',
        gender:
          'female',
        class: 'Mage',
        faction: 'Eternal',
        startingLocation: 'Ancient Egypt',
        funFact: 'One of the most important goddesses, linked with the sky, the sun, sexuality and motherhood, music and dance, foreign lands and goods, and the afterlife. One of many forms of the Eye of Ra',

      },
      {
        name: 'Amunet',
        gender:
          'female',
        class: 'Mage',
        faction: 'Eternal',
        startingLocation: 'Ancient Egypt',
        funFact: 'Female counterpart of Amun and a member of the Ogdoad',
      },
    ];
  }
}

