
import { Tutorial } from './../models/tutorial.model'
import * as TutorialActions from '../actions/tutorial.action';
import * as UsersActions from '../actions/users.action';


// Section 1
const initialState: Tutorial = {
    name: 'Initial Tutorial',
    url: 'http://google.com'
}

// Section 2
export function reducer(state: Tutorial[] = [], action: TutorialActions.Actions) {
  console.log('called 1st');
    // Section 3
    switch(action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];
        case TutorialActions.REMOVE_TUTORIAL:
            state.splice(action.payload, 1);
            return state;
        default:
            return state;
    }
}

export function UsersReducer (state: [] = [], action: UsersActions.UsersActions) {
  switch (action.type) {
    case UsersActions.ADD_USERS:
      return [...state, action.payload];
    default:
      return state;
  }
}
