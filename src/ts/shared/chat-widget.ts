/**
 * Created by Mikhail on 2/19/2017.
 */
import { Injectable } from '@angular/core';
import { AuthService } from './auth-service';
import { AuthWidget } from './auth-widget';
import { ChatSocket } from './chat-socket';

@Injectable()
export class ChatWidget {
  constructor(
    public authService: AuthService,
    public authWidget: AuthWidget,
    public chatSocket: ChatSocket) { }
}
