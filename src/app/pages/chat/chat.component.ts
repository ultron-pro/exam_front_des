import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from './environment';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages: string[] = [];
  userMessage: string = '';

   constructor(private http: HttpClient){
    
   }
   sendMessage() {
    this.messages.push(this.userMessage);

    const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${environment.openAiApiKey}`
    });

    const body = {
      prompt: this.userMessage,
      max_tokens: 100,
      temperature: 0.6
    };
    this.http.post<any>(apiUrl, body, { headers }).subscribe(response => {
      const message = response.choices[0].text.trim();
      this.messages.push(message);
    }, error => {
      console.error('Error:', error);
    });

    this.userMessage = '';
  }
}

 