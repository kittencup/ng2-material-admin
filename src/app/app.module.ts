import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app';
import { AdaptiveLayoutStrategy, LayoutStrategy, CoreModule } from '../modules/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    RouterModule.forRoot([{
      path: 'point',
      loadChildren: 'modules/point/module#PointModule'
    }])
  ],
  providers: [
    {
      provide: LayoutStrategy,
      useClass: AdaptiveLayoutStrategy
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
