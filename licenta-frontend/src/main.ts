import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {bootstrapApplication} from "@angular/platform-browser";
import {App} from "@capacitor/app";
import {provideHttpClient} from "@angular/common/http";
import {AppComponent} from "./app/app.component";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));