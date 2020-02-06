import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MessageService } from './../../../services/message/message.service';
import { ShowListComponent } from './show-list.component';

describe('ShowListComponent', () => {
  let component: ShowListComponent;
  let fixture: ComponentFixture<ShowListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [MessageService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain list', () => {
    component.list = [
      {
        text: 'one'
      },
      {
        text: 'two'
      }
    ];
    fixture.detectChanges();
    const listItems = document.getElementsByClassName('list-item');
    expect(listItems.length).toBe(2);
  });
});
