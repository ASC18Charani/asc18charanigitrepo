// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-dashboard',
//   // standalone: true,
//   // imports: [],
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent {

// }


import { Component } from '@angular/core';
import { AuthGuardService } from '../service/auth-guard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private authguardService: AuthGuardService) {}

  logout() {
    this.authguardService.logout();
  }
}

