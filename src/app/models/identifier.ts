import {IdentifierType} from './identifier-type';
import {IdentifierUse} from './identifier-use';
import {Period} from './period';

export class Identifier {
  id: number;
  identifierType: IdentifierType;
  identifierUse: IdentifierUse;
  period: Period;
  system: string;
  value: string;
}
