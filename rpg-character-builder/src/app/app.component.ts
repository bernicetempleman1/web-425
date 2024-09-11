import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="wrapper">
      <header class="banner">
        <img
          src="/assets/RPGCharacterBuilder1.png"
          alt="website banner for RPG Character Builder"
          class="banner-img"
        />
      </header>
      <div class="sign-in-container">
        @if (email) {
        <p>Welcome, {{ email }}!</p>
        <button (click)="signout()">Sign Out</button>
        } @else {
        <a routerLink="/signin" class="sign-in-link">Sign In</a>
        }
      </div>
      <main class="main-content">
        <nav class="navbar">
          <ul>
            <li><a routerLink="/">Home</a></li>
            <li><a href="/players">Players</a></li>
            <li><a href="/signin">Sign In</a></li>
            <li><a href="/create-character">Create Character</a></li>
            <li><a href="/create-guild">Create Guild</a></li>
            <li><a href="/create-faction">Character Faction</a></li>
          </ul>
        </nav>
        <section class="content">
          <router-outlet />
        </section>
      </main>
      <footer class="footer">
        <nav class="footer-nav">
          <a routerLink="/">Home</a> | <a href="/players">Players</a> |
          <a href="/signin">Sign In</a> |
          <a href="/create-character">Create Character</a> |
          <a href="/create-guild">Create Guild</a> |
          <a href="/create-faction">Character Faction</a>
        </nav>
        <p>&copy; 2024 RPG Character Builder</p>
      </footer>
    </div>
  `,
  styles: [
    `
      .sign-in-container {
        text-align: right;
        padding-right: 20px;
        margin-top: 10px;
      }
      .sign-in-link {
        color: #000000;
        text-decoration: none;
        font-family: 'Lato', sans-serif;
      }
      .sign-in-link:hover {
        text-decoration: underline;
      }
    `,
  ],
})
export class AppComponent {
  email?: string;
  constructor(
    private authService: AuthService,
    private cookieService: CookieService
  ) {}
  ngOnInit() {
    this.authService.getAuthState().subscribe((isAuth) => {
      if (isAuth) {
        this.email = this.cookieService.get('session_user');
      }
    });
  }
  signout() {
    this.authService.signout();
    this.email ="";
  }
}
