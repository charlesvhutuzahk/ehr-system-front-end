import {AddressType} from './address-type';
import {AddressUse} from './address-use';
import {Period} from './period';

export class Address {
  addresText: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  addressType: AddressType;
  addressUse: AddressUse;
  address_state: string;
  city: string;
  country: string;
  district: string;
  id: number;
  line1: string;
  period: Period;
  postalCode: string;
}
