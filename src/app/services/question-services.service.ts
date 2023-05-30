import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionServicesService {
  
  private baseUrl ='http://localhost:2020';
  constructor(
    private _http:HttpClient
  ) { }

  public getQuestionOfQuiz(qId:any)
  {
    console.log(qId);
    return this._http.get(this.baseUrl+`/question/quiz/all/${qId}`);
  }

  //add Addquesttion
  public addQuestion(question:any)
  {

     return this._http.post(this.baseUrl+`/question/`,question);
  }

  public deleteQuestion(questionId:any)
  {
       return this._http.delete(this.baseUrl+`/question/${questionId}`)
  }

  //normal user geting questions

  public getQuestionOfQuizForTest(qid:any)
  {
    console.log(qid);
    return this._http.get(this.baseUrl+`/question/quiz/${qid}`);
  }
  public evalQuestion(question:any)
  {

    console.log("questions...")
    return this._http.post(this.baseUrl+`/question/eval-quize`,question);
  }
}
