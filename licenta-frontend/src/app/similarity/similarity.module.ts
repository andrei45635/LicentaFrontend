import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SimilarityPage } from './similarity.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './similarity-routing.module';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    HttpClientModule
  ],
  providers:[HttpClientModule],
  declarations: [SimilarityPage]
})
export class Tab1PageModule {}
