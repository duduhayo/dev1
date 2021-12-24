import { Member } from '../../common/models/member';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Filters } from '../../common/models/filters';
import { AppConfig } from '../../app.config';
import { Hierarchy } from 'src/app/common/models/hierarchy';


export interface MembersState {
  loading: boolean;
  loaded: boolean;
  total: number;
  members: Member[];
  hierarchies: Hierarchy[]
  member: Member
}

export const initialMembersState: MembersState = {
  loading: false,
  loaded: false,
  total: 0,
  members: [],
  hierarchies: [],
  member: null
};

export const membersFeatureSelector = createFeatureSelector<MembersState>('members');



export const getMembersSelector = createSelector(membersFeatureSelector, state => state.members);

export const getHierachiesSelector = createSelector(membersFeatureSelector, state => state.hierarchies);

export const getMemberSelector = createSelector(membersFeatureSelector, state => state.member);



