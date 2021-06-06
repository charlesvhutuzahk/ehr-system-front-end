import { Component, OnInit } from '@angular/core';
import {Use} from '../../../models/use';
import {IdentifierUse} from '../../../models/identifier-use';
import {IdentifierType} from '../../../models/identifier-type';
import {Identifier} from '../../../models/identifier';
import {Period} from '../../../models/period';

@Component({
  selector: 'app-identifier',
  templateUrl: './identifier.component.html',
  styleUrls: ['./identifier.component.css']
})
export class IdentifierComponent implements OnInit {
  newIdentifierUse: IdentifierUse = new IdentifierUse();
  identifierUseList: IdentifierUse[] = [
    {code: 'usual', definition: 'The identifier recommended for display and use in real-world interactions.', display: 'Usual'},
    {code: 'official', definition: 'The identifier considered to be most trusted for the identification of this item. Sometimes also known as "primary" and "main". The determination of "official" is subjective and implementation guides often provide additional guidelines for use.', display: 'Official'},
    {code: 'temp', definition: 'A temporary identifier.', display: 'Temp'},
    {code: 'secondary', definition: 'An identifier that was assigned in secondary use - it serves to identify the object in a relative context, but cannot be consistently assigned to the same object again in a different context.', display: 'Secondary'},
    {code: 'old', definition: 'The identifier id no longer considered valid, but may be relevant for search purposes. E.g. Changes to identifier schemes, account merges, etc.', display: 'Old'},
  ];
  newIdentifierType: IdentifierType = new IdentifierType();
  identifierTypeList: IdentifierType[] = [
    {code: 'DL', display: "Driver's license number"},
    {code: 'PPN', display: "Passport number"},
    {code: 'BRN', display: "Breed Registry Number"},
    {code: 'MR', display: "Medical record number"},
    {code: 'MCN', display: "Microchip Number"},
    {code: 'EN', display: "Employer number"},
    {code: 'TAX', display: "Tax ID number"},
    {code: 'NIIP', display: "National Insurance Payor Identifier (Payor)"},
    {code: 'PRN', display: "Provider number"},
    {code: 'MD', display: "Medical License number"},
    {code: 'DR', display: "Donor Registration Number"},
    {code: 'ACSN', display: "Accession ID"},
    {code: 'UDI', display: "Universal Device Identifier"},
    {code: 'SNO', display: "Serial Number"},
    {code: 'SB', display: "Social Beneficiary Identifier"},
    {code: 'PLAC', display: "Placer Identifier"},
    {code: 'FILL', display: "Filler Identifier"},
    {code: 'JHN', display: "Jurisdictional health number (Canada)"},
  ];
  newIdentifier: Identifier = new Identifier();
  identifierList: Identifier[] = [];
  newIdentifierPeriod: Period = new Period();

  constructor() { }

  ngOnInit(): void {
  }
  public onTypeCodeChange(code) {
    console.log(code);
  }
  public onUseCodeChange(code) {
    console.log(code);
  }

}
