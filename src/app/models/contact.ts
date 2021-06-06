import {Address} from './address';
import {HumanName} from './human-name';
import {Purpose} from './purpose';
import {Telecom} from './telecom';

export class Contact {
  address: Address;
  endPoint: string;
  humanName: HumanName;
  id: number;
  purpose: Purpose;
  telecom: Telecom;
}
