import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuildListComponent } from './guild-list.component';
import { CommonModule } from '@angular/common';
import { CreateGuildComponent } from '../create-guild/create-guild.component';

describe('GuildListComponent', () => {
  let component: GuildListComponent;
  let fixture: ComponentFixture<GuildListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuildListComponent, CommonModule, CreateGuildComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GuildListComponent);
    component = fixture.componentInstance;

    const mockOrder = {
      // orderId: 999,
      guilds: [
        {  guildName: 'Al Pastor', description: 'Female',  type: ['Competitive'], notification: ['Email'] },
        {  guildName: 'Carnitas', description: 'Female',  type: ['Competitive'], notification: ['Email'] },
      ],
    };

    component.createguild = mockOrder;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Test 2: guilds in the newly created component are displaying correctly.
  it('should display details for each guild in the order', () => {
    component.createguild = {
      guilds: [{ guildName: 'Software Developer', description: 'Develop software', type: ['Competitive'], notification: ['Email'] }],
    };
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(
      'Software Developer'
    );
  });

  //Test 3: should display a message for an empty guild list
  it('should display message for empty guild list', () => {
    component.createguild = { guilds: [] };
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(
      'No guilds have been created yet'
    );
  });
});
