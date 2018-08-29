import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ShadowDirective} from './shadowdirective.directive';
import {CountClicksDirective} from './countClicks.directive';
import {SelectTextDirective} from './selectText.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShadowDirective,
    CountClicksDirective,
    SelectTextDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
