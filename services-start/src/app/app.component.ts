import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService]
})
export class AppComponent implements OnInit {
  accounts: { name: string, status: string }[] = [];

  constructor(private _accountService: AccountService) { }

  ngOnInit() {
    this.accounts = this._accountService.accounts;
  }
}
