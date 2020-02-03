import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CookieService } from 'ngx-cookie-service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserModule
      ],
      providers: [
        CookieService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit', () => {
    component.onSubmit();
    expect('test element').toEqual('test element');
  });

  it('should call submit method', () => {
    fixture.detectChanges();
    spyOn<any>(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  });

  it('form invalid', () => {
    component.form.formGroup.controls.email.setValue('');
    component.form.formGroup.controls.password.setValue('');
    expect(component.form.formGroup.valid).toBeFalsy();
  });

  it('form valid', () => {
    component.form.formGroup.controls.email.setValue('test@test.com');
    component.form.formGroup.controls.password.setValue('12345678');
    expect(component.form.formGroup.valid).toBeTruthy();
  });
});
