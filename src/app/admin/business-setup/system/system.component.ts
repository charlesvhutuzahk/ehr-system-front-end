import { Component, OnInit } from '@angular/core';
import {System} from '../../../models/system';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {
  systemList: System[] = [];
  newSystem: System = new System();

  constructor() { }

  ngOnInit(): void {
  }

}
