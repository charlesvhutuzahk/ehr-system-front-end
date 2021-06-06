import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ChartModule} from '@syncfusion/ej2-angular-charts';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { RecentActivityComponent } from './recent-activity/recent-activity.component';
import { DoctorAvailabilityComponent } from './doctor-availability/doctor-availability.component';
import {ListViewModule} from '@syncfusion/ej2-angular-lists';
import { CalendarComponent } from './calendar/calendar.component';
import { AddEditDoctorComponent } from './add-edit-doctor/add-edit-doctor.component';
import { AddEditPatientComponent } from './add-edit-patient/add-edit-patient.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';
import { PreferenceComponent } from './preference/preference.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { ScheduleModule, RecurrenceEditorModule } from '@syncfusion/ej2-angular-schedule';
import { DropDownListModule, MultiSelectModule, ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns';
import { CheckBoxModule, ButtonModule, SwitchModule, RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { SplitButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { TreeViewModule, SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ToastModule } from '@syncfusion/ej2-angular-notifications';
import { DatePickerModule, TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { TextBoxModule, MaskedTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { DialogModule } from '@syncfusion/ej2-angular-popups';

@NgModule({
  declarations: [DashboardComponent,
    RecentActivityComponent,
    DoctorAvailabilityComponent,
    CalendarComponent,
    AddEditDoctorComponent,
    AddEditPatientComponent,
    DoctorsComponent,
    PatientsComponent,
    PreferenceComponent,
    DoctorDetailsComponent],
    imports: [
        CommonModule,
        AppointmentRoutingModule,
        ChartModule,
        GridModule,
        ListViewModule,
        DialogModule,
        TextBoxModule,
        DatePickerModule,
        ToastModule,
        TreeViewModule,
        SplitButtonModule,
        CheckBoxModule,
        DropDownListModule,
        ScheduleModule,
        ButtonModule,
        TimePickerModule
    ]
})
export class AppointmentModule { }
