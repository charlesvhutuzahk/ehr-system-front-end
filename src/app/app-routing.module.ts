import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './helpers/auth.guard';
import {LandingPageComponent} from './website/landing-page/landing-page.component';
import {ServicesPageComponent} from './website/services-page/services-page.component';
import {LoginComponent} from './account/login/login.component';
import {RegisterComponent} from './account/register/register.component';
import {KitchenComponent} from './home/kitchen/kitchen.component';
import {DepartmentsComponent} from './website/departments/departments.component';
import {RegisterOrganisationComponent} from './organisations/register-organisation/register-organisation.component';
import {OrganisationsComponent} from './organisations/organisations.component';
import {AdminUsersComponent} from './admin-users/admin-users.component';
import {AdminDashboardComponent} from './admin/admin-dashboard/admin-dashboard.component';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);
const appointmentsModule = () => import('./appointment/appointment.module').then(x => x.AppointmentModule);
const practitionerModule = () => import('./practitioner/practitioner.module').then(x => x.PractitionerModule);
const adminModule = () => import('./admin/admin.module').then(x => x.AdminModule);

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  { path: '', component: HomeComponent,
    canActivate: [AuthGuard] },
  { path: 'kitchen', component: KitchenComponent, canActivate: [AuthGuard]},
  { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
  { path: 'account', loadChildren: accountModule},
  { path: 'practitioner', loadChildren: practitionerModule},
  { path: 'admin', loadChildren: adminModule, canActivate: [AuthGuard] },
  {
    path: 'services',
    component: ServicesPageComponent,
  },
  {
    path: 'departments',
    component: DepartmentsComponent,
  },
  {
    path: 'register-organisation',
    component: RegisterOrganisationComponent,
  },
  {
    path: 'organisations',
    component: OrganisationsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin-users',
    component: AdminUsersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/dashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard]
  },
  { path: 'appointments', loadChildren: appointmentsModule,
    canActivate: [AuthGuard]
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
