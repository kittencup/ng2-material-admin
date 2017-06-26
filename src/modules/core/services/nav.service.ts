import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { NavNode } from '../components/nav/nav.model';
import { Subject } from "rxjs/Subject";

@Injectable()
export class NavService {

  navNodes: Observable<NavNode[]>;
  currentUrl: Subject<string> = new Subject<string>();

  constructor(protected http: Http, protected router: Router) {
    this.navNodes = this.fetchNavNodes();
    router.events.subscribe((state) => {
      if (state instanceof NavigationEnd) {
        this.currentUrl.next(state.url);
      }
    })
  }

  protected fetchNavNodes(): Observable<NavNode[]> {
    return this.http.get('assets/nav-nodes.json')
      .map(res => res.json() as NavNode[]);
  }

  getNavNodes(): Observable<NavNode[]> {
    return this.navNodes;
  }

  getCurrentUrl(): Subject<string> {
    return this.currentUrl;
  }
}
