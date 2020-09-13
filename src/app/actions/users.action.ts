import { Action } from "@ngrx/store";

export const ADD_USERS = 'addUsers';

export class add_users implements Action {
  readonly type = ADD_USERS;
  constructor(public payload) {}
}

export type UsersActions = add_users;
