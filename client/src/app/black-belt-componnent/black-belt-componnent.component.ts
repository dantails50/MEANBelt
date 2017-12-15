import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-black-belt-componnent',
  templateUrl: './black-belt-componnent.component.html',
  styleUrls: ['./black-belt-componnent.component.css']
})
export class BlackBeltComponnentComponent implements OnInit {
  userName:String;
  surveys;
  constructor(private _survey:SurveyService, private _url:Router) { }

  ngOnInit() {
    this._survey.retrievePolls();
    this._survey.polls.subscribe((polls:any)=>{
      this.surveys = polls;
    })
    if(!this._survey.userName) this._url.navigateByUrl('/')
    this.userName = this._survey.userName;
  }

  deletePoll(id){
    this._survey.deletePoll(id);
    this._url.navigateByUrl('survey');
  }

}
