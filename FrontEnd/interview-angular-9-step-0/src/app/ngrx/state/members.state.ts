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
}

export const initialMembersState: MembersState = {
  loading: false,
  loaded: false,
  total: 0,
  members: [],
  hierarchies: []
};

export const membersFeatureSelector = createFeatureSelector<MembersState>('members');



export const getMembersSelector = createSelector(membersFeatureSelector, state => state.members);

export const getHierachiesSelector = createSelector(membersFeatureSelector, state => state.hierarchies);



