export interface Character {
  id: number;
  name: string;
  gender: string;
  class: string;
}

import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="character-form-container">
      <form
        class="character-form"
        #characterForm="ngForm"
        (ngSubmit)="createCharacter()"
      >
        <h1>Complete the form below to create a character.</h1>
        <fieldset>
          <label for="characterName">Name</label>
          <input
            type="text"
            id="characterName"
            name="characterName"
            [(ngModel)]="name"
            ngModel
          />

          <label for="characterGender">Gender</label>
          <select
            name="characterGender"
            id="characterGender"
            [(ngModel)]="gender"
            ngModel
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <label for="characterClass">Class</label>
          <select
            name="characterClass"
            id="characterClass"
            [(ngModel)]="class"
            ngModel
          >
            <option value="Warrior">Warrior</option>
            <option value="Mage">Mage</option>
            <option value="Rogue">Rogue</option>
          </select>

          <input type="submit" value="Create Character" />
        </fieldset>
      </form>

      <div class="character-summary">
        <h2>Created Characters</h2>
        @if (characters.length > 0) {
        <ul>
          @for (character of characters; track character) {
          <li>
            <strong
              >{{ character.name }} is a {{ character.gender }}
              {{ character.class }}
            </strong>
            <br />
          </li>
          }
        </ul>

        } @else {
        <p>No characters have been created yet</p>
        }
      </div>
    </div>
  `,
  styles: [
    `
      .character-form-container {
        display: flex;
        justify-content: space-between;
        gap: 10px;
      }

      .character-form {
        flex: 1;
        margin-right: 20px;
      }
      .character-summary {
        flex: 1;
      }

      fieldset {
        margin-bottom: 20px;
      }

      label,
      select {
        display: block;
        margin-bottom: 5px;
      }

      input[type='submit'] {
        display: block;
        margin-top: 15px;
      }

      select {
        width: 100%;
      }
    `,
  ],
})
export class CreateCharacterComponent {
  characters: Character[];
  characterId: number = 0;
  name: string = '';
  gender: string = '';
  class: string = '';

  constructor() {
    this.characters = [];
  }

  createCharacter() {
    // random number between 1 and 1000 for order Id no decimal places
    this.characterId = Math.floor(Math.random() * 1000) + 1;

    const addCharacter: Character = {
      id: this.characterId,
      name: this.name,
      gender: this.gender,
      class: this.class,
    };

    this.characters.push(addCharacter);
    this.resetForm();
  }

  resetForm() {
    this.name = '';
    this.gender = '';
    this.class = '';
  }
}
