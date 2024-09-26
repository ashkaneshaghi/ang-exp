import { Component, OnInit } from '@angular/core';
import { MessageService } from './middleware/message.service';
import { Message } from './models/message';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
    title = 'Welcome to Angular with Express JS';
    messages: Message[] = [];
    //message!: Message;

    constructor(
        private messageService: MessageService
    ) { }

    ngOnInit(): void {
        /*
        this.messageService.getMessage().subscribe(data => {
            if (data) {
                this.message = data;
            }
        });
        */
        this.messageService.getMessages().subscribe(data => {
            console.log('THIS IS THE LIST MESSAGES: ' + JSON.stringify(data));
            this.messages = data;
        });
    }
}
