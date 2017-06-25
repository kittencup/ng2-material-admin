import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { modeType, LayoutStrategyInterface } from './layout_strategy_interface';

@Injectable()
export class LayoutStrategy implements LayoutStrategyInterface {

  protected mode: BehaviorSubject<modeType> = new BehaviorSubject<modeType>('side');
  protected opened: BehaviorSubject<boolean> = new BehaviorSubject(true);

  getMode(): BehaviorSubject<modeType> {
    return this.mode;
  }

  setMode(mode: modeType): LayoutStrategyInterface {
    this.mode.next(mode);
    return this;
  }

  getOpened(): BehaviorSubject<boolean> {
    return this.opened;
  }

  setOpened(opened: boolean): LayoutStrategyInterface {
    this.opened.next(opened);
    return this;
  }
}
