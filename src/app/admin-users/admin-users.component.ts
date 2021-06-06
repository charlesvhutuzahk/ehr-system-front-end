import { Component, OnInit } from '@angular/core';
import {AdminRegistrationService} from '../services/shared/admin-registration.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import Swal from "sweetalert2";

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  organisationAdminList: any[] = [];
  selectedAdminOrganisation: any = null;
  title = 'httpGet Example';
  people: any[];
  person: any;

  constructor(private adminRegistrationService: AdminRegistrationService,
              private http: HttpClient
              ) { }

  ngOnInit(): void {
    this.loadOrganisationAdmins();
  }
  public loadOrganisationAdmins() {
    this.adminRegistrationService.get().subscribe(
      data => {
        this.organisationAdminList = data;
        console.log(data);
      }
    );
  }
  public selectOrganisationAdmin(organisationAdmin) {
    this.selectedAdminOrganisation = organisationAdmin;
  }
}
