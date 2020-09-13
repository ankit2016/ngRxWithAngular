import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TutorialActions from './../actions/tutorial.action';
import * as UsersActions from './../actions/users.action';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  public tutorials: [];
  public usersData: [];
  constructor(private state: Store<any>) {

  }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.state.select('tutorial').subscribe((res) => {
      console.log('this.state',this.state);
      console.log('states', res);
      this.tutorials = res || [];
    });

    this.state.select('users').subscribe((res) => {
      console.log('usersData states', res);
      this.usersData = res || [];
    });
  }
  remove(i) {
    const removeData = new TutorialActions.RemoveTutorial(i);
    this.state.dispatch(removeData);
  }

}
