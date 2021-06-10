import { Injectable } from '@angular/core';
import { Config } from '../chessboard/models/config';
import defaultConfig from '../../assets/defaultConfig.json';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  current: Config;

  constructor() {
    this.current = defaultConfig;
  }
}
