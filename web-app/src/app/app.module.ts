import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './core/components/app/app.component';
import {ContainersModule} from "./modules/modules.module";
import {CoreModule} from "./core/core.module";

@NgModule({
  imports: [
    ContainersModule,
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
