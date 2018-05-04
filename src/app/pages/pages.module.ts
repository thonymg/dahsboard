import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NbSidebarModule, NbLayoutModule, NbSidebarService} from '@nebular/theme';

import {LoginComponent} from './login/login.component';

const pagesElements = [LoginComponent];


@NgModule({
  imports: [

    CommonModule,
    NbLayoutModule,
    NbSidebarModule
  ],
  declarations: [...pagesElements],
  exports: [...pagesElements],
  providers: [NbSidebarService]

})
export class PagesModule {}