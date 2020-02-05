import { UserModelLogin } from '../../models/user-login.model';
import { AuthenticationService } from './authentication.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CookieService } from 'ngx-cookie-service';

describe('AuthenticationService', () => {

  let service: AuthenticationService;
  let httpMock: HttpTestingController;

  const userFormMock: UserModelLogin = {
    email: 'fedyay.vitaliy@gmail.com',
    password: '12345678'
  };

  const mockUserValue = {
    token: 'eyJhbGciOiJIUzI1NiJ9.dW5kZWZpbmVkXzEyMzQ1Njc4.BXTmYrFd4tIDiE'
  };

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [
      AuthenticationService,
      CookieService
    ]
  }));

  beforeEach(() => {
    service = TestBed.get(AuthenticationService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const authenticationService: AuthenticationService = TestBed.get(AuthenticationService);
    expect(authenticationService).toBeTruthy();
  });

  it('should post the correct data', () => {

    service.login(userFormMock.email, userFormMock.password)
      .subscribe((data: any) => {
        expect(data.email).toBe('fedyay.vitaliy@gmail.com');
        expect(data.password).toBe('12345678');
      });

    const req = httpMock.expectOne(
      `https://lectorium.herokuapp.com/api/login`
    );
    expect(req.request.method).toBe('POST');

    req.flush(userFormMock);

    httpMock.verify();
  });

});
