import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LandingPageComponent} from './website/landing-page/landing-page.component';
import { AlertComponent } from './components/alert/alert.component';
import {HomeComponent} from './home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ErrorInterceptor} from './helpers/error.interceptor';
import {JwtInterceptor} from './helpers/jwt.interceptor';
import {fakeBackendProvider} from './helpers/fake-backend';
import {ServicesPageComponent} from './website/services-page/services-page.component';
import { KitchenComponent } from './home/kitchen/kitchen.component';
import { DepartmentsComponent } from './website/departments/departments.component';
import { RegisterOrganisationComponent } from './organisations/register-organisation/register-organisation.component';
import { OrganisationsComponent } from './organisations/organisations.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AlertComponent,
    HomeComponent,
    ServicesPageComponent,
    KitchenComponent,
    DepartmentsComponent,
    RegisterOrganisationComponent,
    OrganisationsComponent,
    AdminUsersComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
