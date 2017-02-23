/**
 * Created by Mikhail on 2/20/2017.
 */
import { NgModule } from '@angular/core';

import { EmailService } from './email.service';

@NgModule({
  providers: [ EmailService ],
})
export class EmailModule { }
