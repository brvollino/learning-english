import { Component } from '@angular/core';
import { GameResult } from './shared/game-result.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learning-english';
  gameInProgress = true;
  victory: boolean;

  onFinishTheGame(result: GameResult) {
    console.log('result', result);
    alert(result);
    this.gameInProgress = false;
    this.victory = result === GameResult.VICTORY;
  }
}
