import { Component } from '@angular/core';
import {User} from './models/user';
import {AccountService} from './services/shared/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ehr-system-front-end';
  user: User;

  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe(x => this.user = x);
  }
  logout() {
    this.accountService.logout();
  }
}
