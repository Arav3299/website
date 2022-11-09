import { WomenComponent } from './pages/women/women.component';
import { MenComponent } from './pages/men/men.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  
  {
    path:"",component:HomeComponent
  },
  {
    path:"loginpage",component:LoginComponent
  },
  {
    path:"signuppage",component:SignupComponent
  },
  {
    path:"tomen",component:MenComponent
  },
  {
    path:"towomen",component:WomenComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
