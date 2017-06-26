import { LayoutStrategy } from './layout_strategy';
import { Injectable } from '@angular/core';
import { ResizeService } from '../../../services/resize.service';

@Injectable()
export class AdaptiveLayoutStrategy extends LayoutStrategy {

  constructor(protected resizeService: ResizeService) {
    super();
    resizeService.getWitdh().subscribe((width: number) => {
      if (width <= 768) {
        this.opened.next(false);
        this.mode.next('over');
      } else {
        this.opened.next(true);
        this.mode.next('side');
      }
    });
  }
}
