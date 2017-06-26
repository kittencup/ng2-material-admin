import { NgModule } from '@angular/core';
import { MdSidenavModule, MdToolbarModule, MdIconModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutStrategy } from './components/layout/strategy/layout_strategy';
import { AdaptiveLayoutStrategy } from './components/layout/strategy/adaptive_layout_strategy';
import { LayoutComponent } from './components/layout/layout.compoent';
import { ResizeService } from './services/resize.service';
import { NavService } from './services/nav.service';
import { NavMenuComponent } from './components/nav/nav-menu/nav-menu.component';
import { NavItemComponent } from './components/nav/nav-item/nav-item.component';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    LayoutComponent,
    NavMenuComponent,
    NavItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule
  ],
  exports: [
    LayoutComponent
  ],
  providers: [
    LayoutStrategy,
    AdaptiveLayoutStrategy,
    ResizeService,
    NavService
  ]
})
export class CoreModule {
}
