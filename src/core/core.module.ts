import { NgModule } from '@angular/core';
import { MdSidenavModule, MdToolbarModule, MdIconModule } from '@angular/material';

import { LayoutComponent, LayoutStrategy } from './components/layout';
import { ResizeService } from './services';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule
  ],
  exports: [
    LayoutComponent
  ],
  providers: [
    LayoutStrategy,
    ResizeService
  ]
})
export class CoreModule {
}
