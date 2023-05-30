import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule, MatIconButton} from '@angular/material/button'; 
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';  
import { MatCardModule } from '@angular/material/card';        
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AuthInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import {MatListModule} from '@angular/material/list';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategaroiesComponent } from './pages/admin/view-categaroies/view-categaroies.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizzesComponent } from './pages/admin/add-quizzes/add-quizzes.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { UpdateQuizzesComponent } from './pages/admin/update-quizzes/update-quizzes.component';
import { ViewQuestionsComponent } from './pages/admin/view-questions/view-questions.component';
import { AddQuestionsComponent } from './pages/admin/add-questions/add-questions.component';
import { UpdateQuestionsComponent } from './pages/admin/update-questions/update-questions.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { UserSidebarComponent } from './pages/user/user-sidebar/user-sidebar.component';
import { LoadQuizeComponent } from './pages/user/load-quize/load-quize.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartExamComponent } from './pages/user/start-exam/start-exam.component';
import {MatRadioModule} from '@angular/material/radio';
import { NgForOf,NgIf} from '@angular/common';  
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxUiLoaderHttpModule } from "ngx-ui-loader";



import {
  NgxUiLoaderModule,
  NgxUiLoaderConfig,
  SPINNER,
  POSITION,
  PB_DIRECTION,
} from "ngx-ui-loader";
import { ResultExamComponent } from './pages/user/result-exam/result-exam.component';
import { ChatComponent } from './pages/chat/chat.component';
const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: "red",
  bgsPosition: POSITION.centerCenter,
  bgsSize: 40,
  

  bgsType: SPINNER.threeStrings, // background spinner type
  fgsType: SPINNER.threeStrings, // foreground spinner type
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 5, // progress bar thickness
};



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    PageNotFoundComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategaroiesComponent,
    AddCategoryComponent,
    ViewQuizzesComponent,
    AddQuizzesComponent,
    UpdateQuizzesComponent,
    ViewQuestionsComponent,
    AddQuestionsComponent,
    UpdateQuestionsComponent,
    UserSidebarComponent,
    LoadQuizeComponent,
    InstructionsComponent,
    StartExamComponent,
    ResultExamComponent,
    ChatComponent,
    
  ],
  imports: [
   
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    CKEditorModule,
    BrowserModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    NgxUiLoaderModule,
    
    
    NgxUiLoaderHttpModule.forRoot(
      {
        showForeground:true
      }
    ),
    NgForOf,
    NgIf,
    
    // BackButtonDisableModule.forRoot(
    //   {
    //     preserveScrollPosition:true
    //   }
    //)
    
    
  
  ],
  providers: [
     AuthInterceptorProviders,
     AdminGuard
     
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
