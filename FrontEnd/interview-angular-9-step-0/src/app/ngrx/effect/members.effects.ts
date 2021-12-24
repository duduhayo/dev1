import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MembersService } from '../../pages/services/members.service';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { FetchMembers, FetchMembersFailure, FetchMembersSuccess, FetchHiearchies, FetchHiearchiesSuccess, FetchHiearchiesFailure } from '../action/members.actions';

import * as _ from 'lodash';

@Injectable()
export class MembersEffects {

  constructor(private actions$: Actions,
    private membersService: MembersService) { }

  public fetchMembers$ = createEffect((): Observable<Action> =>
    this.actions$
      .pipe(
        ofType(FetchMembers),
        mergeMap(() => {
          return this.membersService.getMembers()
            .pipe(
              map((resp) => FetchMembersSuccess({ total: _.get(resp, 'total'), members: _.get(resp, 'members') })),
              catchError((err) => of(FetchMembersFailure()))
            );
        })
      ));
  public fetchHierarchies$ = createEffect((): Observable<Action> =>
    this.actions$
      .pipe(
        ofType(FetchHiearchies),
        mergeMap((action) => {
          return this.membersService.getMemberHierarchies(action.id)
            .pipe(
              map((resp) => FetchHiearchiesSuccess({ hierarchies: _.get(resp, 'hierarchies') })),
              catchError((err) => of(FetchHiearchiesFailure()))
            );
        })
      ));
}
