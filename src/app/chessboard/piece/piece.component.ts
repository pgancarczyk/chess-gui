import { Component, Input } from '@angular/core';
import { PieceType, Square } from 'chess.js';
import { ConfigService } from 'src/app/services/config.service';
import { Config } from '../models/config';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.scss']
})
export class PieceComponent {

  @Input() color!: 'w' | 'b';
  @Input() type!: PieceType; 
  @Input() notation!: Square;

  config: Config;

  constructor(private configService: ConfigService) {
    this.config = configService.current;
  }

}
