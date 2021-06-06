import {Period} from './period';
import {Use} from './use';

export class HumanName {
  family: string;
  given: string;
  id: number;
  name: string;
  period: Period;
  prefix: string;
  suffix: string;
  text: string;
  use: Use;
}
