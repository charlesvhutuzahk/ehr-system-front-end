import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CalendarComponent} from './calendar/calendar.component';
import {DoctorsComponent} from './doctors/doctors.component';
import {PatientsComponent} from './patients/patients.component';
import {PreferenceComponent} from './preference/preference.component';
import {DoctorDetailsComponent} from './doctor-details/doctor-details.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  { path: 'calendar', component: CalendarComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'doctor-details/:id', component: DoctorDetailsComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'preference', component: PreferenceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentRoutingModule { }
