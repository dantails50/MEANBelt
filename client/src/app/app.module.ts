import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BlackBeltComponnentComponent } from './black-belt-componnent/black-belt-componnent.component';
import { LoginComponent } from './login/login.component';
import { SurveyService } from './survey.service';
import { CreateComponent } from './create/create.component';
import { VoteComponent } from './vote/vote.component'


@NgModule({
  declarations: [
    AppComponent,
    BlackBeltComponnentComponent,
    LoginComponent,
    CreateComponent,
    VoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
