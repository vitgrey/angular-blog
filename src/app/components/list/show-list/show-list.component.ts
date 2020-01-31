import { MessageService } from './../../../services/message/message.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LIST } from './show-list-data';

@Component({
  selector: 'app-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements OnDestroy, OnInit {

  public list: any[] = [];
  public defaultItems = LIST;
  public subscription: Subscription;

  ngOnInit() {
    this.list.push(this.defaultItems);
  }

  constructor(private messageService: MessageService) {
    this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message) {
        this.list.push(message);
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
