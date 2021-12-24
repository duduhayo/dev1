import { createReducer, on } from '@ngrx/store';
import { initialMembersState } from '../state/members.state';
import {
  FetchMembers,
  FetchMembersFailure,
  FetchMembersSuccess,
  FetchHiearchies,
  FetchHiearchiesSuccess,
  FetchHiearchiesFailure,
  FetchMember,
  FetchMemberSuccess,
  FetchMemberFailure
} from '../action/members.actions';

export const MembersReducer = createReducer(
  initialMembersState,

  on(FetchMembers, state => ({ ...state, loading: true, loaded: false })),

  on(FetchMembersSuccess, (state, { total, members }) => ({ ...state, total, members, loaded: true, loading: false })),

  on(FetchMembersFailure, state => ({ ...state, loading: false, loaded: true })),

  on(FetchHiearchies, state => ({ ...state, loading: true, loaded: false })),

  on(FetchHiearchiesSuccess, (state, { hierarchies }) => ({ ...state, hierarchies, loaded: true, loading: false })),

  on(FetchHiearchiesFailure, state => ({ ...state, loading: false, loaded: true })),

  on(FetchMember, state => ({ ...state, loading: true, loaded: false })),

  on(FetchMemberSuccess, (state, { member }) => ({ ...state, member, loaded: true, loading: false })),

  on(FetchMemberFailure, (state, { member })  => ({ ...state,member, loading: false, loaded: true }))

);
