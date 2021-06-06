import { Component, OnInit } from '@angular/core';
import {OrganisationService} from '../services/shared/organisation.service';
import {Organisation} from '../models/organisation';
import Swal from "sweetalert2";
import {OrganisationAdminUser} from '../models/organisation-admin-user';
import {AdminRegistrationService} from '../services/shared/admin-registration.service';

@Component({
  selector: 'app-organisations',
  templateUrl: './organisations.component.html',
  styleUrls: ['./organisations.component.css']
})
export class OrganisationsComponent implements OnInit {
  organisationList: any[] = [];
  organisation: Organisation = new Organisation();
  selectedOrganisation: Organisation = new Organisation();
  newOrganisation: Organisation = new Organisation();
  newOrganisationAdminUser: OrganisationAdminUser = new OrganisationAdminUser();
  constructor(    private organisationService: OrganisationService,
                  private adminRegistrationService: AdminRegistrationService
  ) { }

  ngOnInit(): void {
    this.loadAllOrganisations();
  }
  public loadAllOrganisations() {
    this.organisationService.get().subscribe(
      data => {
        this.organisationList = data;
        console.log(data);
      }
    );
  }
  public selectOrganisation(organisation) {
    this.organisationService.getById(organisation.id).subscribe(
      data => {
        console.log(data);
        this.selectedOrganisation = data;
      },
      error => {
        console.log(error);
        Swal.fire("Get Error!", error.toString(), "error");
      }
    );
  }
  public activateOrganisation() {
    this.organisationService.activateOrganisationUrl('activate' + '/' + this.selectedOrganisation.id).subscribe(
      data => {
        console.log(data);
        Swal.fire("Well done!", "Organisation activated successfully!", "success");
        this.loadAllOrganisations();
      },
      error => {
        console.log(error);
        Swal.fire("Activation Error!", error.toString(), "error");
      }
    );
  }
  public createOrganisation() {
    console.log(this.newOrganisation);
    this.organisationService.create(this.newOrganisation).subscribe(
      data => {
        console.log(data);
        Swal.fire("Well done!", "Organisation created successfully!", "success");
        this.newOrganisation = new Organisation();
        this.loadAllOrganisations();
      },
      error => {
        console.log(error);
        Swal.fire("Save Error!", error.toString(), "error");
      }
    );
  }

  public createOrganisationAdmin() {
    console.log(this.newOrganisationAdminUser);
    this.adminRegistrationService.postUrlWithParams(this.newOrganisationAdminUser, this.selectedOrganisation.tenantId, 'add-admin').subscribe(
      response => {
        console.log(response);
        Swal.fire("Well done!", "Admin user created successfully!", "success");
        this.newOrganisationAdminUser = new OrganisationAdminUser();
      },
      error => {
        console.log(error);
        Swal.fire("Error!", error.toString(), "error");
      }
    );
  }
}
