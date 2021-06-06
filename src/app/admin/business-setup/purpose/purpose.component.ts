import { Component, OnInit } from '@angular/core';
import {Purpose} from '../../../models/purpose';

@Component({
  selector: 'app-purpose',
  templateUrl: './purpose.component.html',
  styleUrls: ['./purpose.component.css']
})
export class PurposeComponent implements OnInit {
  purposeList: Purpose[] = [];
  newPurpose: Purpose = new Purpose();
  constructor() { }

  ngOnInit(): void {
  }

}
