import { Component, Input, OnChanges } from '@angular/core';
import { NavNode } from "../nav.model";

@Component({
  selector: 'kp-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent implements OnChanges {

  @Input() node: NavNode;
  @Input() level: number = 1;
  @Input() currentUrl: string;

  classes: {[index: string]: boolean};
  nodeChildren: NavNode[];
  isExpanded: boolean = false;
  isSelected: boolean = false;

  ngOnChanges() {
    this.nodeChildren = this.node && this.node.children ? this.node.children : [];
    this.isSelected = this.checkUrlIsSelected();
    console.log(this.node.title);
    console.log(this.isSelected);
    this.isExpanded = this.isSelected;
    this.setClasses();
  }

  setClasses() {
    this.classes = {
      ['level-' + this.level]: true,
      collapsed: !this.isExpanded,
      expanded: this.isExpanded,
      selected: this.isSelected
    };
  }

  headerClicked() {
    this.isExpanded = !this.isExpanded;
    this.setClasses();
  }

  checkUrlIsSelected(node: NavNode = this.node): boolean {
    let isSelected = false;
    if (!this.currentUrl) {
      isSelected = false;
    } else if (node.url === this.currentUrl) {
      isSelected = true;
    } else {
      if (node.children && node.children.length) {
        node.children.forEach((node: NavNode) => {
          if (this.checkUrlIsSelected(node)) {
            isSelected = true;
          }
        });
      }
    }
    return isSelected;
  }
}
