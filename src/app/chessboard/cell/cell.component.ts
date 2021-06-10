import { Component, Input } from '@angular/core';
import { Piece, Square } from 'chess.js';
import { DndDropEvent } from 'ngx-drag-drop';
import { ConfigService } from 'src/app/services/config.service';
import { GameService } from 'src/app/services/game.service';
import { Color } from '../models/color'
import { Config } from '../models/config';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent {

  public ColorEnum = Color;

  @Input() color!: Color;
  @Input() piece!: Piece | null;
  @Input() notation!: Square;

  config: Config;

  constructor(private configService: ConfigService, private gameService: GameService) {
    this.config = configService.current;
  }

  move($event: DndDropEvent) {
    this.gameService.move({
      from: $event.data,
      to: this.notation
    })
  }

}
