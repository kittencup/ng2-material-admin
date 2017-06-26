import { Component } from '@angular/core';
import { NavService } from '../../../services/nav.service';
import { NavNode } from "../nav.model";

@Component({
  selector: 'kp-nav-menu',
  templateUrl: './nav-menu.component.html'
})
export class NavMenuComponent {

  nodes: NavNode[] = [];
  currentUrl: string;

  constructor(protected navService: NavService) {
    this.navService.getNavNodes().subscribe((nodes) => {
      this.nodes = nodes;
    });
    this.navService.getCurrentUrl().subscribe((currentUrl) => {
      this.currentUrl = currentUrl;
    });
  }
}
