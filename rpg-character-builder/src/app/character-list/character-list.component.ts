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

/*
import { Component, Input } from '@angular/core';
import { Order } from '../order/order.component';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-order-summary',
standalone: true,
imports: [ CommonModule ],
template: `
<h1>Order Summary</h1>
@if (order.tacos.length > 0) {
<ul>
@for (taco of order.tacos; track taco) {
<li>
<strong>{{ taco.quantity }}x {{ taco.name }}</strong>
<br />
Price per taco: {{ taco.price | currency:'USD':'symbol':'1.2-2' }}
<br />
@if (taco.noOnions) {
No onions
<br />
}
@if (taco.noCilantro) {
No cilantro
<br />
}
</li>
}
</ul>
<p><strong>Total:</strong> {{ getTotal() | currency:'USD':'symbol':'1.2-2' }}</p>
} @else {
<p>No tacos added to the order yet.</p>
}
`,
styles: `
li {
margin-bottom: 10px;
padding: 5px;
}
`
})
export class OrderSummaryComponent {
@Input() order!: Order;

getTotal() {
return this.order.tacos.reduce((acc, taco) => acc + (taco.price * (taco.quantity
?? 1)), 0);
}
}
*/
