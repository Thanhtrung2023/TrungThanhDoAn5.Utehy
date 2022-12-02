import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-them-sua-lsp',
  templateUrl: './them-sua-lsp.component.html',
  styleUrls: ['./them-sua-lsp.component.css']
})
export class ThemSuaLspComponent implements OnInit {

  maloaisp:any
  tenloaisp:any;
  ghichuloaisp:any;
  @Input() lsp:any;

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.maloaisp=this.lsp.MaLoai;
    this.tenloaisp=this.lsp.TenLoai;
    this.ghichuloaisp=this.lsp.GhiChu;
  }

  themLoaiSP(){
    var val = {
      TenLoai:this.tenloaisp,
      GhiChu:this.ghichuloaisp
    };
    this.service.themLoaiSP(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  suaLoaiSP(){
    var val = {
      MaLoai:this.maloaisp,
      TenLoai:this.tenloaisp,
      GhiChu:this.ghichuloaisp
    };
    this.service.suaLoaiSP(val).subscribe(res=>{
      alert(res.toString());
    });
  }

}
