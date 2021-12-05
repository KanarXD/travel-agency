import {Component} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  routeList: { title: string, link: string, exact?: boolean }[] = [
    {title: 'HOME', link: '', exact: true},
    {title: 'OFFERS', link: 'offers', exact: false},
    {title: 'EMPLOYEES', link: 'employees', exact: false},
  ];


}
