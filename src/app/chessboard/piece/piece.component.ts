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

  config!: Config;

  constructor(private configService: ConfigService) {
    configService.current.subscribe(
      current => this.config = current
    )
  }

  getUrl(): string {
    return `https://images.chesscomfiles.com/chess-themes/pieces/${this.config.pieces.graphicType}/150/${this.color}${this.type}.png`;
  }

}
