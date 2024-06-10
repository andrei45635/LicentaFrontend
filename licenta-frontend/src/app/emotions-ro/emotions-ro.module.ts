import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import {HttpClientModule} from "@angular/common/http";
import {EmotionsRoComponent} from "./emotions-ro.component";
import {EmotionsRoRoutingModule} from "./emotions-ro.routing.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    EmotionsRoRoutingModule,
    HttpClientModule
  ],
  providers:[HttpClientModule],
  declarations: [EmotionsRoComponent]
})
export class Tab3PageModule {}
