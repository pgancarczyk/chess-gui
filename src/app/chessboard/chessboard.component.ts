import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { Observable } from 'rxjs';

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

  constructor(db: AngularFireDatabase) {
    this.message = db.object('message').valueChanges();
    this.entries = db.list<Entry>('entries').valueChanges();
  }

  ngOnInit(): void {
  }

}
