import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export type modeType = 'over' | 'push' | 'side';

export interface LayoutStrategyInterface {
  setMode(mode: modeType): LayoutStrategyInterface
  getMode(): BehaviorSubject<modeType>
  setOpened(opened: boolean): LayoutStrategyInterface
  getOpened(): BehaviorSubject<boolean>
}

