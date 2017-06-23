import { NgModule } from '@angular/core';
import { MdSidenavModule, MdToolbarModule, MdIconModule } from '@angular/material';

import { NavComponent } from './components/nav/nav';
import { LayoutComponent } from './components/layout/layout';

@NgModule({
  declarations: [
    NavComponent,
    LayoutComponent
  ],
  imports: [
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule
  ],
  exports: [
    NavComponent,
    LayoutComponent
  ]
})
export class CoreModule {
}
