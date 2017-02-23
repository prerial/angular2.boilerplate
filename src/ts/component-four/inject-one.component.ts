/**
 * Created by Mikhail on 2/19/2017.
 */
//import { Component } from '@angular/core';
import { Component, Inject } from '@angular/core';
import { ChatWidget } from '../shared/chat-widget';

@Component({
  selector: 'app-inject',
  template: `Encryption: {{ encryption }}`
})
export class InjectOneComponent {
  encryption = this.chatWidget.chatSocket.encryption;

  constructor(@Inject(ChatWidget) private chatWidget:any) { }
}
