import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimilarityPage } from './similarity.page';

const routes: Routes = [
  {
    path: '',
    component: SimilarityPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
