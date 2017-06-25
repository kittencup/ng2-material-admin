import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '../core/core.module';
import { AppComponent } from './app';
import { AdaptiveLayoutStrategy, LayoutStrategy } from '../core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [
    {
      provide: LayoutStrategy,
      useClass: AdaptiveLayoutStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
