import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BusinessSetupDashboardComponent} from './business-setup/business-setup-dashboard/business-setup-dashboard.component';
import {BusinessComponent} from './business-setup/business/business.component';
import {HumanName} from '../models/human-name';
import {Identifier} from '../models/identifier';
import {OrganisationTypeComponent} from './business-setup/organisation-type/organisation-type.component';
import {AddressComponent} from './business-setup/address/address.component';
import {HumanNameComponent} from './business-setup/human-name/human-name.component';
import {IdentifierComponent} from './business-setup/identifier/identifier.component';
import {PurposeComponent} from './business-setup/purpose/purpose.component';
import {SystemComponent} from './business-setup/system/system.component';

const routes: Routes = [
  {
    path: 'business-setup-dashboard',
    component: BusinessSetupDashboardComponent,
  },
  {
    path: 'business',
    component: BusinessComponent,
  },
  {
    path: 'address',
    component: AddressComponent,
  },
  {
    path: 'human-name',
    component: HumanNameComponent,
  },
  {
    path: 'identifier',
    component: IdentifierComponent,
  },
  {
    path: 'organisation-type',
    component: OrganisationTypeComponent
  },
  {
    path: 'purpose',
    component: PurposeComponent,
  },
  {
    path: 'system',
    component: SystemComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
