import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfilePage } from './profile.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab4PageRoutingModule } from './profile-routing.module';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab4PageRoutingModule,
    HttpClientModule
  ],
  providers:[],
  declarations: [ProfilePage]
})
export class Tab4PageModule {}
