import { state, trigger, style, transition, animate } from "@angular/animations";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { CookieService } from "ngx-cookie-service";

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
  userNames = this.db.list('userNames');
  message: string = '';
  listOfMessages: Messages[] = [];
  @ViewChild('domChat') domChat!: ElementRef<HTMLDivElement>;
  userName: string = this.cookies.get('userName');
  isNameOpen: Boolean = false;

  constructor(private db: AngularFireDatabase, private cookies: CookieService) {}

  ngOnInit() {
    this.test.valueChanges()
      .subscribe((data) => {
        this.listOfMessages.length = 0;
        data.forEach((item: any) => {this.listOfMessages.push(item)});
        if (this.listOfMessages.length !== 0 && this.domChat) {this.scrollToBottom()};
      });
  }

  toggleChat() {
    this.isOpenChat = !this.isOpenChat;
    if (this.isOpenChat) {this.scrollToBottom()};
  };

  onSendMessage() {
    if (this.message.length !== 0 && this.userName.length !== 0) {
      this.test.push({name: this.userName, message: this.message});
      this.message = '';
    }
  }

  scrollToBottom() {
    setTimeout(() => {
      this.domChat!.nativeElement.scrollTop = this.domChat!.nativeElement.scrollHeight;
    });
  }

  toggleName(value: Boolean) {
    if (this.isNameOpen && this.userName.length !== 0) {
      const names = this.userNames.valueChanges();

      names.subscribe(data => {
        const isNameExist = data.includes(this.userName);
        
        if (!isNameExist) {
          this.userNames.push(this.userName);
          this.cookies.set('userName', this.userName, {expires: 30});
        }  
      });
    }
    this.isNameOpen = value;
  };

  findId(index: number, item: any) {return item};
}