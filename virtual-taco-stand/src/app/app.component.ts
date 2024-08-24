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
          src="/assets/VirtualTacoStand.png"
          alt="website banner for virtual
taco stand"
          class="banner-img"
        />
      </header>
      <main class="main-content">
        <nav class="navbar">
          <ul>
            <li><a routerLink="/">Home</a></li>
            <li><a routerLink="/menu">Menu</a></li>
            <li><a routerLink="/order">Order</a></li>
            <li><a routerLink="/daily-specials">Daily Specials</a></li>
            <li><a routerLink="/feedback">Feedback</a></li>
          </ul>
        </nav>
        <section class="content">
          <router-outlet />
        </section>
      </main>
      <footer class="footer">
        <nav class="footer-nav">
          <a routerLink="/">Home</a> | <a routerLink="/menu">Menu</a> |
          <a routerLink="/order">Order</a> |
          <a routerLink="/daily-specials">Daily Specials</a> |
          <a routerLink="/feedback">Feedback</a>
        </nav>
        <p>&copy; 2024 Virtual Taco Stand</p>
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
export class AppComponent {}