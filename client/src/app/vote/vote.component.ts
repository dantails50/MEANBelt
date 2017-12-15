import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  myPoll;
  constructor(private _url:Router, private _route:ActivatedRoute, private _poll:SurveyService) { }
  id;
  ngOnInit() {
    this._route.params.subscribe(
      params => {
      this.id = params['id'];
      this._poll.retrieveOnePoll(this.id);
      this._poll.poll.subscribe((poll:any)=>{
        this.myPoll = poll;
      })
      });
  }

  incrementCount(pollId, option){
    this._poll.updatePollVote(pollId,option);
    this._url.navigateByUrl('vote/'+pollId)
  }

}
