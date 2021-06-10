import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { ChessboardComponent } from './chessboard/chessboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CellComponent } from './chessboard/cell/cell.component';
import { PieceComponent } from './chessboard/piece/piece.component';
import { DndModule } from 'ngx-drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LiveEditComponent } from './live-edit/live-edit.component';
import { ConfigFormComponent } from './config-form/config-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ChessboardComponent,
    CellComponent,
    PieceComponent,
    LiveEditComponent,
    ConfigFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    DndModule,
    DragDropModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
