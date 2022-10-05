import { Component, OnInit} from '@angular/core';
import { Level2Component } from '../level2/level2.component';

export interface BoardCell {

  playerName: string;

  class: string;
}
const NUM_ROWS :number = 6;
const NUM_COLS :number = 7;

@Component({
  templateUrl: './level3.component.html',
  styleUrls: ['./level3.component.css'],
})


export class Level3Component extends Level2Component{
  constructor () {
    super();
  }

  override boardContent = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ]
  
  public override onRestart(): void {
    this.currentWinnerIndex = 0
    this.currentPlayerIndex = 1
    this.boardContent = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ]
  }


  public getPlayerName(col: number, row: number): string{
    return this.playerNames[this.boardContent[row][col]];
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

  public override drop(colIx: number) {
    console.log(`Coin dropped in column ${colIx}`);
    console.log(this.boardContent)
    if(this.currentWinnerIndex === 0){
      for(let row = NUM_ROWS - 1; row >= 0; row --){
        if(this.boardContent[row][colIx] === 0){
          this.boardContent[row][colIx] = this.currentPlayerIndex;
          this.currentPlayerIndex = this.currentPlayerIndex === 1 ? 2 : 1;
          break;
        }
      }
    }
    this.currentWinnerIndex = this.getWinnerIndex();
  }

  public override getWinnerIndex(): number {
    // checks rows
    for(let row = 0; row < NUM_ROWS; row++){
      for(let col = 0; col < NUM_COLS - 3; col++){
        let first = this.boardContent[row][col];
        if(first !== 0 &&
          this.boardContent[row][col+1] === first &&
          this.boardContent[row][col+2] === first &&
          this.boardContent[row][col+3] === first)
          {
            return first;
          }
      }
    }

    // checks columns
    for(let row = 0; row < NUM_ROWS - 3; row++){
      for(let col = 0; col < NUM_COLS; col++){
        let first = this.boardContent[row][col];
        if(first !== 0 &&
          this.boardContent[row+1][col] === first &&
          this.boardContent[row+2][col] === first &&
          this.boardContent[row+3][col] === first)
          {
            return first;
          }
      }
    }

    // checks diagonals
    for(let row = 2; row < NUM_ROWS; row++){
      for(let col = 0; col < NUM_COLS - 3; col++){
        let first = this.boardContent[row][col];
        if(first !== 0 &&
            this.boardContent[row -1][col + 1] === first &&
            this.boardContent[row -2][col + 2] === first &&
            this.boardContent[row -3][col + 3] === first)
            {
            return first;
            }
       }
      }

      for(let row = 0; row < NUM_ROWS - 3; row++){
        for(let col = 0; col < NUM_COLS -3; col++){
          let first = this.boardContent[row][col];
          if(first !== 0 &&
            this.boardContent[row + 1][col + 1] === first &&
            this.boardContent[row + 2][col + 2] === first &&
            this.boardContent[row + 3][col + 3] === first)
            {
            return first;
            }
        }
      }
      return 0;
    }
  }


