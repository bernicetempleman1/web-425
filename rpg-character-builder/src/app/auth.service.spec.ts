import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { CookieService } from 'ngx-cookie-service';

describe('AuthService', () => {
  let service: AuthService;
  let cookieServiceSpy: jasmine.SpyObj<CookieService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('CookieService', ['set', 'deleteAll']);
    TestBed.configureTestingModule({
      providers: [AuthService, { provide: CookieService, useValue: spy }],
    });
    service = TestBed.inject(AuthService);
    cookieServiceSpy = TestBed.inject(
      CookieService
    ) as jasmine.SpyObj<CookieService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //Test 1: Should set cookie and authState to true on successful sign in.
  it('should set cookie and authState to true on successful signin', () => {
    const result = service.signin('wizardlywand@hogwarts.com', 'Alohomora123');
    expect(result).toBeTrue();
    expect(
      service.getAuthState().subscribe((state) => expect(state).toBeTrue())
    );
    expect(cookieServiceSpy.set.calls.count()).toBe(1);
  });

  // Test 2: Should not set cookie and authState to true on unsuccessful sign in
  it('should not set cookie and authState to true on unsuccessful signin', () => {
    const result = service.signin('wrongemail@hogwarts.com', 'wrongpassword');
    expect(result).toBeFalse();
    expect(
      service.getAuthState().subscribe((state) => expect(state).toBeFalse())
    );
    expect(cookieServiceSpy.set.calls.count()).toBe(0);
  });
});
