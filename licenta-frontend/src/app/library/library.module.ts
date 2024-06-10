import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LibraryPage } from './library.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './library-routing.module';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    HttpClientModule
  ],
  providers:[HttpClientModule],
  declarations: [LibraryPage]
})
export class Tab2PageModule {}
