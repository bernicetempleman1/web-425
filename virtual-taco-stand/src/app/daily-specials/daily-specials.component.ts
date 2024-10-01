import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpXsrfTokenExtractor

 } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dailyspecials',
  standalone: true,
  imports: [ CommonModule, DailySpecialsComponent],
  template: `
    @if (dailySpecial) {
<div class="dspecial-container">
<h1>{{ dailySpecial.day }}'s Daily Special</h1>
<div class="dspecial-card">
<h3>{{ dailySpecial.name }}</h3>
<p>{{ dailySpecial.description }}</p>
<p>Price: {{ dailySpecial.price | currency }}</p>
</div>
</div>
} @else {
<div class="dspecial-container">
<h1>{{ noSpecialMessage }}</h1>
</div>
}
  `,
  styles: ``
})


export class DailySpecialsComponent {

dayOfTheWeek: string;
dailySpecial: any = null;
noSpecialMessage: string = '';

constructor(private http: HttpClient) {
this.dayOfTheWeek = this.getDayOfTheWeek();
this.http.get(`http://localhost:3000/api/daily-specials?day=${this.dayOfTheWeek}`).subscribe({
next: (res) => {
console.log(res);
this.dailySpecial = res;
},
error: (err) => {
console.error('Error fetching daily special', err);
if(err.error === 'Special not found') {
this.noSpecialMessage = 'No special today. Check back tomorrow!';
} else {
this.noSpecialMessage = 'Error fetching daily special. Please try again later.';
}
}
});
}
getDayOfTheWeek(): string {
return new Date().toLocaleDateString('en-US', { weekday: 'long' });
}

}


/*@Component({
  selector: 'app-dailyspecials',
  standalone: true,
  imports: [],
  template: `
    <p>
      daily specials works!
    </p>
  `,
  styles: ``
})
export class DailySpecialsComponent {

}


export class DailySpecialsComponent {
  dayOfTheWeek: string;
  dailySpecial: any = null;
  noSpecialMessage: string = '';

  constructor(private http: HttpClient) {
    this.dayOfTheWeek = 'Monday';
    console.log(this.dayOfTheWeek);
    this.http
      .get(`http://localhost:3000/api/daily-specials?day=Monday`)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.dailySpecial = res;
        },
        error: (err) => {
          console.error('Error fetching daily special', err);
          if (err.error === 'Special not found') {
            this.noSpecialMessage = 'No special today. Check back tomorrow!';
          } else {
            this.noSpecialMessage =
              'Error fetching daily special. Please try again later.';
          }
        },
      });
  }

  getDayOfTheWeek(): string {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    console.log(today);
    return new Date().toLocaleDateString('en-US', { weekday: 'long' });
  }
}
  */
