import { Injectable } from '@angular/core';
import {EhrSystemService} from '../ehr-system.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PractitionerCodeService extends EhrSystemService<any> {
  constructor(protected httpClient: HttpClient) {
    super(httpClient, 'practioner-code');
  }
}
