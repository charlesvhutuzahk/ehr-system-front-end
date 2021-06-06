import { Component, OnInit } from '@angular/core';
import {Business} from '../../../models/business';
import {AddressType} from '../../../models/address-type';
import {AddressUse} from '../../../models/address-use';
import {Address} from '../../../models/address';
import {Period} from '../../../models/period';
import {Contact} from '../../../models/contact';
import {IdentifierType} from '../../../models/identifier-type';
import {Identifier} from '../../../models/identifier';
import {OrganisationType} from '../../../models/organisation-type';
import {Telecom} from '../../../models/telecom';
import {System} from '../../../models/system';
import {NameUse} from '../../../models/name-use';
import {IdentifierUse} from '../../../models/identifier-use';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  newBusiness: Business = new Business();
  addressTypes: AddressType[] = [];
  addressUses: AddressUse[] = [];
  newAddress: Address = new Address();
  newAddressPeriod: Period = new Period();
  addressType: AddressType;
  addressUse: AddressUse;
  newContactAddress: Address = new Address();
  newContactAddressPeriod: Period = new Period();
  newContact: Contact = new Contact();
  businessAddressIsContactAddress: boolean = false;
  newIdentifierType: IdentifierType = new IdentifierType();
  newIdentifierPeriod: Period = new Period();
  newIdentifier: Identifier = new Identifier();
  newOrganisationType: OrganisationType = new OrganisationType();
  newTelecom: Telecom = new Telecom();
  newTelecomPeriod: Period = new Period();
  newTelecomSystem: System = new System();
  addressUseList: AddressUse [] = [{code: 'home', definition: 'A communication address at a home.', display: 'Home'},
    {code: 'work', definition: 'An office address. First choice for business related contacts during business hours.', display: 'Work'},
    {code: 'temp', definition: 'A temporary address. The period can provide more detailed information.', display: 'Temporary'},
    {code: 'old', definition: 'This address is no longer in use (or was never correct but retained for records).', display: 'Old / Incorrect'},
    {code: 'billing', definition: 'A temporary address. The period can provide more detailed information.', display: 'Billing'},
  ];
  addressTypeList: AddressType [] = [{code: 'postal', definition: 'Mailing addresses - PO Boxes and care-of addresses.', display: 'Postal'},
    {code: 'physical', definition: 'A physical address that can be visited.', display: 'Physical'},
    {code: 'both', definition: 'An address that is both physical and postal.', display: 'Postal & Physical'},
  ];
  nameUseList: NameUse[] = [{level: 0, code: 'usual', display: 'Usual', definition: 'Known as/conventional/the one you normally use.'},
    {level: 0, code: 'official', display: 'Official', definition: 'The formal name as registered in an official (government) registry, but which name might not be commonly used. May be called "legal name".'},
    {level: 0, code: 'temp', display: 'Temp', definition: 'A temporary name. Name.period can provide more detailed information. This may also be used for temporary names assigned at birth or in emergency situations.'},
    {level: 0, code: 'nickname', display: 'Nickname', definition: 'A name that is used to address the person in an informal manner, but is not part of their formal or usual name.'},
    {level: 0, code: 'anonymous', display: 'Anonymous', definition: 'Anonymous assigned name, alias, or pseudonym (used to protect a person identity for privacy reasons).'},
    {level: 0, code: 'old', display: 'Old', definition: 'This name is no longer in use (or was never correct, but retained for records).'},
    {level: 1, code: 'maiden', display: 'Name changed for Marriage', definition: 'A name used prior to changing name because of marriage. This name use is for use by applications that collect and store names that were used prior to a marriage. Marriage naming customs vary greatly around the world,' +
        ' and are constantly changing. This term is not gender specific. The use of this term does not imply any particular history for a person name.'},
  ];
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
  identifierUseList: IdentifierUse[] = [
    {code: 'usual', definition: 'The identifier recommended for display and use in real-world interactions.', display: 'Usual'},
    {code: 'official', definition: 'The identifier considered to be most trusted for the identification of this item. Sometimes also known as "primary" and "main". The determination of "official" is subjective and implementation guides often provide additional guidelines for use.', display: 'Official'},
    {code: 'temp', definition: 'A temporary identifier.', display: 'Temp'},
    {code: 'secondary', definition: 'An identifier that was assigned in secondary use - it serves to identify the object in a relative context, but cannot be consistently assigned to the same object again in a different context.', display: 'Secondary'},
    {code: 'old', definition: 'The identifier id no longer considered valid, but may be relevant for search purposes. E.g. Changes to identifier schemes, account merges, etc.', display: 'Old'},
  ];
  constructor() { }

  ngOnInit(): void {
    this.newBusiness.active = true;
    console.log(this.newBusiness.active);
  }
  public toggleBusinessStatus(status){
    this.newBusiness.active = status.target.checked;
    console.log(this.newBusiness.active);
  }
  public toggleContactAddress(status) {
    console.log(status.target.checked);
    this.businessAddressIsContactAddress = status.target.checked;
    console.log(this.newAddress);
    if (this.businessAddressIsContactAddress === true) {
      this.newContactAddress = this.newAddress;
      this.newContactAddressPeriod = this.newAddressPeriod;
    } else if (this.businessAddressIsContactAddress === false) {
      this.newContactAddress = new Address();
    }
  }
  public createOrganisation() {
    this.newAddress.period = this.newAddressPeriod;
    this.newBusiness.address = this.newAddress;
    this.newContactAddress.period = this.newContactAddressPeriod;
    this.newContact.address = this.newContactAddress;
    this.newBusiness.contact = this.newContact;
    this.newIdentifier.period = this.newIdentifierPeriod;
    this.newIdentifier.identifierType = this.newIdentifierType;
    this.newBusiness.identifier = this.newIdentifier;
    this.newBusiness.organisationType = this.newOrganisationType;
    this.newTelecom.period = this.newTelecomPeriod;
    this.newTelecom.system = this.newTelecomSystem;
    this.newBusiness.telecom = this.newTelecom;
    console.log(this.newBusiness);
  }
  public onOrganisationAddressCodeChange(code) {
    console.log(code);
  }
  public onOrganisationAddressUseCodeChange(code) {
    console.log(code);
  }
}
