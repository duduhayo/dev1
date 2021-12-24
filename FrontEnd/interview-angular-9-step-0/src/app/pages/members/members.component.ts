import { Component, OnDestroy, OnInit } from '@angular/core';
import { ListItem } from '../../common/models/list-item';
import { Observable, Subscription } from 'rxjs';
import { Member } from '../../common/models/member';
import { MembersState, getMembersSelector, getHierachiesSelector } from "../../ngrx/state/members.state";
import { FetchMembers, FetchHiearchies } from "../../ngrx/action/members.actions";
import { select, Store } from "@ngrx/store";
import { state } from '@angular/animations';
import { map } from 'rxjs/operators';
import { Hierarchy } from 'src/app/common/models/hierarchy';
import { Router } from '@angular/router';


@Component({
  selector: 'zi-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit, OnDestroy {

  listItems$: Observable<ListItem[]>;
  subscriptions: Subscription = new Subscription();
  selectedMember: ListItem;
  isLoading: boolean;
  hierarchies$: Observable<Hierarchy[]>;
  constructor(private membersStore: Store<MembersState>, private router: Router) { }

  ngOnInit() {
    this.membersStore.dispatch(FetchMembers());
    this.listItems$ = this.membersStore.select(getMembersSelector).pipe(map(t => t.map(x => ({ id: x.id, label: x.name }) as ListItem)))
  }

  memberSelected(member: Member) {
    this.membersStore.dispatch(FetchHiearchies({ id: member.id }));
    this.hierarchies$ = this.membersStore.select(getHierachiesSelector);

  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
