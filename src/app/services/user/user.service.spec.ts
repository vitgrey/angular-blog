import { UserModel } from '../../models/user.model';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { UserService } from './user.service';

describe('UserService', () => {

  let service: UserService;
  let httpMock: HttpTestingController;

  const userFormMock: UserModel = {
    firstName: 'Vitaliy',
    lastName: 'Fedyay',
    email: 'fedyay.vitaliy@gmail.com',
    phone: '0633333333',
    password: '12345678',
    token: 'edfe1dfivofvn3ubru4bubb6767c7df7df'
  };

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [UserService]
  }));

  beforeEach( () => {
    service = TestBed.get(UserService);
    httpMock = TestBed.get(HttpTestingController);
  });


  it('should be created', () => {
    const serviceUser: UserService = TestBed.get(UserService);
    expect(serviceUser).toBeTruthy();
  });

  it('should post the correct data', () => {

    service.register(userFormMock)
      .subscribe((data: any) => {
        expect(data.firstName).toBe('Vitaliy');
      });

    const req = httpMock.expectOne(
      `https://lectorium.herokuapp.com/api/registration`
    );
    expect(req.request.method).toBe('POST');

    req.flush(userFormMock);

    httpMock.verify();
  });
});
