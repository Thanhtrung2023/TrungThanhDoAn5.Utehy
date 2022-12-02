import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThucDonComponent } from './thuc-don/thuc-don.component';
import { DsTDonComponent } from './thuc-don/ds-t-don/ds-t-don.component';
import { ThemSuaTDonComponent } from './thuc-don/them-sua-t-don/them-sua-t-don.component';
import { MonAnComponent } from './mon-an/mon-an.component';
import { DsMAnComponent } from './mon-an/ds-m-an/ds-m-an.component';
import { ThemSuaMAnComponent } from './mon-an/them-sua-m-an/them-sua-m-an.component';

import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NguoiDungComponent } from './nguoi-dung/nguoi-dung.component';
import { LoaiSpComponent } from './loai-sp/loai-sp.component';
import { DsLspComponent } from './loai-sp/ds-lsp/ds-lsp.component';
import { ThemSuaLspComponent } from './loai-sp/them-sua-lsp/them-sua-lsp.component';
import { AdminComponent } from './admin/admin.component';
import { LSPComponent } from './QuanTri/lsp/lsp.component';
import { AdminnshowComponent } from './QuanTri/adminnshow/adminnshow.component';
import { SharedModule } from './shared/shared.module';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { UserComponent } from './user/user.component';
import { HeaderuserComponent } from './user/headeruser/headeruser.component';

@NgModule({
  declarations: [
    AppComponent,
    ThucDonComponent,
    DsTDonComponent,
    ThemSuaTDonComponent,
    MonAnComponent,
    DsMAnComponent,
    ThemSuaMAnComponent,
    NguoiDungComponent,
    LoaiSpComponent,
    DsLspComponent,
    ThemSuaLspComponent,
    AdminComponent,
    LSPComponent,
    AdminnshowComponent,
    UserComponent,
    HeaderuserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserModule,
    BrowserTestingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
