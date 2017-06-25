import { Component } from '@angular/core';
import { LayoutStrategy } from './strategy/layout_strategy';
import { modeType } from './strategy/layout_strategy_interface';

@Component({
  selector: 'kp-layout',
  templateUrl: 'layout.component.html',
  styleUrls: ['layout.component.css']
})
export class LayoutComponent {

  opened: boolean;
  mode: modeType;

  constructor(strategy: LayoutStrategy) {
    strategy.getOpened().subscribe(opened => this.opened = opened);
    strategy.getMode().subscribe(mode => this.mode = mode);
  }
}
