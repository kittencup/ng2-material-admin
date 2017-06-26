import { NgModule } from '@angular/core';

import { PointListComponent } from './components/point/point-list.component';
import { PointRoutingModule } from './routing.module';

@NgModule({
  declarations: [
    PointListComponent
  ],
  imports: [
    PointRoutingModule
  ],
  exports: [
    PointListComponent
  ]
})
export class PointModule {
}
