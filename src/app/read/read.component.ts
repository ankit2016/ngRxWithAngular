import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  tutorials: any;
  constructor(private state: Store<any>) { 
    console.log('states', this.state);
    this.state.select('tutorial').subscribe((res) => {
      this.tutorials = res;
    });
  }

  ngOnInit() {
  }

}
