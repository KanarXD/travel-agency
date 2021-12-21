import {AfterViewInit, Component} from '@angular/core';
import {NavRoute, NavRoutes, RouteGuard} from "../../../shared/utils/app.models";
import {appNavRoutes} from "../../../app-routing.module";
import {BehaviorSubject} from "rxjs";
import {CoreService} from "../../../shared/services/core.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements AfterViewInit {
  navRoutes$: BehaviorSubject<NavRoutes> = new BehaviorSubject<NavRoutes>(appNavRoutes);

  constructor(
    private coreService: CoreService
  ) {
  }

  ngAfterViewInit(): void {
    // this.coreService.isLogged$.subscribe(()=>{
    //   this.navRoutes$.next()
    // })
    appNavRoutes.forEach(navRoute => {
      navRoute.canActivate?.forEach((guard: RouteGuard) => {
        guard.isActive$?.subscribe((isActive: boolean) => {
          debugger;
          navRoute.inNavBar = isActive;
          this.updateNavRoutes(navRoute);
        });
      });
    })
  }

  updateNavRoutes(navRoute: NavRoute) {
    this.navRoutes$.next({...this.navRoutes$.value, ...navRoute})
  }

}
