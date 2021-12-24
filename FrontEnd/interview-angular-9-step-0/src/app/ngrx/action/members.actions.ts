import { createAction, props } from '@ngrx/store';
import { Member } from '../../common/models/member';
import { Hierarchy } from '../../common/models/hierarchy';


// Fetch Members
export const FetchMembers = createAction(
  '[Members] FETCH_MEMBERS'
);
export const FetchMembersSuccess = createAction(
  '[Members] FETCH_MEMBERS_SUCCESS',
  props<{ total: number, members: Array<Member> }>()
);
export const FetchMembersFailure = createAction('[Family] FETCH_MEMBERS_FAILURE');


// Fetch Members
export const FetchHiearchies = createAction(
  '[Members] FETCH_HIERARCHIES',
  props<{ id: string }>()
);
export const FetchHiearchiesSuccess = createAction(
  '[Members] FETCH_HIERARCHIES_SUCCESS',
  props<{ hierarchies: Array<Hierarchy> }>()
);
export const FetchHiearchiesFailure = createAction('[Family] FETCH_HIERARCHIES_FAILURE');


// Fetch Members
export const FetchMember = createAction(
  '[Members] FETCH_MEMBER',
  props<{ id: string }>()
);
export const FetchMemberSuccess = createAction(
  '[Members] FETCH_MEMBER_SUCCESS',
  props<{ member: Member }>()
);
export const FetchMemberFailure = createAction('[Family] FETCH_MEMBER_FAILURE',
props<{ member: Member }>()
);


