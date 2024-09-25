/*
Write unit tests to verify the functionality of the input/output properties. You should
write the tests before you implement the components functionality, following TDD
principles. You may choose three test cases of your own, but they must test the new
components functionality. For suggestions, consider the following:
e. Test 1 (suggestion): characters in the newly created component are
displaying correctly.
f. Test 2 (suggestion): guilds in the newly created component are displaying
correctly.
g. Test 3 (suggestion): should display a message for an empty guild list.
h. Test 4 (suggestion): should display a message for an empty character list.
*/

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterListComponent } from './character-list.component';
import { CommonModule } from '@angular/common';
import { CreateCharacterComponent } from '../create-character/create-character.component';
import { CreateCharacter } from '../create-character/create-character.component';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterListComponent, CommonModule, CreateCharacterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;

    const mockOrder = {
      // orderId: 999,
      characters: [
        { id: 1, name: 'Al Pastor', gender: 'Female', class: 'Mage' },
        { id: 2, name: 'Carnitas', gender: 'Female', class: 'Mage' },
      ],
    };

    component.createcharacter = mockOrder;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    //Test 1: characters in the newly created component are displaying correctly.
    it('should display details for each taco in the order', () => {

      component.createcharacter = { characters: [{ id: 1, name: 'Al Pastor', gender: 'Female', class: 'Mage' }] };
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('li').textContent).toContain(
        'Al Pastor is a Female Mage');
    });

 //Test 4: should display a message for an empty character list
  it('should display message for empty character list', () => {
    component.createcharacter = { characters: [] };
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(
      'No characters have been created yet'
    );
  });
});

/*

  it('should calculate total price correctly', () => {
    const mockOrder: Order = {
      orderId: 1000,
      tacos: [
        { id: 1, name: 'Carnitas', price: 3, quantity: 2 },
        { id: 3, name: 'Al Pastor', price: 2.5, quantity: 1 },
      ],
    };
    component.order = mockOrder;
    expect(component.getTotal()).toEqual(8.5);
  });

  it('should display message for empty order', () => {
    component.order = { orderId: 1001, tacos: [] };
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(
      'No tacos added to the order yet.'
    );
  });

  it('should display details for each taco in the order', () => {
    const mockOrder: Order = {
      orderId: 1002,
      tacos: [
        { id: 1, name: 'Carnitas', price: 3, quantity: 2 },
        { id: 3, name: 'Al Pastor', price: 2.5, quantity: 1 },
      ],
    };

    component.order = mockOrder;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('li').textContent).toContain('2x Carnitas');
    expect(compiled.querySelector('li').textContent).toContain(
      'Price per taco: $3.00'
    );
  });
});

  //Test 1: characters in the newly created component are displaying correctly.
  it('should display details for each taco in the order', () => {
    const mockOrder: CreateCharacterComponent = {
      characters: [
        { id: 1, name: 'Al Pastor', gender: 'Female', class: 'Mage' },
        { id: 2, name: 'Carnitas', gender: 'Female', class: 'Mage' },
      ],
      createcharacter = { characters: [] };
    };
    component.createcharacter = mockOrder;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('li').textContent).toContain(
      'Al Pastor is a Female Mage'
    );
  });

*/


