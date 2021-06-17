import { Injectable } from '@angular/core';
import { Config } from '../chessboard/models/config';
import defaultConfig from '../../assets/defaultConfig.json';
import { Piece } from 'chess.js';
import { BehaviorSubject } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  current: BehaviorSubject<Config> = new BehaviorSubject<Config>(defaultConfig);

  constructor(private db: AngularFireDatabase) {}
  
  reset() {
    window.location.reload();
  }

  send() {
    // console.log(this.current.value)
    this.db.list('responses').push(this.current.value);
  }

}
