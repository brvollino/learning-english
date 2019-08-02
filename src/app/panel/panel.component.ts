import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SENTENCES_MOCK } from '../shared/sentences.mock';
import { Sentence } from '../shared/sentence.model';
import { GameResult } from '../shared/game-result.enum';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Output()
  finishGame = new EventEmitter<GameResult>();

  currentAnswer = '';
  instruction = 'Traduza a frase';
  currentQuestion: Sentence;
  progress = 0;
  remainingAttempts = 5;
  private round = -1;

  constructor() {
    this.nextRound();
  }

  ngOnInit() {
    console.log(SENTENCES_MOCK);
  }

  onUpdateAnswer(event) {
    this.currentAnswer = event.target.value;
  }

  nextRound() {
    this.progress = (this.round + 1) / SENTENCES_MOCK.length * 100;
    console.log('progress: ', this.progress);
    this.round++;
    this.currentAnswer = '';
    this.currentQuestion = SENTENCES_MOCK[this.round];
  }

  validateAnswer() {
    console.log('currentAnswer: ', this.currentAnswer);
    if (this.round === SENTENCES_MOCK.length) {
      this.finishGame.emit(GameResult.VICTORY);
    } else if (this.currentAnswer === this.currentQuestion.portuguese) {
      this.nextRound();
    } else if (this.remainingAttempts === 1) {
      this.finishGame.emit(GameResult.DEFEAT);
      this.remainingAttempts--;
    } else if (this.remainingAttempts > 0) {
      this.remainingAttempts--;
    }
  }
}
