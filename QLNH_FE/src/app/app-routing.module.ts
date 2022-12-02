import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ThucDonComponent } from './thuc-don/thuc-don.component';
import { MonAnComponent } from './mon-an/mon-an.component';
import { NguoiDungComponent } from './nguoi-dung/nguoi-dung.component';
import { LoaiSpComponent } from './loai-sp/loai-sp.component';
import { AdminComponent } from './admin/admin.component';
import { LSPComponent } from './QuanTri/lsp/lsp.component';
import { AdminnshowComponent } from './QuanTri/adminnshow/adminnshow.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: 'thucdon', component:ThucDonComponent},
  {path: 'admin/monan', component:MonAnComponent},
  {path: 'test/loaisp', component:LoaiSpComponent},
  {path: 'dangnhap', component:NguoiDungComponent},  
  {path: 'lsp', component:LSPComponent},
  {path: 'homeadmin', component:AdminnshowComponent},
  {path: '', component:UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
