/**
 * Created by Mikhail on 2/20/2017.
 */
import { Injectable, Inject, OpaqueToken } from '@angular/core';

import { EmailConfig } from './email.config';

export const apiConfig = new OpaqueToken('api-config');

@Injectable()
export class EmailService {
  constructor(@Inject(apiConfig) public apiConfig: EmailConfig) { }
}
