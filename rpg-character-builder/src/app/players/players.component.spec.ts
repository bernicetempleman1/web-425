import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersComponent } from './players.component';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Created by default when the component is generated
   * Unit test 1
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  /**
   * Unit test 2
   */
  it('should correctly display a list of players', () => {
    const compiled = fixture.nativeElement as HTMLElement; // Get the compiled HTML of the component
    const playersItems = compiled.querySelectorAll('.players-item'); // Get all the player items
    expect(playersItems.length).toEqual(component.players.length); // Check if the number of player items is equal to the number of items in the player array
  });
});
