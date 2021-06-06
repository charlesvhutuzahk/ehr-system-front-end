import { Component, OnInit } from '@angular/core';
import {NameUse} from '../../../models/name-use';
import {HumanName} from '../../../models/human-name';
import {Period} from '../../../models/period';

@Component({
  selector: 'app-human-name',
  templateUrl: './human-name.component.html',
  styleUrls: ['./human-name.component.css']
})
export class HumanNameComponent implements OnInit {
  nameUseList: NameUse[] = [{level: 0, code: 'usual', display: 'Usual', definition: 'Known as/conventional/the one you normally use.'},
    {level: 0, code: 'official', display: 'Official', definition: 'The formal name as registered in an official (government) registry, but which name might not be commonly used. May be called "legal name".'},
    {level: 0, code: 'temp', display: 'Temp', definition: 'A temporary name. Name.period can provide more detailed information. This may also be used for temporary names assigned at birth or in emergency situations.'},
    {level: 0, code: 'nickname', display: 'Nickname', definition: 'A name that is used to address the person in an informal manner, but is not part of their formal or usual name.'},
    {level: 0, code: 'anonymous', display: 'Anonymous', definition: 'Anonymous assigned name, alias, or pseudonym (used to protect a person identity for privacy reasons).'},
    {level: 0, code: 'old', display: 'Old', definition: 'This name is no longer in use (or was never correct, but retained for records).'},
    {level: 1, code: 'maiden', display: 'Name changed for Marriage', definition: 'A name used prior to changing name because of marriage. This name use is for use by applications that collect and store names that were used prior to a marriage. Marriage naming customs vary greatly around the world,' +
        ' and are constantly changing. This term is not gender specific. The use of this term does not imply any particular history for a person name.'},
  ];
  newNameUse: NameUse = new NameUse();
  newHumanName: HumanName = new HumanName();
  humanNameList: HumanName[] = [];
  newHumanPeriod: Period = new Period();

  constructor() { }

  ngOnInit(): void {
  }
  public onCodeChange(code) {
    console.log(code);
  }

}
