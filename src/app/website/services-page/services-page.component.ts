import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {AccountService} from '../../services/shared/account.service';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css']
})
export class ServicesPageComponent implements OnInit {

  user: User;

  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe(x => this.user = x);
  }

  ngOnInit(): void {
  }

}
