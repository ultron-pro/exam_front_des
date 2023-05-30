import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategaroiesComponent } from './pages/admin/view-categaroies/view-categaroies.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizzesComponent } from './pages/admin/add-quizzes/add-quizzes.component';
import { UpdateQuizzesComponent } from './pages/admin/update-quizzes/update-quizzes.component';
import { ViewQuestionsComponent } from './pages/admin/view-questions/view-questions.component';
import { AddQuestionsComponent } from './pages/admin/add-questions/add-questions.component';
import { UpdateQuestionsComponent } from './pages/admin/update-questions/update-questions.component';
import { LoadQuizeComponent } from './pages/user/load-quize/load-quize.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartExamComponent } from './pages/user/start-exam/start-exam.component';
import { ResultExamComponent } from './pages/user/result-exam/result-exam.component';
import { ChatComponent } from './pages/chat/chat.component';

const routes: Routes = [

  {
     path:'',component:HomeComponent, pathMatch:'full'
  },
  {
    path:'signup',component:SignupComponent,pathMatch:'full' 
  },
  {
    path:'login', component:LoginComponent,pathMatch:'full'
  }
  ,
  {
    path:'chat',
    component:ChatComponent,
    pathMatch:'full'
  }
  ,
  {
    path:'admin',
    component:DashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'',
        component:WelcomeComponent
      },
     {
      path:'profile',
      component: ProfileComponent
     },
     {
      path:'categories',
      component:ViewCategaroiesComponent
     },
     {
      path:'add-categories',
      component:AddCategoryComponent
     },
     {
      path:'quizzes',
      component:ViewQuizzesComponent,
     },
     {
      path:'add-quizzes',
      component:AddQuizzesComponent
     },
     {
      path:'update-quizzes/:qid',
      component:UpdateQuizzesComponent
     },
     {
      path:'view-question/:id/:title',
      component:ViewQuestionsComponent
     },
     {
      path:'add-question/:qid/:title',
      component:AddQuestionsComponent
     },
     {
      path:'update-question/:quesId',
      component:UpdateQuestionsComponent

     },


    ] 
    
  },

  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    canActivate:[NormalGuard],
   children:[
    {
      path:':catId',
      component:LoadQuizeComponent
      
    },
    {
      path:'instruction/:qid',
      component:InstructionsComponent,
    },
   
   ],
    
  },
  {
    path:'start-exam/:qid',
    component:StartExamComponent,
    canActivate:[NormalGuard],

   },
   {
    path:'result-exam/:marksGot/:correctAnswers/:attempted',
    component:ResultExamComponent,
    canActivate:[NormalGuard]
   }
  //   ,
  //  {
  //   path: '**',
  //   component:PageNotFoundComponent,
  //   pathMatch:"full",
  //  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
