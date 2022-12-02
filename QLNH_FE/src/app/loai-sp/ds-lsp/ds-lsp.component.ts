import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-ds-lsp',
  templateUrl: './ds-lsp.component.html',
  styleUrls: ['./ds-lsp.component.css']
})
export class DsLspComponent implements OnInit {

  constructor(private service:SharedService) { }

  DSLoaiSP:any=[];
  lsp:any;
  dangThemSua:boolean=false;
  tieuDe:any;

  ngOnInit(): void {
    this.taiLaiDSLoaiSP();
  }

  taiLaiDSLoaiSP(){
    this.service.layDSLoaiSP().subscribe(data => {
      this.DSLoaiSP = data;
    })
  }

  themLoaiSP(){
    this.lsp={
      MaLoai:0,
      TenLoai:"",
      GhiChu:""
    }
    this.dangThemSua=true;
    this.tieuDe="Thêm Loại Sản Phẩm"
  }

  chiTietLoaiSP(lsp:any){
    this.lsp=lsp;
    this.dangThemSua=true;
    this.tieuDe="Sửa Loại Sản Phẩm"
  }

  xoaLoaiSP(lsp:any){
    if (confirm("Bạn có chắc muốn xóa?")){
      this.service.xoaLoaiSP(lsp.MaLoai).subscribe(
        data=>{
          alert(data.toString());
          this.taiLaiDSLoaiSP();
        }
      );
    }
  }

  dong(){
    this.dangThemSua=false;
    this.taiLaiDSLoaiSP();
    
  }

}
