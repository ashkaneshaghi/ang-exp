import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MessageService {

    private apiUrl: string = 'http://localhost:3000';

    constructor(
        private http: HttpClient
    ) { }

    getMessage(): Observable<Message> {
        return this.http.get<Message>(this.apiUrl + '/message');
    }

    getMessages(): Observable<Message[]> {
        return this.http.get<Message[]>(this.apiUrl + '/messages');
    }
}
