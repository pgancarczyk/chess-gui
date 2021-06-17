import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Config } from '../chessboard/models/config';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-config-form',
  templateUrl: './config-form.component.html',
  styleUrls: ['./config-form.component.scss']
})
export class ConfigFormComponent implements OnInit {

  config!: Config;
  sending: boolean = false;

  constructor(public configService: ConfigService, private snackbar: MatSnackBar) {
    configService.current.subscribe(
      current => this.config = current
    )
  }

  ngOnInit(): void {
  }

  reset(): void {
    this.configService.reset();
  }

  send(): void {
    this.sending = true;
    this.snackbar.open('Sending...', '', { duration: 2000 })
    this.configService.send();
    setTimeout(() => {
      this.snackbar.open('Done! Thanks', '', { duration: 2000 })
      this.sending = false;
    }, 2000);
  }

}
