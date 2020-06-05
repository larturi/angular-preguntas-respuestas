import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public question: string = '¿Cual es la capital de España?';
  public answerCorrect: boolean;
  public answerChoosed: boolean;

  public answers: any = [
    {
      answer: 'Zaragoza',
      correct: false
    },
    {
      answer: 'Barcelona',
      correct: false
    },
    {
      answer: 'Madrid',
      correct: true
    },
    {
      answer: 'Sevilla',
      correct: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  checkAnswerIndex(index) {
    this.answerCorrect = this.answers[index].correct;
    this.answerChoosed = true;
  }

  checkAnswerObj(obj) {
    this.answerCorrect = obj.correct;
    this.answerChoosed = true;
  }

}
