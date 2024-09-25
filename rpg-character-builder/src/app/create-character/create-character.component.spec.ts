import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateCharacterComponent } from './create-character.component';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCharacterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate a random character ID between 1 and 1000 with no decimal places', () => {
    component.createCharacter(); // This will trigger the generation of a new character ID
    expect(component.characterId).toBeGreaterThan(0);
    expect(component.characterId).toBeLessThanOrEqual(1000);
    expect(Number.isInteger(component.characterId)).toBe(true);
  });

  it('should add a character with correct customization', () => {
    //component.id = 1;
    component.name = 'Bernice',
    component.gender = 'Female',
    component.class = 'Mage',
    component.createCharacter();
    const addedCharacter = component.createcharacter.characters[0];
    //const addedTaco = component.order.tacos[0];
    //expect(addedCharacter.id).toBe(1);
    expect(addedCharacter.name).toBe('Bernice');
    expect(addedCharacter.gender).toBe('Female');
    expect(addedCharacter.class).toBe('Mage');
  });

  it('should reset all form fields to their default values after resetForm is called', () => {
    //component.selectedCharacterId = 2;
    component.name = 'Y';
    component.gender = 'Male';
    component.class = 'Rogue';
    component.resetForm();
    //expect(component.selectedCharacterId).toBe(1);
    expect(component.name).toBe('');
    expect(component.gender).toBe('');
    expect(component.class).toBe('');
  });
});
