import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from "./components/app/app.component";
import {NavComponent} from "./components/nav/nav.component";
import {RouterModule} from "@angular/router";
import {AuthComponent} from "./components/auth/auth.component";
import {FormsModule} from "@angular/forms";
import {AuthInterceptor} from "./services/auth/auth.interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {NgbNavModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AuthComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        NgbNavModule
    ],
  exports: [
    AppComponent,
    NavComponent,
    AuthComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ]
})
export class CoreModule {
}
