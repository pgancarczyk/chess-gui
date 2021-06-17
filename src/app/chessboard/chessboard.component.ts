import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from './models/color';
import { ChessInstance, PieceType, Square } from 'chess.js'
import { Config } from './models/config';
import { ConfigService } from '../services/config.service';
import { GameService } from '../services/game.service';

interface Entry {
  message: string;
}

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.scss']
})
export class ChessboardComponent {

  config!: Config;
  // rows: Array<Array<{ type: PieceType; color: "w" | "b" } | null>>;
  rows = [ 1, 2, 3, 4, 5, 6, 7, 8 ].reverse();
  columns = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ];

  ColorEnum = Color;

  constructor(configService: ConfigService, public gameService: GameService) {
    configService.current.subscribe(
      current => this.config = current
    )
  }

  getNotation(column: string, row: number) {
    return column + row as Square;
  }

}
