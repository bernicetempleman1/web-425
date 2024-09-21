import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-create-guild',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="create-guild-form-container">
      <form
        [formGroup]="createGuildForm"
        class="create-guild-form"
        (ngSubmit)="leaveCreateGuild(); createGuildForm.reset()"
      >
        <h1>Complete the form below to create a guild.</h1>
        <fieldset>
          <legend>Create Guild Form</legend>

          <label>Guild Name:</label>
          <input
            type="text"
            formControlName="guildName"
            value="guildName"
            required="true"
          />

          <label>Description:</label>
          <textarea rows="10" formControlName="description" required="true"></textarea>

          <label>Type:</label>
          <select formControlName="type">
            @for(option of recommendedOptions; track option) {
            <option [value]="option">{{ option }}</option>
            }
          </select>

          <label>Notification Preference:</label>
          @for(notification of notifications; track notification) {
          <input type="radio" [value]="notification" formControlName="notification" />
          {{ notification }} <br />
          }

          <label>Accept Terms:</label>
          <div formArrayName="acceptTerms">
            @for(acceptTerm of acceptTermsArray.controls; track acceptTerm; let i = $index) {
            <input type="checkbox" [formControlName]="i"
            [required]="true"
            /> {{ acceptTerms[i] }}
            <br />
            }
          </div>

          <input
            type="submit"
            [disabled]="!createGuildForm.valid"
            value="submit"
          />

        </fieldset>
      </form>

      <div class="create-guild">
        <h1>Guilds:</h1>
        <div class="create-guild-container">
          @for(createguild of preexistingCreateGuild; track createguild) {
          <div class="create-guild-card">
          <h2>Guild Name:</h2>
            <p>{{ createguild.guildName }}</p>
            <h3>Description:</h3>
            <p>{{ createguild.description }}</p>
            <h3>Type:</h3>
            <p>{{ createguild.type }}</p>
            <h3>Notification Preference:</h3>
            <p>{{ createguild.notification }}</p>
            <h3>Accept Terms:</h3>
            <ul class="likes-list">
            @for(acceptTerm of createguild.acceptTerms; track acceptTerm) {
            <li>{{ acceptTerm }}</li>
            }
            </ul>

          </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: `
.create-guild-form-container {
display: flex;
flex-direction: column;
width: 80%;
align-items: center;
}
.create-guild-form, .feedback {
width: 100%;
margin-bottom: 20px;
}
.create-guild-container {
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
gap: 20px;
}
.create-guild-card {
flex: 0 0 calc(50% - 20px);
box-sizing: border-box;
border: 1px solid #ccc;
border-radius: 5px;
padding: 20px;
margin: 10px 0;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.likes-list {
list-style-type: none;
padding: 0;
}
.likes-list li {
padding: 5px 0;
}
label {
display: block;
margin-bottom: 5px;
}
label:first-of-type {
margin-top: 0;
}
label:not(:first-of-type) {
margin-top: 10px;
}
select {
width: 20%;
display: block;
margin-bottom: 5px;
padding: 8px;
box-sizing: border-box;
}
textarea {
width: 100%;
margin-bottom: 5px;
padding: 8px;
box-sizing: border-box;
}
input[type="submit"] {
display: block;
padding: 8px;
margin-bottom: 10px;
box-sizing: border-box;
float: right;
}
input[type="checkbox"], input[type="radio"] {
box-sizing: border-box;
margin-bottom: 10px;
}
fieldset {
margin-bottom: 20px;
}
`,
})

export class CreateGuildComponent {

  typeOptions: string[] = ['Competitive', 'Casual', 'Social', 'Educational'];
  recommendedOptions: string[] = ['Competitive', 'Casual', 'Social', 'Educational'];
  notifications: string[] = ['Email', 'SMS', 'In-App'];
  acceptTerms: string[] = ['Yes'];
  preexistingCreateGuild: any;

  createGuildForm: FormGroup = this.fb.group({
    guildName: [null],
    description: [null],
    type: [null, Validators.compose([Validators.required])],
    notification: [null, Validators.compose([Validators.required])],
    acceptTerms:  this.fb.array(this.acceptTerms.map(() => false)),
  });

  constructor(private fb: FormBuilder) {
    this.preexistingCreateGuild = [
      {
        guildName: 'Software Developer',
        description:
          'Everything was perfect, from the service to the quality of the products.',
        type: ['Competitive'],
        notification: ['Email'],
        acceptTerms: ['true'],
      },
      {
        guildName: 'System Administrator',
        description:
          'Everything was perfect, from the service to the quality of the products.',
        type: ['Casual'],
        notification: ['SMS'],
        acceptTerms: ['true'],
      },
      {
        guildName: 'Technical Support Engineer',
        description:
          'Everything was perfect, from the service to the quality of the products.',
        type: ['Social'],
        notification: ['In-App'],
        acceptTerms: ['true'],
      },
      {
        guildName: 'Platform Engineer',
        description:
          'Everything was perfect, from the service to the quality of the products.',
        type: ['Educational'],
        notification: ['Email'],
        acceptTerms: ['true'],
      },
      {
        guildName: 'Cyber Security Specialist',
        description:
          'Everything was perfect, from the service to the quality of the products.',
        type: ['Educational'],
        notification: ['Email'],
        acceptTerms: ['true'],
      },
    ];
  }

  get acceptTermsArray() {
    return this.createGuildForm.get('acceptTerms') as FormArray;
  }
  get typesArray() {
    return this.createGuildForm.get('types') as FormArray;
  }

  leaveCreateGuild() {
    // Get the boolean values for each checkbox from the FormArray
    const selectedAcceptTermsValues = this.acceptTermsArray.value;

    //Map and filter the accept based on the boolean values
    const selectedAcceptTerms = this.acceptTerms
      .map((acceptTerm, index) => (selectedAcceptTermsValues[index] ? acceptTerm : null))
      .filter((acceptTerm) => acceptTerm !== null);

    const newCreateGuild = {
      guildName: this.createGuildForm.value.guildName,
      description: this.createGuildForm.value.description,
      type: this.createGuildForm.value.type,
      acceptTerms: this.createGuildForm.value.acceptTerms,
      notification: this.createGuildForm.value.notification,
      likes: selectedAcceptTerms,
    };

    // Now, selectedLikes contains the actual items that were selected
    //console.log('Selected types:', selectedType);
    console.log('Complete form value:', newCreateGuild);
    this.preexistingCreateGuild.push(newCreateGuild);
    alert('Guild submitted successfully!');
  }
}

