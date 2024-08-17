import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h1>RPG Character Builder</h1>
      <h2>The RPG Character Builder creates an immersive web application that caters to gamers and RPG enthusiasts.!</h2>
      <p>
        The rpg-character-builder application was inspired by the love of video
        games and a desire to create a platform where users can manage their own collection of
        characters. Whether you are an avid gamer, RPG enthusiast, or simply someone looking to
        practice your Angular skills, rpg-character-builder is designed to cater to your needs.
        We are creating an immersive web application that caters to gamers and RPG enthusiasts.
        The focus here is on engagement, character customization, and interactive storytelling.
      </p>
      <p>
        Need a RPG? We customize! We will be happy to help you with your customizarion needs.
        Create your character.
        Build your character, guild, and faction.

      </p>
      <div class="highlights-container">
        <div class="highlight">
          <img
            src="/assets/Map.png"
            alt="image of evergreen trees"
          />
          <p>
            Discover your journey to your house and character.
            Enjoy your lifelong journey.
            Continue building your character.
            Build your strengths and super powers.
            Keep growing and learning.
            Practice gratitude and be kind.
          </p>
        </div>
        <div class="highlight">
          <img
            src="/assets/House.png"
            alt="image of a house"
          />
          <!-- -->
          <p>
            Welcome to our vibrant RPG Character Builder.
            Who is your RPG character? What is their guild and faction?
            What are their super powers?
            Create your character.
            Then, continue to build your character, guild, and faction.
            Continue updating and building your character along your journey.
            Login, check out the site, and enjoy your journey!
          </p>
        </div>
        <div class="highlight">
          <img
            src="/assets/Bernice.jpg"
            alt="image of Bernice"
          />
          <p>
          Bernice works on building her real life character each day.
          She also works fulltime and goes to school fulltime.
          Although she is not a gamer, she does enjoy practicing her Angular skills.
          If she were to pick a character, she would be a female mage with superpowers.
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .highlights-container {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 20px;
      }
      .highlight {
        text-align: center;
        flex: 0 1 calc(33.333% - 20px);
        box-sizing: border-box;
      }
      .highlight img {
        max-width: 100%;
        height: auto;
        object-fit: cover;
      }
      .highlight p {
        margin-top: 10px;
      }
    `,
  ],
})
export class HomeComponent {}
