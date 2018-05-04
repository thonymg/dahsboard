import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router'; // we also need angular router for Nebular to function properly

import {NbThemeModule} from '@nebular/theme';

import {AppComponent} from './app.component';
import {PagesModule} from './pages/pages.module';
import {SharedModule} from './shared/shared.module';

import {appRoutes} from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NbThemeModule.forRoot({name: 'default'}),
    RouterModule.forRoot(appRoutes, { useHash: true }),
    PagesModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}