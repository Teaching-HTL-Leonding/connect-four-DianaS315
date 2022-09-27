import { Component } from '@angular/core';

@Component({
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.css'],
})
export class Level2Component {
  public currentPlayerIndex = 1;
  public currentWinnerIndex = 0;
  private playerNames!: string[];
  public boardContent!: number [][];

  constructor() {
    this.playerNames= ['', '1', '2'];
    this.onRestart();
  }

  public getStyle(col: number, row:number) : string {
    if(this.boardContent[row][col]!== 0){
      return `occupied-${this.playerNames[this.boardContent[row][col]]}`;
    }
    return '';
  }

  public drop(colIx: number) {
    console.log(`Coin dropped in column ${colIx}`);
    if(this.currentWinnerIndex === 0){
      for(let row = 3; row >= 0; row --){
        if(this.boardContent[row][colIx] === 0){
          this.boardContent[row][colIx] = this.currentPlayerIndex;
          this.currentPlayerIndex = this.currentPlayerIndex === 1 ? 2 : 1;
          break;
        }
      }
    }
    this.currentWinnerIndex = this.getWinnerIndex();
  }

  public onRestart(): void {
    this.boardContent = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    this.currentPlayerIndex = 1;
    this.currentWinnerIndex = 0;
  }

  private getWinnerIndex(): number{
    // checks rows
    for(let row = 0; row < 4; row++){
      const first = this.boardContent[row][0];
      if(first !== 0 &&
        this.boardContent[row][1] === first &&
        this.boardContent[row][2] === first &&
        this.boardContent[row][3] === first){
          return first;
        }
    }
    // checks columns
    for(let col = 0; col < 4; col++){
      const first = this.boardContent[0][col];
      if(first !== 0 &&
        this.boardContent[1][col] === first &&
        this.boardContent[2][col] === first &&
        this.boardContent[3][col] === first){
          return first;
        }
    }
    //checks diagonals
    if(this.boardContent[1][2] !== 0 &&
      this.boardContent[1][2] === this.boardContent[2][1]){// if [1][2] and [2][1] hold the same content and are not 0
        for(let i = 0; i < 3; i++){
          const first = this.boardContent[2][1];
          if(this.boardContent[0][3] === first &&
            this.boardContent[3][0] === first){
              return first;
            }
        }
    }
    if(this.boardContent[1][1] !== 0 &&
      this.boardContent[1][1] === this.boardContent[2][2]){
        for(let i = 0; i < 3; i++){
          const first = this.boardContent[1][1];
          if(this.boardContent[0][0] === first &&
            this.boardContent[3][3] === first){
              return first;
            }
        }
    }
    return 0;
  }

  public get winnerIndex(): number {
    return this.currentWinnerIndex;
  }

  public winnerName(): string {
    return this.playerNames[this.currentWinnerIndex];
  }

}
