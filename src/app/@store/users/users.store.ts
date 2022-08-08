import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { UsersSelectors } from './users.selectors';
import { UsersActions } from './users.actions';
import { UserDetails } from '../../@api/user/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersStore {
  users$ = this.store$.pipe(select(UsersSelectors.getUsers));
  loading$ = this.store$.pipe(select(UsersSelectors.getIsLoading));

  constructor(private store$: Store<AppState>) {}

  loadUsers(): void {
    this.store$.dispatch(UsersActions.loadUsers());
  }

  createUser(user: UserDetails): void {
    this.store$.dispatch(UsersActions.createUser({ user }));
  }

}
