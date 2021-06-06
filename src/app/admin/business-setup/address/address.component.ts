import { Component, OnInit } from '@angular/core';
import {AddressType} from '../../../models/address-type';
import {AddressUse} from '../../../models/address-use';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  newAddressType: AddressType = new AddressType();
  addressTypeList: AddressType [] = [{code: 'postal', definition: 'Mailing addresses - PO Boxes and care-of addresses.', display: 'Postal'},
    {code: 'physical', definition: 'A physical address that can be visited.', display: 'Physical'},
    {code: 'both', definition: 'An address that is both physical and postal.', display: 'Postal & Physical'},
  ];
  newAddressUse: AddressUse = new AddressUse();
  addressUseList: AddressUse [] = [{code: 'home', definition: 'A communication address at a home.', display: 'Home'},
    {code: 'work', definition: 'An office address. First choice for business related contacts during business hours.', display: 'Work'},
    {code: 'temp', definition: 'A temporary address. The period can provide more detailed information.', display: 'Temporary'},
    {code: 'old', definition: 'This address is no longer in use (or was never correct but retained for records).', display: 'Old / Incorrect'},
    {code: 'billing', definition: 'A temporary address. The period can provide more detailed information.', display: 'Billing'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
