import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newPolls={
    question:'',
    options1:'',
    options2:'',
    options3:'',
    options4:'',
    userName:''
  };
  constructor(private _poll:SurveyService, private _url:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.newPolls.userName = this._poll.userName;
    this._poll.createPoll(this.newPolls);
    this.newPolls={
      question:'',
      options1:'',
      options2:'',
      options3:'',
      options4:'',
      userName:''
    }
    this._url.navigateByUrl('survey')
  }
}
