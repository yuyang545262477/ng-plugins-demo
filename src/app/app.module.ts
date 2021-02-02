import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {G6PlayComponent} from './components/g6-play/g6-play.component';
import {PlumbPlayComponent} from './components/plumb-play/plumb-play.component';

@NgModule({
  declarations: [
    AppComponent,
    PlumbPlayComponent,
    G6PlayComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
