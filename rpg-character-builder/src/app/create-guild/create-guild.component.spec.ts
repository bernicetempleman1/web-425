import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateGuildComponent } from './create-guild.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Create-GuildComponent', () => {
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

  it('form should be invalid when empty', () => {
    expect(component.createGuildForm.valid).toBeFalsy();
  });

  // All fields are required.
  it('form should be valid when filled correctly', () => {
    component.createGuildForm.controls['rating'].setValue('5');
    component.createGuildForm.controls['recommend'].setValue('Yes');
    component.createGuildForm.controls['comments'].setValue('Great service!');
    expect(component.createGuildForm.valid).toBeTruthy();
  });

  // Accept terms must be checked.

  //Prevent form submissions if the form is invalid.
  it('should call leaveCreateGuild on form submit with valid data', () => {
    spyOn(component, 'leaveCreateGuild');
    component.createGuildForm.controls['rating'].setValue('5');
    component.createGuildForm.controls['recommend'].setValue('Yes');
    component.createGuildForm.controls['comments'].setValue('Great service!');
    fixture.detectChanges();
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);
    expect(component.leaveCreateGuild).toHaveBeenCalled();
  });
});
