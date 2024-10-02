  /* Data
  [
  {
    "name": "The Iron Brotherhood",
    "description": "The Iron Brotherhood is a faction of brave and honorable warriors. They value strength, courage, and loyalty above all else. Their members are known for their iron will and unbreakable spirit."
  },
  {
    "name": "The Arcane Order",
    "description": "The Arcane Order is a faction of powerful mages. They seek knowledge and wisdom, and their magic is a tool to understand the mysteries of the universe. They are respected and feared for their magical prowess."
  },
  {
    "name": "The Silent Knives",
    "description": "The Silent Knives is a faction of skilled rogues. They value stealth, cunning, and precision. Their members are masters of the shadows, using their skills for espionage and assassination."
  },
  {
    "name": "The Nature's Guardians",
    "description": "The Nature's Guardians is a faction of druids and rangers. They are the protectors of the natural world, using their abilities to maintain the balance between civilization and nature."
  }
]
  */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CharacterFactionComponent } from './character-faction.component';

describe('CharacterFactionComponent', () => {
  let component: CharacterFactionComponent;
  let fixture: ComponentFixture<CharacterFactionComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterFactionComponent, HttpClientTestingModule]
    })
    .compileComponents();

    httpTestingController = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(CharacterFactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create CharacterFaction', () => {
    expect(component).toBeTruthy();
  });

  //Test 1: should handle errors when data is not found.
  it('should handle error when data is not found', () => {
    const expectedMessage = 'No faction found';
    const req = httpTestingController.expectOne(
      `http://localhost:3000/api/character-factions`
    );
    req.flush('Faction not found', { status: 404, statusText: 'Not Found' });

    expect(component.noFactionMessage).toEqual(expectedMessage);
  });


  //Test 2: should correctly fetch a list of character factions.
  it(' should update the characterFactions div when character factions are found.', () => {

    const mockFaction = [{
      name: 'The Arcane Order',
      description:
        'The Arcane Order is a faction of powerful mages. They seek knowledge and wisdom, and their magic is a tool to understand the mysteries of the universe. They are respected and feared for their magical prowess.',
    }];

    const req = httpTestingController.expectOne(
      `http://localhost:3000/api/character-factions`
    );
    req.flush(mockFaction);
    expect(component.factions).toEqual(mockFaction);

  });

  //Should update the characterFactions div when character factions are found
  it(' should update the characterFactions div when character factions are found.', () => {

    const expectedMessage = 'Software Developer';
    component.factions =  [{ name: 'Software Developer', description: 'Develop software' }];

    const req = httpTestingController.expectOne(
      `http://localhost:3000/api/character-factions`
    );
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(
      'Software'
    );

  });



});
