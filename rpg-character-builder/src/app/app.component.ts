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
            <li><a href="#">Players</a></li>
            <li><a href="#">Sign In</a></li>
            <li><a href="#">Create Character</a></li>
            <li><a href="#">Create Guild</a></li>
            <li><a href="#">Character Faction</a></li>
          </ul>
        </nav>
        <section class="content">
          <router-outlet />
        </section>
      </main>
      <footer class="footer">
        <nav class="footer-nav">
          <a routerLink="/">Home</a> | <a href="#">Players</a> |
          <a href="#">Sign In</a> | <a href="#">Create Character</a> |
          <a href="#">Create Guild</a> | <a href="#">Character Faction</a>
        </nav>
        <p>&copy; 2024 RPG Character Builder</p>
      </footer>
    </div>
  `,
  styles: [``],
})
export class AppComponent {}
