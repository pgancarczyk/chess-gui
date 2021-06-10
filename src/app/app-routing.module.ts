import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChessboardComponent } from './chessboard/chessboard.component';
import { LiveEditComponent } from './live-edit/live-edit.component';

const routes: Routes = [
  { path: '**', component: LiveEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
