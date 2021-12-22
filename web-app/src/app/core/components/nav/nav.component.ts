import {AfterViewInit, Component} from '@angular/core';
import {NavRoute, NavRoutes, UserStatus} from "../../../shared/utils/app.models";
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

  constructor(private coreService: CoreService) {
  }

  ngAfterViewInit(): void {
    this.coreService.userStatus$.subscribe((userStatus: UserStatus) => {
      let newNavRoutes: NavRoutes = this.navRoutes$.getValue();
      newNavRoutes.forEach((navRoute: NavRoute) => {
        if (!!navRoute.data && !!navRoute.data['privilege']) {
          navRoute.inNavBar = userStatus.privilegeList.includes(navRoute.data['privilege']);
        }
      })
      this.navRoutes$.next(newNavRoutes);
    });
  }

}
