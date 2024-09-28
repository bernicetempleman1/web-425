import { Component, Input } from '@angular/core';
import { CreateCharacter } from '../create-character/create-character.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule],
  template: `

<div class="character-summary">
        <h2>Created Characters</h2>
        @if (createcharacter.characters.length > 0) {
        <ul>
          @for (character of createcharacter.characters; track character) {
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

  `,
  styles: `
li {
margin-bottom: 10px;
padding: 5px;
}
`,
})
export class CharacterListComponent {
  @Input() createcharacter!: CreateCharacter;
}
