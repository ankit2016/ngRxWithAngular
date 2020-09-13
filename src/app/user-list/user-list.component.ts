import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  usersData:[];
  constructor(private store : Store<any>) { }

  ngOnInit() {
    this.store.select('users').subscribe((res) => {
      this.usersData = res || [];
    })
  }
}



















