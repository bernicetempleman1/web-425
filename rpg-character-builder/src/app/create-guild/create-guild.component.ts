import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  ReactiveFormsModule,
} from '@angular/forms';


/*
guildName (text),
description (textarea),
type (select menu) with options for “Competitive, Casual, Social, Educational,”
acceptTerms (checkbox)
notificationPreference (radio) with options for “Email, SMS, In-App).
*/


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
        <h1>Complete the form below to leave feedback.</h1>
        <fieldset>
          <legend>Create Guild Form</legend>










          <label>Rate our service</label>
          @for(rating of ratings; track rating) {
          <input type="radio" [value]="rating" formControlName="rating" />
          {{ rating }} <br />
          }
          <label>What did you like about our service?</label>
          <div formArrayName="likes">
            @for(like of likesArray.controls; track like; let i = $index) {
            <input type="checkbox" [formControlName]="i" /> {{ likes[i] }}
            <br />
            }
          </div>
          <label>What you recommend us?</label>
          <select formControlName="recommend">
            @for(option of recommendedOptions; track option) {
            <option [value]="option">{{ option }}</option>
            }
          </select>
          <label>Any additional comments?</label>
          <textarea rows="10" formControlName="comments"></textarea>
          <input
            type="submit"
            [disabled]="!createGuildForm.valid"
            value="Leave Feedback"
          />
        </fieldset>
      </form>
      <div class="createguild">
        <h1>Customer Feedback</h1>
        <div class="createguild-container">
          @for(createguild of preexistingCreateGuild; track createguild) {
          <div class="createguild-card">
            <h2>Rating: {{ createguild.rating }}</h2>
            <h3>Likes:</h3>
            <ul class="likes-list">
              @for(like of createguild.likes; track like) {
              <li>{{ like }}</li>
              }
            </ul>
            <h3>Would you recommend us?</h3>
            <p>{{ createguild.recommend }}</p>
            <h3>Comments:</h3>
            <p>{{ createguild.comments }}</p>
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

  ratings: string[] = ['1', '2', '3', '4', '5'];
  likes: string[] = ['Service', 'Quality', 'Price', 'Ambience', 'Other'];
  recommendedOptions: string[] = ['Yes', 'No'];
  preexistingCreateGuild: any;
  createGuildForm: FormGroup = this.fb.group({
    rating: [null, Validators.compose([Validators.required])],
    likes: this.fb.array(this.likes.map(() => false)),
    recommend: [null, Validators.compose([Validators.required])],
    comments: [null],
  });
  constructor(private fb: FormBuilder) {
    this.preexistingCreateGuild = [
      {
        rating: '5',
        likes: ['Service', 'Quality'],
        recommend: 'Yes',
        comments:
          'Everything was perfect, from the service to the quality of the products.',
      },
      {
        rating: '4',
        likes: ['Price'],
        recommend: 'Yes',
        comments:
          'Great prices and good service, will definitely recommend to friends.',
      },
      {
        rating: '3',
        likes: ['Ambience'],
        recommend: 'No',
        comments: 'The ambience was nice, but the service could be improved.',
      },
      {
        rating: '2',
        likes: ['Service'],
        recommend: 'No',
        comments:
          'The service was slow, and the quality of the food was not up to the mark.',
      },
      {
        rating: '5',
        likes: ['Service', 'Quality', 'Price', 'Ambience'],
        recommend: 'Yes',
        comments:
          'Absolutely loved everything! Great value for money and friendly staff.',
      },
    ];
  }

  get likesArray() {
    return this.createGuildForm.get('likes') as FormArray;
  }

  leaveCreateGuild() {
    // Get the boolean values for each checkbox from the FormArray
    const selectedLikesValues = this.likesArray.value;

    // Map and filter the likes based on the boolean values
    const selectedLikes = this.likes
      .map((like, index) => (selectedLikesValues[index] ? like : null))
      .filter((like) => like !== null);

    const newCreateGuild = {
      rating: this.createGuildForm.value.rating,
      likes: selectedLikes,
      recommend: this.createGuildForm.value.recommend,
      comments: this.createGuildForm.value.comments,
    };

    // Now, selectedLikes contains the actual items that were selected
    console.log('Selected likes:', selectedLikes);
    console.log('Complete form value:', newCreateGuild);
    this.preexistingCreateGuild.push(newCreateGuild);
    alert('Guild submitted successfully!');
  }
}

