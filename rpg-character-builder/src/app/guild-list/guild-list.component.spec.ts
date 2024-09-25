/*
Write unit tests to verify the functionality of the input/output properties. You should
write the tests before you implement the components functionality, following TDD
principles. You may choose three test cases of your own, but they must test the new
components functionality. For suggestions, consider the following:
e. Test 1 (suggestion): characters in the newly created component are
displaying correctly.
f. Test 2 (suggestion): guilds in the newly created component are displaying
correctly.
g. Test 3 (suggestion): should display a message for an empty guild list.
h. Test 4 (suggestion): should display a message for an empty character list.
*/


import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuildListComponent } from './guild-list.component';
import { CommonModule } from '@angular/common';
import { CreateGuildComponent } from '../create-guild/create-guild.component';

describe('GuildListComponent', () => {
  let component: GuildListComponent;
  let fixture: ComponentFixture<GuildListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuildListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuildListComponent);
    component = fixture.componentInstance;

   /*
    const mockGuild = {
      orderId: 999,
      tacos: [
        { id: 3, name: 'Al Pastor', price: 2.5, quantity: 2 },
        { id: 1, name: 'Carnitas', price: 3, quantity: 1, noOnions: true },
      ],
    };
    component.create-guild = mockGuild;
    */

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/*
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderSummaryComponent } from './order-summary.component';
import { CommonModule } from '@angular/common';
import { Order } from '../order/order.component';


describe('OrderSummaryComponent', () => {
  let component: OrderSummaryComponent;
  let fixture: ComponentFixture<OrderSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderSummaryComponent, CommonModule, OrderSummaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderSummaryComponent);
    component = fixture.componentInstance;


    const mockOrder = {
      orderId: 999,
      tacos: [
        { id: 3, name: 'Al Pastor', price: 2.5, quantity: 2 },
        { id: 1, name: 'Carnitas', price: 3, quantity: 1, noOnions: true },
      ],
    };
    component.order = mockOrder;

    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should calculate total price correctly', () => {
    const mockOrder: Order = {
      orderId: 1000,
      tacos: [
        { id: 1, name: 'Carnitas', price: 3, quantity: 2 },
        { id: 3, name: 'Al Pastor', price: 2.5, quantity: 1 },
      ],
    };
    component.order = mockOrder;
    expect(component.getTotal()).toEqual(8.5);
  });
  it('should display message for empty order', () => {
    component.order = { orderId: 1001, tacos: [] };
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(
      'No tacos added to the order yet.'
    );
  });
  it('should display details for each taco in the order', () => {
    const mockOrder: Order = {
      orderId: 1002,
      tacos: [
        { id: 1, name: 'Carnitas', price: 3, quantity: 2 },
        { id: 3, name: 'Al Pastor', price: 2.5, quantity: 1 },
      ],
    };
    component.order = mockOrder;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('li').textContent).toContain('2x Carnitas');
    expect(compiled.querySelector('li').textContent).toContain(
      'Price per taco: $3.00'
    );
  });
});


*/
