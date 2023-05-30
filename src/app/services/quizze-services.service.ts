import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizzeServicesService implements OnInit {

  private baseUrl ='http://localhost:2020';
  constructor(private _http:HttpClient) { }
  ngOnInit(): void {
    
  }

  public quizzes()
  {
    return this._http.get(this.baseUrl+`/quiz/`)
    
  }
  //add quizzess

  public addQuiz(quize:any)
  {
   return this._http.post(this.baseUrl+'/quiz/',quize);
  }
  //delete quizzes

  public deleteQuizes(qId:any)
  {
    console.log(qId);
    return this._http.delete(this.baseUrl+`/quiz/${qId}`);
  }

  public getQuize(qId:any)
  {
    return this._http.get(this.baseUrl+`/quiz/${qId}`);

  }
  public updateQuizze(quiz:any)
  {
    return this._http.put(this.baseUrl+`/quiz/`,quiz);
  }
  //get quizzes by category for user
  public getQuizzesCategory(cid:any)
  {

    return this._http.get(this.baseUrl+`/quiz/category/${cid}`);
  }
  //get active Quizzes
  public getActiveQuizzes()
  {
    return this._http.get(this.baseUrl+`/quiz/active`);
  }

  public getActiveQuizebyCategory(cid:any)
  {

    return this._http.get(this.baseUrl+`/quiz/category/active/${cid}`);
  }
}

