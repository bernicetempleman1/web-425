
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
    it('should display details for each character in the order', () => {

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
