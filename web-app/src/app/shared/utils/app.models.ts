import {Route} from "@angular/router";

export type NavRoutes = NavRoute[];

export interface NavRoute extends Route {
  title?: string;
  inNavBar?: boolean;
}


