import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { reducer, UsersReducer } from './reducers/tutorial.reducer';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      tutorial: reducer,
      users: UsersReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
