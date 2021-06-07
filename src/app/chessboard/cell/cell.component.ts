import { Component, Input } from '@angular/core';
import { Color } from '../models/color'

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent {

  public ColorEnum = Color;

  @Input() color: Color = Color.Light;

}
