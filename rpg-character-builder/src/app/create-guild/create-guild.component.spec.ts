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
  it('form should be valid when filled correctly and accept terms checked', () => {
    component.createGuildForm.controls['guildName'].setValue('Software');
    component.createGuildForm.controls['description'].setValue('Software');
    component.createGuildForm.controls['type'].setValue('Competitive');
    component.createGuildForm.controls['notification'].setValue('Email');
    component.createGuildForm.controls['acceptTerms'].setValue([true]);
    expect(component.createGuildForm.valid).toBeTruthy();
  });

  it('should call leaveCreateGuild on form submit with valid data', () => {
    spyOn(component, 'leaveCreateGuild');

    component.createGuildForm.controls['guildName'].setValue('Software');
    component.createGuildForm.controls['description'].setValue('Software');
    component.createGuildForm.controls['type'].setValue('Casual');
    component.createGuildForm.controls['notification'].setValue('Email');
    component.createGuildForm.controls['acceptTerms'].setValue([true]);

    fixture.detectChanges();
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);

    expect(component.leaveCreateGuild).toHaveBeenCalled();

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
    component.createGuildForm.controls['acceptTerms'].setValue([false]);
    expect(component.createGuildForm.valid).toBeFalsy();
  });

  // Prevent form submission if form is invalid
  it('form should be invalid when empty', () => {
    expect(component.createGuildForm.valid).toBeFalsy();
  });

});
