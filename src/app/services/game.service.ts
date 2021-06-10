import { Injectable } from '@angular/core';
import { ChessInstance, Square } from 'chess.js';
const Chess = require('chess.js');

@Injectable({
  providedIn: 'root'
})
export class GameService {

  chess: ChessInstance;

  constructor() {
    this.chess = new Chess();
  }

  getPiece(cell: Square) {
    return this.chess.get(cell);
  }

  move(move: { from: Square, to: Square }) {
    this.chess.move(move);
  }

}
