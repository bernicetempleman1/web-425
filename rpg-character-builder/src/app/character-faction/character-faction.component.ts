/*
a. Use the HttpClient module to make a call to the provided character-faction.js
API (located in the data-files folder) and display the response data in a styled
table, unordered list, or cards with columns and rows. The response data
from the API call is a list of the available character factions.

b. Use the file named character-factions.js (located in the data-files folder) for
your API. You can call this service using the following path:
http://localhost:3000/api/character-factions. And, to execute the script, use
node character-factions.js.

c. Update the navigation in your web application to support bi-direction
navigation (navbar links and footer links) to this component.

*/

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpXsrfTokenExtractor } from '@angular/common/http';

@Component({
  selector: 'app-character-faction',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="create-guild">
      <h1>Factions:</h1>

      @if (factions) {
      <div class="create-faction-container">
        @for(faction of factions; track faction) {
        <div class="create-faction-card">
          <h2>Faction Name:</h2>
          <p>{{ faction.name }}</p>
          <h3>Description:</h3>
          <p>{{ faction.description }}</p>
        </div>
        }
      </div>

      } @else {
      <p>No factions have been created yet</p>
      }
    </div>
  `,
  styles: `

.create-faction-container {
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
gap: 20px;
}

.create-faction-card {
flex: 0 0 calc(50% - 20px);
box-sizing: border-box;
border: 1px solid #ccc;
border-radius: 5px;
padding: 20px;
margin: 10px 0;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
`,
})
export class CharacterFactionComponent {

  factions: any = null;
  noFactionMessage: string = '';

  constructor(private http: HttpClient) {
    this.http.get(`http://localhost:3000/api/character-factions`).subscribe({
      next: (res) => {
        console.log(res);
        this.factions = res;
      },
      error: (err) => {
        console.error('Error fetching factions', err);
        if (err.error === 'Faction not found') {
          this.noFactionMessage = 'No faction found';
        } else {
          this.noFactionMessage =
            'Error fetching factions. Please try again later.';
        }
      },
    });
  }
}
