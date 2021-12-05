import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from "./components/app/app.component";
import {NavComponent} from "./components/nav/nav.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AppComponent,
    NavComponent
  ]
})
export class CoreModule {
}
