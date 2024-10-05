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
    expect(component.id).toBeGreaterThan(0);
    expect(component.id).toBeLessThanOrEqual(1000);
    expect(Number.isInteger(component.id)).toBe(true);
  });

  it('should add a character with correct customization', () => {
    component.name = 'Bernice',
    component.gender = 'Female',
    component.class = 'Mage',
    component.createCharacter();
    const addedCharacter = component.createcharacter.characters[0];
    expect(addedCharacter.name).toBe('Bernice');
    expect(addedCharacter.gender).toBe('Female');
    expect(addedCharacter.class).toBe('Mage');
  });

  it('should reset all form fields to their default values after resetForm is called', () => {
    component.name = 'Y';
    component.gender = 'Male';
    component.class = 'Rogue';
    component.resetForm();
    expect(component.name).toBe('');
    expect(component.gender).toBe('');
    expect(component.class).toBe('');
  });
});
