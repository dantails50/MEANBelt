import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SurveyService {
  userName:string;
  polls: BehaviorSubject<any[]> = new BehaviorSubject([]);
  poll: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private _url:HttpClient) { }

  retrievePolls(){
    this._url.get("show").subscribe((data:any) =>{
      this.polls.next(data);
    })
  }
  createPoll(poll){
    this._url.post("create", poll).subscribe(
      (response:any)=>{
      this.retrievePolls();
    })
  }

  retrieveOnePoll(id){
    this._url.get("findOne/"+id).subscribe((data:any) =>{
      this.poll.next(data);
    }

    )
  }
  updatePollVote(id,option){
    this._url.get('update/'+id+'/'+option).subscribe((data:any)=>{
      this.retrieveOnePoll(id);
    })
  }

  deletePoll(id){
    this._url.get('delete/'+id).subscribe((data:any)=>{
      this.retrievePolls();
    })
  }


}
