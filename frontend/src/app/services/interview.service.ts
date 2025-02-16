import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {
  private questions: string[] = [
    'Tell us about yourself',
    'What are your greatest strengths?',
    'Where do you see yourself in 5 years?',
    'Why should we hire you?',
    'What is your biggest achievement?',
    'How do you handle stress?',
    'What are your salary expectations?',
    'Why do you want to work here?'
  ];

  private selectedQuestions: string[] = [];
  private answers: Record<number, string> = {};

  constructor() {
    this.selectRandomQuestions();
  }

  selectRandomQuestions() {
    this.selectedQuestions = this.questions
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);
  }

  getQuestions(): string[] {
    return this.selectedQuestions;
  }

  saveAnswer(questionIndex: number, answer: string) {
    this.answers[questionIndex] = answer;
  }

  getAnswers(): Record<number, string> {
    return this.answers;
  }
} 