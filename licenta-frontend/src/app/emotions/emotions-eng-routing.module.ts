import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmotionsEngPage } from './emotions-eng.page';

const routes: Routes = [
  {
    path: '',
    component: EmotionsEngPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
