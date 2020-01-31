import { MessageService } from './../../../services/message/message.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss']
})
export class AddListComponent {

  public inputValue: string;

  constructor(private messageService: MessageService) { }

  public addInput(newInput: string) {
    if (newInput) {
      this.messageService.sendMessage(newInput);
      console.log(newInput);
    }
  }

}
