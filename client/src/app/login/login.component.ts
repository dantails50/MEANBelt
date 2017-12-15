import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName:string;
  constructor(private _survey:SurveyService, private _url:Router) { }

  ngOnInit() {
    this.userName=null;
  }

  onSubmit(){
    this._survey.userName = this.userName;
    this.userName=null;
    this._url.navigateByUrl('survey');
  }

}
