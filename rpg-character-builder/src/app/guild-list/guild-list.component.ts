import { Component, Input } from '@angular/core';
import { CreateGuild } from '../create-guild/create-guild.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guild-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="create-guild">
      <h1>Guilds:</h1>

      @if (createguild.guilds.length > 0) {
      <div class="create-guild-container">
        @for(guild of createguild.guilds; track guild) {
        <div class="create-guild-card">
          <h2>Guild Name:</h2>
          <p>{{ guild.guildName }}</p>
          <h3>Description:</h3>
          <p>{{ guild.description }}</p>
          <h3>Type:</h3>
          <p>{{ guild.type }}</p>
          <h3>Notification Preference:</h3>
          <p>{{ guild.notification }}</p>
        </div>
        }
      </div>

      } @else {
      <p>No guilds have been created yet</p>
      }
    </div>
  `,
  styles: [
    `
      .create-guild-form-container {
        display: flex;
        flex-direction: column;
        width: 80%;
        align-items: center;
      }

      .create-guild-form,
      .feedback {
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
    `,
  ],
})
export class GuildListComponent {
  @Input() createguild!: CreateGuild;
}
