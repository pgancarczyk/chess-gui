import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
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

  message: Observable<any>;
  entries: Observable<Entry[]>;
  config: Config;
  // rows: Array<Array<{ type: PieceType; color: "w" | "b" } | null>>;
  rows = [ 1, 2, 3, 4, 5, 6, 7, 8 ].reverse();
  columns = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ];

  ColorEnum = Color;

  constructor(db: AngularFireDatabase, configService: ConfigService, public gameService: GameService) {
    this.message = db.object('message').valueChanges();
    this.entries = db.list<Entry>('entries').valueChanges();
    this.config = configService.current;
  }

  getNotation(column: string, row: number) {
    return column + row as Square;
  }

}
