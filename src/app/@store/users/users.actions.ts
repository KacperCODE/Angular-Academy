import { createAction, props } from '@ngrx/store';
import { UserDetails } from '../../@api/user/user.model';

export namespace UsersActions {
  export enum Type {
    LOAD_USERS = '[Users] Load Users',
    LOAD_USERS_SUCCESS = '[Users] Load Users Success',
    LOAD_USERS_ERROR = '[Users] Load Users Error',
    CREATE_USER = '[Users] Create User',
    CREATE_USER_SUCCESS = '[Users] Create User Success',
    CREATE_USER_ERROR = '[Users] Create User Error',
  }

  export const loadUsers = createAction(Type.LOAD_USERS);

  export const loadUsersSuccess = createAction(
    Type.LOAD_USERS_SUCCESS,
    props<{
      users: UserDetails[];
    }>()
  );
  export const loadUsersError = createAction(
    Type.LOAD_USERS_ERROR,
    props<{
      error: any;
    }>()
  );

  export const createUser = createAction(
    Type.CREATE_USER,
    props<{
      user: UserDetails;
    }>()
  );

  export const createUserSuccess = createAction(Type.CREATE_USER_SUCCESS);

  export const createUserError = createAction(Type.CREATE_USER_ERROR,
    props<{
      error: any;
    }>());
}
