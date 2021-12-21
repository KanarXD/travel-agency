import {Component} from '@angular/core';
import {NavRoutes} from "../../../shared/utils/app.models";
import {Router, RouterStateSnapshot} from "@angular/router";
import {appNavRoutes} from "../../../app-routing.module";
import {interval, Observable} from "rxjs";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  navRoutes: NavRoutes = appNavRoutes;

  routeList: { title: string, link: string, exact?: boolean }[] = [
    {title: 'HOME', link: '', exact: true},
    {title: 'OFFERS', link: 'offers', exact: false},
    {title: 'EMPLOYEES', link: 'employees', exact: false},
  ];

  constructor(
    private router: Router
  ) {
    interval().subscribe(() => {
      console.log('interval');
      let snapshot: RouterStateSnapshot = router.routerState.snapshot;
      // if (this.navRoutes[0].canActivate != null) {
        if (this.navRoutes[1]?.canActivate?.every((value: boolean) => value)) {
          console.log(JSON.stringify(this.navRoutes));
          // console.log(JSON.stringify(snapshot));

        }
      // }
    });

  }

}
