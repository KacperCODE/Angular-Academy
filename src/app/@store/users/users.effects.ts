import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  map,
  switchMap,
} from 'rxjs/operators';
import { UsersActions } from './users.actions';
import { UserApi } from '../../services/user.api';

@Injectable()
export class UsersEffects {

  loadUsers$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.loadUsers),
      debounceTime(3000),
      switchMap(() => {
        return this.userApi.fetchUsers().pipe(
          map((users) => {
            return UsersActions.loadUsersSuccess({ users })
          }),
          catchError((error) => {
            return of(UsersActions.loadUsersError({error }))
          })
        )
      })
    )
  )

  createUser$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.createUser),
      switchMap((action) => {
        return this.userApi.addUser(action.user).pipe(
          map((users) => {
            return UsersActions.createUserSuccess()
          }),
          catchError((error) => {
            return of(UsersActions.createUserError({ error }))
          })
        )
      })
    )
  )


  constructor(
    private actions$: Actions,
    private userApi: UserApi,
    private router: Router
  ) {}
}
