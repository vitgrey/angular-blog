import { MessageService } from './../../../services/message/message.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss']
})
export class AddListComponent {

  constructor(private messageService: MessageService) { }

  public addInput(inputValue: string): void {
    if (inputValue) {
      this.messageService.sendMessage(inputValue);
    }
  }

}
