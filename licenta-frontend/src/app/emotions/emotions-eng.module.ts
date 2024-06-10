import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmotionsEngPage } from './emotions-eng.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './emotions-eng-routing.module';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab3PageRoutingModule,
    HttpClientModule
  ],
  providers:[HttpClientModule],
  declarations: [EmotionsEngPage]
})
export class Tab3PageModule {}
