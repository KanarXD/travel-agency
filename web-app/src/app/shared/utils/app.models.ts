import {Route} from "@angular/router";

export type NavRoutes = Route[];

export interface NavRoute extends Route {
  title: string;
  exact: boolean;
}


