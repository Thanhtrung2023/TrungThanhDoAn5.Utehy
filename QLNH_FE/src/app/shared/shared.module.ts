import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './user/header/header.component';
import { MenuComponent } from './user/menu/menu.component';
import { FooterComponent } from './user/footer/footer.component';

@NgModule({
    declarations: [
        HeaderComponent,
        MenuComponent,
        FooterComponent,
        HeaderComponent
    ],
    imports: [
      CommonModule,
      RouterModule
    ],
    exports: [
        HeaderComponent,
        MenuComponent,
        FooterComponent,
        HeaderComponent
    ]
  })
  export class SharedModule { }
  