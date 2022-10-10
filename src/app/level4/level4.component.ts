import { Component } from '@angular/core';
import { BoardCell } from '../level3/level3.component';
import { BoardService } from './board.service';

const NUM_ROWS :number = 6;
const NUM_COLS :number = 7;

@Component({
  templateUrl: './level4.component.html',
  styleUrls: ['./level4.component.css'],
})
export class Level4Component {
  public playerNames!: string[];
  constructor(public board: BoardService) {
    this.playerNames= ['', '1', '2'];
  }

  public getPlayerName(col: number, row: number): string{
    return this.playerNames[this.board.boardContent[row][col]];
  }
    public getCells(): BoardCell[][] {
      const result: BoardCell[][] = [];
      for (let row = 0; row < NUM_ROWS; row++) {
        result.push([]);
        for (let col = 0; col < NUM_COLS; col++) {
          result[row][col] = {
            playerName: this.getPlayerName(col, row),
            class: this.getStyle(col, row),
          };
        }
      }

      return result;
    }
    public getStyle(col: number, row:number) : string {
      if(this.board.boardContent[row][col]!== 0){
        return `occupied-${this.playerNames[this.board.boardContent[row][col]]}`;
      }
      return '';
    }


  public winnerName(): string {
    return this.playerNames[this.board.currentWinnerIndex];
  }

}
