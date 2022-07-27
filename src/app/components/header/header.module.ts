import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, HeaderNavComponent],
})
export class HeaderModule {}
