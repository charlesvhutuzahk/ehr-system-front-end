import {Address} from './address';
import {Contact} from './contact';
import {Identifier} from './identifier';
import {OrganisationType} from './organisation-type';
import {Telecom} from './telecom';

export class Business {
  active: boolean;
  address: Address;
  alias: string;
  contact: Contact;
  createdAt: string;
  createdBy: string;
  endPoint: string;
  id: number;
  identifier: Identifier;
  name: string;
  organisationType: OrganisationType;
  registrationNumber: string;
  telecom: Telecom;
  tenantId: string;
  tradingTitle: string;
  updatedAt: string;
  updatedBy: string;
}
