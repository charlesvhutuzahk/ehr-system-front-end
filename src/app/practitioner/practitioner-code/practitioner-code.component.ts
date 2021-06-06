import {Component, Input, OnInit} from '@angular/core';
import {PractitionerCode} from '../../models/practitioner/practitioner-code';
import {PractitionerCodeService} from '../../services/practitioner/practitioner-code.service';
import Swal from "sweetalert2";
import {ej} from '@syncfusion/ej2-data/dist/global';
import data = ej.data;

@Component({
  selector: 'app-practitioner-code',
  templateUrl: './practitioner-code.component.html',
  styleUrls: ['./practitioner-code.component.css']
})
export class PractitionerCodeComponent implements OnInit {
  newPractitionerCode: PractitionerCode = new PractitionerCode();
  practitionerCodeList: PractitionerCode[] = [];
  searchTermResultList: any[] = [];
  searchResultsFound: number = 0;
  searchStarted: boolean = false;
  constructor(
    private practitionerCodeService: PractitionerCodeService,
  ) { }

  ngOnInit(): void {
    this.loadPractitionerCodes();
  }
  public createPractitionerCode() {
    if (this.newPractitionerCode.code == null || this.newPractitionerCode.code === '' ) {
      Swal.fire('Validation Error!', 'Please Select Code!', 'error');
      return;
    }
    this.practitionerCodeService.create(this.newPractitionerCode).subscribe(
      data => {
        console.log(data);
        Swal.fire("Success!", 'Practitioner Code Created Successfully', "success");
        this.loadPractitionerCodes();
        this.searchTermResultList = [];
        this.searchStarted = false;
        this.searchResultsFound = 0;
        this.newPractitionerCode = new PractitionerCode();
      },
      error => {
        console.log(error);
        Swal.fire("Create Practioner Code Error!", error.toString(), "error");
      }
    );
  }
  keyup(event) {
    console.log(event);
    // console.log(this.fieldvalue);
  }
  public loadPractitionerCodes() {
    this.practitionerCodeService.get().subscribe(
      data => {
        console.log(data);
        this.practitionerCodeList = data;
      },
      error => {
        console.log(error);
        Swal.fire("Load Practioner Code Error!", error.toString(), "error");
      }
    );
  }
  public getSnomedPractitionerRoles(searchTerm) {
    this.practitionerCodeService.getUrl('snomed/practionerroles?searchTerm=' + searchTerm).subscribe(
      data => {
        console.log(data);
        this.searchStarted = true;
        this.searchTermResultList = data.items;
        console.log(this.searchTermResultList);
        this.searchResultsFound = this.searchTermResultList.length;
      }
    );
  }
  public onCodeChange(code) {
    console.log(code);
    this.newPractitionerCode.code = code.conceptId;
    this.newPractitionerCode.display = code.pt.term;
  }
}
