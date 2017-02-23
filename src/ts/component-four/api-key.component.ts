/**
 * Created by Mikhail on 2/20/2017.
 */
import { Component } from '@angular/core';

import { EmailService } from '../email/index';
import { LoggerService } from '../logger/index';

@Component({
  selector: 'api-key',
  template: `<h5>Email Service API Key: <span style="color:red">{{emailService.apiConfig.apiKey}}</span></h5>
	  <h5>Logger Service API Key: <span style="color:red">{{loggerService.apiConfig.apiKey}}</span></h5>
	`
})
export class ApiKeyComponent {
  constructor(public emailService: EmailService, public loggerService: LoggerService) { }
}
