import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
  animations: [
    trigger('widthGrow', [
      state('closed', style({
        width: 0,
      })),
      state('open', style({
        width: 400
      })),
      transition('* => *', animate(150))
    ]),
  ]
})
export class NavMenuComponent {
  isExpanded = false;
  largeSidebar = true;
  miniSidebar = false;
  listHomeSidebar = false;
  listCreateSidebar = false;
  listReportSidebar = false;
  changeLogo = true;

  collapse() {
    this.isExpanded = true;
    this.largeSidebar = false;
    this.miniSidebar = true;
  }

  openNav() {
    this.isExpanded = !this.isExpanded;
    this.largeSidebar = true;
    this.miniSidebar = false;
  }
  state = "closed";

  changeState(): void {
    (this.state == "closed") ? this.state = "open" : this.state = "closed";
  }
  ChangeLogo() {
    (this.changeLogo == true) ? this.changeLogo = false : this.changeLogo = true;
  }
  MouseOverHome() {
    this.listHomeSidebar = true;
  }
  MouseLeaveHome() {
    this.listHomeSidebar = false;
  }
  MouseOverCreate() {
    this.listCreateSidebar = true;
  }
  MouseLeaveCreate() {
    this.listCreateSidebar = false;
  }
  MouseOverReport() {
    this.listReportSidebar = true;
  }
  MouseLeaveReport() {
    this.listReportSidebar = false;
  }
}
