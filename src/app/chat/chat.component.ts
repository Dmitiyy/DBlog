import { state, trigger, style, transition, animate } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";

interface Messages {name: string; message: string};

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.sass'],
  animations: [
    trigger('openChat', [
      state('open', style({height: '550px'})),
      state('closed', style({height: '50px'})),
      transition('open <=> closed', [animate(300)])
    ])
  ]
})
export class ChatComponent implements OnInit {
  isOpenChat: Boolean = false;
  test = this.db.list('tests');
  message: string = '';
  listOfMessages: Messages[] = [];

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {
    this.test.valueChanges()
      .subscribe((data) => {
        this.listOfMessages.length = 0;
        data.forEach((item: any) => {this.listOfMessages.push(item)});
      });
  }

  toggleChat() {this.isOpenChat = !this.isOpenChat};

  onSendMessage() {
    if (this.message.length !== 0) {
      this.test.push({name: 'Daptellum', message: this.message});
    }
  }

  findId(index: number, item: any) {return item};
}