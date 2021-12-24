import { Component, OnInit } from '@angular/core';
import { MembersState, getMemberSelector } from "../../ngrx/state/members.state";
import { select, Store } from "@ngrx/store";
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Member } from '../../common/models/member';
import { FetchMember, FetchMembers } from 'src/app/ngrx/action/members.actions';

@Component({
  selector: 'zi-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  member: Member;

  constructor(private membersStore: Store<MembersState>, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.membersStore.dispatch(FetchMember({ id: id }));

    this.membersStore.select(getMemberSelector)
      .subscribe(res => { this.member = res })
  }
  back(){
    this.router.navigate(['./app']);
  }

}
