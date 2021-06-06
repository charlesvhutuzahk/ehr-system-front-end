import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PractitionerCodeComponent} from './practitioner-code/practitioner-code.component';

const routes: Routes = [
  {
    path: 'practitioner-code',
    component: PractitionerCodeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PractitionerRoutingModule { }
