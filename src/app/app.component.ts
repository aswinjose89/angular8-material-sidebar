import { Component , ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular8-material-sidebar';
  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;
   isExpanded = true;
   showSubmenu: boolean = false;
   isShowing = false;
   showSubSubMenu: boolean = false;

   mouseenter() {
     if (!this.isExpanded) {
       this.isShowing = true;
     }
   }

   mouseleave() {
     if (!this.isExpanded) {
       this.isShowing = false;
     }
   }
}
