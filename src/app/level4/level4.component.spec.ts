import { TestBed } from "@angular/core/testing";
import { BoardService } from "./board.service";
import { Level4Component } from "./level4.component"

describe('level 4', () => {
  let component: Level4Component;
  let BoardServiceMock!: Partial<BoardService>;

  beforeEach(() => {

    BoardServiceMock = {
      winnerIndex: 1,
      boardContent: [
        [1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [2, 2, 1, 2, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0],
      ]
    }

    TestBed.configureTestingModule({

      declarations: [Level4Component],
      providers : [{ provide: BoardService, useValue: BoardServiceMock }]
    });

    const fixture = TestBed.createComponent(Level4Component);
    component = fixture.componentInstance;
  });

  it('should get correct player name', () => {
    expect(component.getPlayerName(1,5)).toBe('1');
  })

  it('should get correct style', () => {
    expect(component.getStyle(1,5)).toBe('occupied-1');
  })

})
