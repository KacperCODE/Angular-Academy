import { createSelector } from '@ngrx/store';
import { UserDetails } from '../../@api/user/user.model';
import { AppState } from '../app.state';
import { UsersState } from './users.state';

export namespace UsersSelectors {
  const users = (state: AppState): UsersState => state.users;

  export const getUsers = createSelector(
    users,
    (state: UsersState): UserDetails[] => state.users
  );

  export const getIsLoading = createSelector(
    users,
    (state: UsersState): boolean => state.loading
  );
}
