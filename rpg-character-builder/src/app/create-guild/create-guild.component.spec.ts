import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateGuildComponent } from './create-guild.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('CreateGuildComponent', () => {
  let component: CreateGuildComponent;
  let fixture: ComponentFixture<CreateGuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGuildComponent, ReactiveFormsModule, FormsModule],
    }).compileComponents();
    fixture = TestBed.createComponent(CreateGuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // All fields are required.
  it('form should be valid when filled correctly', () => {
    component.createGuildForm.controls['guildName'].setValue('SoftwareEngineer');
    component.createGuildForm.controls['description'].setValue('Great service!');
    component.createGuildForm.controls['type'].setValue('Competitive');
    component.createGuildForm.controls['notification'].setValue('Email');
    component.createGuildForm.controls['acceptTerms'].setValue('Yes');
    expect(component.createGuildForm.valid).toBeTruthy();
  });

  // Accept terms must be checked.
  it('Invalid if Accept terms not checked', () => {
    component.createGuildForm.controls['guildName'].setValue(
      'Software Engineer'
    );
    component.createGuildForm.controls['description'].setValue(
      'Great service!'
    );
    component.createGuildForm.controls['type'].setValue('Educational');
    component.createGuildForm.controls['notification'].setValue('Email');
    expect(component.createGuildForm.valid).toBeFalsy();
  });

  // Prevent form submission if invalid
  it('form should be invalid when empty', () => {
    expect(component.createGuildForm.valid).toBeFalsy();
  });
});
