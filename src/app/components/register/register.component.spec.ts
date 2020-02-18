import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CookieService } from 'ngx-cookie-service';
import { BrowserModule, By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule,
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
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call submit method', () => {
    fixture.detectChanges();
    spyOn<any>(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  });

  it('form invalid', () => {
    component.form.formGroup.controls.firstName.setValue('');
    component.form.formGroup.controls.lastName.setValue('');
    component.form.formGroup.controls.email.setValue('');
    component.form.formGroup.controls.phone.setValue('');
    component.form.formGroup.controls.password.setValue('');
    expect(component.form.formGroup.valid).toBeFalsy();
  });

  it('form valid', () => {
    component.form.formGroup.controls.firstName.setValue('Tests');
    component.form.formGroup.controls.lastName.setValue('Tests');
    component.form.formGroup.controls.email.setValue('test@test.com');
    component.form.formGroup.controls.phone.setValue('0631234567');
    component.form.formGroup.controls.password.setValue('12345678');
    expect(component.form.formGroup.valid).toBeTruthy();
  });
});
