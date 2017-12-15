import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlackBeltComponnentComponent } from './black-belt-componnent/black-belt-componnent.component';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { VoteComponent } from './vote/vote.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component: LoginComponent

  },
  {
    path:'survey',
    pathMatch:'full',
    component: BlackBeltComponnentComponent
  },
  {
    path:'create',
    pathMatch:'full',
    component: CreateComponent
  },
  {
    path:'vote/:id',
    component: VoteComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
