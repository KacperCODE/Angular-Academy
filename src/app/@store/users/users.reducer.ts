import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { UsersActions } from './users.actions';
import { initUsersState, UsersState } from './users.state';

export const usersReducer: ActionReducer<UsersState, Action> = createReducer(
  initUsersState,

  on(UsersActions.loadUsers, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),

  on(UsersActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false,
    loaded: true,
    error: null,
  })),

  on(UsersActions.loadUsersError, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: true,
    error,
  })),

  on(UsersActions.createUser, (state, { user }) => {
    const newUsers = {...state.users, user}

    return {
    ...state,
      users: newUsers,
    }
  }),
);
