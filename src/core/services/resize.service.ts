import { Injectable } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class ResizeService {

  protected width = new ReplaySubject<number>(window.innerWidth);
  protected height = new ReplaySubject<number>(window.innerHeight);

  constructor(private eventManager: EventManager) {
    eventManager.addGlobalEventListener('window', 'resize', (event: Event) => {
      this.width.next((<Window>event.target).innerWidth);
      this.height.next((<Window>event.target).innerHeight);
    });
  }

  getWitdh(): ReplaySubject<number> {
    return this.width;
  }

  getHeight(): ReplaySubject<number> {
    return this.height;
  }
}
