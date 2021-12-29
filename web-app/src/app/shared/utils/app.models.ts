import {Route} from "@angular/router";
import {HttpMethodName} from "../services/api.models";

export type NavRoutes = NavRoute[];

export interface NavRoute extends Route {
  title?: string;
  inNavBar?: boolean;
}

export interface UserStatus {
  isLogged: boolean;
  privilegeList: string[];
}

export interface ItemAction<T> {
  type: HttpMethodName,
  item: T
}



