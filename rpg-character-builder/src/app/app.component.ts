import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

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
          <a href="/signin">Sign In</a> | <a href="/create-character">Create Character</a> |
          <a href="/create-guild">Create Guild</a> | <a href="/create-faction">Character Faction</a>
        </nav>
        <p>&copy; 2024 RPG Character Builder</p>
      </footer>
    </div>
  `,
  styles: [``],
})
export class AppComponent {}
