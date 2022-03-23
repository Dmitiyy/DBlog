import { state, trigger, style, transition, animate } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";

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

  constructor(private db: AngularFireDatabase) {}

  ngOnInit(): void {
    this.test.valueChanges()
      .subscribe(data => {
        console.log(data);
        
      })
  }

  toggleChat() {this.isOpenChat = !this.isOpenChat};
}