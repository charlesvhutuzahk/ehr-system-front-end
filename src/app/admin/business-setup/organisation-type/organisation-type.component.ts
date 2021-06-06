import { Component, OnInit } from '@angular/core';
import {OrganisationType} from '../../../models/organisation-type';

@Component({
  selector: 'app-organisation-type',
  templateUrl: './organisation-type.component.html',
  styleUrls: ['./organisation-type.component.css']
})
export class OrganisationTypeComponent implements OnInit {
  organisationTypeList: OrganisationType[] = [
    {code: 'prov', display: 'Healthcare Provider'},
    {code: 'dept', display: 'Hospital Department'},
    {code: 'team', display: 'Organizational team'},
    {code: 'govt', display: 'Government'},
    {code: 'ins', display: 'Insurance Company'},
    {code: 'pay', display: 'Payer'},
    {code: 'edu', display: 'Educational Institute'},
    {code: 'reli', display: 'Religious Institution'},
    {code: 'crs', display: 'Clinical Research Sponsor'},
    {code: 'cg', display: 'Community Group'},
    {code: 'bus', display: 'Non-Healthcare Business or Corporation'},
    {code: 'other', display: 'Other'},
  ];
  newOrganisationType: OrganisationType = new OrganisationType();

  constructor() { }

  ngOnInit(): void {
  }

}
