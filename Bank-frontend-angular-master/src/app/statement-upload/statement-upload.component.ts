import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-statement-upload',
  templateUrl: './statement-upload.component.html',
  styleUrls: ['./statement-upload.component.css']
})
export class StatementUploadComponent implements OnInit {
  message: any = null;
  selectedFile:any = null;
  msg : String = '';
  constructor(private http: HttpClient,private _router:Router) { }

  fileSelected(event:any){
    this.selectedFile = <File>event.target.files[0];
    console.log(event);
  }

  graphdisplay(graphdisplay:any){
    this._router.navigate(['graphdisplay']);
  }

  data(){
    const fd = new FormData();
    fd.append('file',this.selectedFile,this.selectedFile.name)
    this.http.post('http://127.0.0.1:5000/bankaccount',fd)
    .subscribe(res=>{
      console.log(res);
      this.message = res;
      this.msg = this.message.message;
    });
  }

  ngOnInit(): void {
  }

}
