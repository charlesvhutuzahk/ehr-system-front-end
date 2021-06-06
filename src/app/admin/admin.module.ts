import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { BusinessSetupDashboardComponent } from './business-setup/business-setup-dashboard/business-setup-dashboard.component';
import { BusinessComponent } from './business-setup/business/business.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddressComponent } from './business-setup/address/address.component';
import { HumanNameComponent } from './business-setup/human-name/human-name.component';
import { IdentifierComponent } from './business-setup/identifier/identifier.component';
import { OrganisationTypeComponent } from './business-setup/organisation-type/organisation-type.component';
import { SystemComponent } from './business-setup/system/system.component';
import { PurposeComponent } from './business-setup/purpose/purpose.component';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
  declarations: [BusinessSetupDashboardComponent,
    BusinessComponent,
    AddressComponent,
    HumanNameComponent,
    IdentifierComponent,
    OrganisationTypeComponent,
    SystemComponent,
    PurposeComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        NgSelectModule,
    ]
})
export class AdminModule { }
