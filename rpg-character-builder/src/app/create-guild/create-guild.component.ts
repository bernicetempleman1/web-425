export interface Guild {
  guildName: string;
  description: string;
  type: string[];
  notification: string[];
  //acceptTerms: string[] | null;
}

export interface CreateGuild {
  guilds: Guild[];
}

import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  ReactiveFormsModule,
} from '@angular/forms';
import { GuildListComponent } from '../guild-list/guild-list.component';

@Component({
  selector: 'app-create-guild',
  standalone: true,

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
          <input type="text" formControlName="guildName" value="guildName" />

          <label>Description:</label>
          <textarea rows="10" formControlName="description"></textarea>

          <label>Type:</label>
          <select formControlName="type">
            @for(option of typeOptions; track option) {
            <option [value]="option">{{ option }}</option>
            }
          </select>

          <label>Notification Preference:</label>
          @for(notification of notificationPreference; track notification) {
          <input
            type="radio"
            [value]="notification"
            formControlName="notification"
          />
          {{ notification }} <br />
          }

          <label>Accept Terms:</label>
          <div formArrayName="acceptTerms">
            @for(acceptTerm of acceptTermsArray.controls; track acceptTerm; let
            i = $index) {
            <input [required]="true" type="checkbox" [formControlName]="i" />
            {{ acceptTerms[i] }}
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

      <div class="guild-list">
        <app-guild-list [createguild]="createguild"></app-guild-list>
      </div>
    </div>
  `,
  styles: [
    `
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

      input[type='submit'] {
        display: block;
        padding: 8px;
        margin-bottom: 10px;
        box-sizing: border-box;
        float: right;
      }

      input[type='checkbox'],
      input[type='radio'] {
        box-sizing: border-box;
        margin-bottom: 10px;
      }

      fieldset {
        margin-bottom: 20px;
      }
    `,
  ],
  imports: [ReactiveFormsModule, FormsModule, CommonModule, GuildListComponent],
})
export class CreateGuildComponent {
  guilds: Guild[];
  createguild: CreateGuild;

  typeOptions: string[] = ['Competitive', 'Casual', 'Social', 'Educational'];
  notificationPreference: string[] = ['Email', 'SMS', 'In-App'];
  acceptTerms: string[] = ['Yes'];
  preexistingCreateGuild: any;

  createGuildForm: FormGroup = this.fb.group({
    guildName: [null, Validators.required],
    description: [null, Validators.required],
    type: [null, Validators.compose([Validators.required])],
    notification: [null, Validators.compose([Validators.required])],
    acceptTerms: this.fb.array(this.acceptTerms.map(() => false)),
  });

  constructor(private fb: FormBuilder) {
    this.guilds = [
      {
        guildName: 'Software Developer',
        description:
          'Software developers develop products. Everything was perfect, from the service to the quality of the products.',
        type: ['Competitive'],
        notification: ['Email'],
        //  acceptTerms: [true],
      },
      {
        guildName: 'System Administrator',
        description:
          'System Administrators maintain the systems serving the products. Everything was perfect, from the service to the quality of the products.',
        type: ['Casual'],
        notification: ['SMS'],
        // acceptTerms: [true],
      },
      {
        guildName: 'Technical Support Engineer',
        description:
          'Technical Support Engineers support customers using the systems. Everything was perfect, from the service to the quality of the products.',
        type: ['Social'],
        notification: ['In-App'],
        //  acceptTerms: [true],
      },
      {
        guildName: 'Platform Engineer',
        description:
          'Platform Engineers design and support the platforms serving the products and environments. Everything was perfect, from the service to the quality of the products.',
        type: ['Educational'],
        notification: ['Email'],
        //  acceptTerms: [true],
      },
      {
        guildName: 'Cyber Security Specialist',
        description:
          'Cyber Security Specialists secure the platforms and systems serving the products. Everything was perfect, from the service to the quality of the products.',
        type: ['Educational'],
        notification: ['Email'],
        //  acceptTerms: [true],
      },
    ];

    this.createguild = { guilds: [] };

    for (var i = 0; i <= this.guilds.length - 1; i++) {
      this.createguild.guilds.push(this.guilds[i]);
    }
  }

  @Output() orderUpdated = new EventEmitter<CreateGuild>();

  get acceptTermsArray() {
    return this.createGuildForm.get('acceptTerms') as FormArray;
  }

  leaveCreateGuild() {
    // Get the boolean values for each checkbox from the FormArray
    const selectedAcceptTermsValues = this.acceptTermsArray.value;

    //Map and filter the accept based on the boolean values
    const selectedAcceptTerms = this.acceptTerms
      .map((acceptTerms, index) =>
        selectedAcceptTermsValues[index] ? acceptTerms : null
      )
      .filter((acceptTerms) => acceptTerms !== null);

    const newCreateGuild = {
      guildName: this.createGuildForm.value.guildName,
      description: this.createGuildForm.value.description,
      type: this.createGuildForm.value.type,
      notification: this.createGuildForm.value.notification,
      acceptTerms: selectedAcceptTerms,
    };

    // Now, selectedLikes contains the actual items that were selected
    console.log('Complete form value:', newCreateGuild);
    this.createguild.guilds.push(newCreateGuild);
    alert('Guild submitted successfully!');
  }
}
