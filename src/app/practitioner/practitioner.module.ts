import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PractitionerRoutingModule } from './practitioner-routing.module';
import { PractitionerCodeComponent } from './practitioner-code/practitioner-code.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
// import { UiSwitchModule } from 'ngx-toggle-switch';
import {UiSwitchModule} from 'ngx-ui-switch';


@NgModule({
  declarations: [PractitionerCodeComponent],
  imports: [
    CommonModule,
    PractitionerRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    UiSwitchModule,
  ]
})
export class PractitionerModule { }
