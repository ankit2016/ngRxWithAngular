import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TutorialActions from './../actions/tutorial.action';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  tutorials: [];
  constructor(private state: Store<any>) { 
    console.log('states', this.state);
    this.state.select('tutorial').subscribe((res) => {
      this.tutorials = res;
    });
  }

  ngOnInit() {
  }

  remove(i) {
    const removeData = new TutorialActions.RemoveTutorial(i);
    this.state.dispatch(removeData);
  }

}
