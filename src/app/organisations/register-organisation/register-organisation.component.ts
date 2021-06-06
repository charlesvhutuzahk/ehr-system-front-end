import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {Organisation} from '../../models/organisation';
import {OrganisationService} from '../../services/shared/organisation.service';

@Component({
  selector: 'app-register-organisation',
  templateUrl: './register-organisation.component.html',
  styleUrls: ['./register-organisation.component.css']
})
export class RegisterOrganisationComponent implements OnInit {
  public newOrganisation: Organisation = new Organisation();

  constructor(
    private organisationService: OrganisationService,
  ) { }

  ngOnInit(): void {
    this.organisationService.get().subscribe(
      data => {
        console.log(data);
      }
    );
  }
  public createOrganisation() {
    console.log(this.newOrganisation);
    this.organisationService.create(this.newOrganisation).subscribe(
      data => {
        console.log(data);
        Swal.fire("Well done!", "Request sent successfully!", "success");
        this.newOrganisation = new Organisation();
      },
      error => {
        console.log(error);
        Swal.fire("Save Error!", error.toString(), "error");
      }
    );
  }
}
