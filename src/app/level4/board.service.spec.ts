import { BoardService } from "./board.service"

describe('board service', () => {
  it('can set pieces on the board', () => {
    const board = new BoardService();

    board.drop(0);
    board.drop(1);

    expect(board.boardContent[5][0]).toBe(1);
    expect(board.boardContent[5][1]).toBe(2);
  })

  it('can find a winner in a row', () => {
    const board = new BoardService();
    board.drop(0);
    board.drop(0);
    board.drop(1);
    board.drop(1);
    board.drop(2);
    board.drop(2);
    board.drop(3);


    expect(board.getWinnerIndex()).toBe(1);
  })

  it('can find a winner in a column', () => {
    const board = new BoardService();

    board.drop(1);
    board.drop(2);
    board.drop(1);
    board.drop(2);
    board.drop(1);
    board.drop(2);
    board.drop(1);

    expect(board.getWinnerIndex()).toBe(1);

  })

  it('can find a winner in an upwards diagonal', () => {
    const board = new BoardService();

    board.drop(0);
    board.drop(1);
    board.drop(1);
    board.drop(1);
    board.drop(2);
    board.drop(2);
    board.drop(2);
    board.drop(3);
    board.drop(3);
    board.drop(3);
    board.drop(3);

    expect(board.getWinnerIndex()).toBe(1);
  })

  it('can find a winner in a downwards diagonal', () => {
    const board = new BoardService();

    board.drop(6);
    board.drop(5);
    board.drop(5);
    board.drop(5);
    board.drop(4);
    board.drop(4);
    board.drop(4);
    board.drop(3);
    board.drop(3);
    board.drop(3);
    board.drop(3);

    expect(board.getWinnerIndex()).toBe(1);
  })
})
