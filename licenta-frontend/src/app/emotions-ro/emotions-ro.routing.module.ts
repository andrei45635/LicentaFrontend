import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmotionsRoComponent } from './emotions-ro.component';

const routes: Routes = [
  {
    path: '',
    component: EmotionsRoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmotionsRoRoutingModule {}
