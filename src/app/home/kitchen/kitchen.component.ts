import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {AccountService} from '../../services/shared/account.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {

  user: User;

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.accountService.user.subscribe(data => {
      this.user = data;
      console.log(data);
    }
  );

  }

}
