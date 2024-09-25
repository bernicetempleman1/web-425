export interface Character {
  id: number;
  name: string;
  gender: string;
  class: string;
}

export interface CreateCharacter {
  characters: Character[];
  //orderId: number;
}

import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from '../character-list/character-list.component';

@Component({
  selector: 'app-create-character',
  standalone: true,
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

      <div class="character-list">
        <app-character-list [createcharacter]="createcharacter"></app-character-list>
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


      fieldset {
        margin-bottom: 20px;
      }

      label,
      select {
        display: block;
        margin-bottom: 5px;
      }

      select, input[type='submit'] {
        display: block;
        margin-top: 15px;
      }
      select {
        width: 100%;
      }
      input[type='submit'] {
        float: right;
      }
      input[type='checkbox'] {
        margin-right: 5px;
      }

      .character-list {
        flex: 1;
      }
      `,
  ],
  imports: [FormsModule, CommonModule, CharacterListComponent],
})

export class CreateCharacterComponent {
  characters: Character[];

  //order: Order;
  createcharacter: CreateCharacter;

  id: number = 0;
  name: string = '';
  gender: string = '';
  class: string = '';

  @Output() orderUpdated = new EventEmitter<CreateCharacter>();

  constructor() {
    this.characters = [];
    this.createcharacter = { characters: [] };
  }

  // addToOrder add characters to order
  createCharacter() {
    // random number between 1 and 1000 for order Id no decimal places
    this.id = Math.floor(Math.random() * 1000) + 1;

    const addCharacter: Character = {
      id: this.id,
      name: this.name,
      gender: this.gender,
      class: this.class,
    };

    this.createcharacter.characters.push(addCharacter);
    console.log('Order after adding:', this.createCharacter);

    this.orderUpdated.emit(this.createcharacter);

    this.resetForm();
  }

  resetForm() {
    this.name = '';
    this.gender = '';
    this.class = '';
  }
}
