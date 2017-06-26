import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PointListComponent } from './components/point/point-list.component';

const routes: Routes = [
  {
    path: 'point-list',
    component: PointListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PointRoutingModule {
}
