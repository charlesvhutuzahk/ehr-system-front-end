import { Injectable } from '@angular/core';
import {EhrSystemService} from '../ehr-system.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminRegistrationService extends EhrSystemService<any> {
  constructor(protected httpClient: HttpClient) {
    super(httpClient, 'admin-registration');
  }
}
