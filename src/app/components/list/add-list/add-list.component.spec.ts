import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { AddListComponent } from './add-list.component';

describe('AddListComponent', () => {
  let component: AddListComponent;
  let fixture: ComponentFixture<AddListComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule],
      declarations: [AddListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddListComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('div'));
    el = de.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain "Add"', () => {
    const infoMessageEl: HTMLElement = fixture.nativeElement;
    const button = infoMessageEl.querySelector('button');
    expect(button.textContent).toContain('Add');
  });

  it('should call method addInput', () => {
    fixture.detectChanges();
    spyOn<any>(component, 'addInput');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.addInput).toHaveBeenCalledTimes(1);
  });

});
