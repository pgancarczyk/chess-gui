import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { Observable } from 'rxjs';
import { Color } from './models/color';
import { ChessInstance } from 'chess.js'
const Chess = require('chess.js');

interface Entry {
  message: string;
}

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.scss']
})
export class ChessboardComponent implements OnInit {

  message: Observable<any>;
  entries: Observable<Entry[]>;
  chess : ChessInstance;

  ColorEnum = Color;

  constructor(db: AngularFireDatabase) {
    this.message = db.object('message').valueChanges();
    this.entries = db.list<Entry>('entries').valueChanges();
    this.chess = new Chess();
  }

  ngOnInit(): void {
  }

}
