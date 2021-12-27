import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphdisplay',
  templateUrl: './graphdisplay.component.html',
  styleUrls: ['./graphdisplay.component.css']
})
export class GraphdisplayComponent implements OnInit {

  image = '';
  image$ :Promise<any>;
  imgLoad:any

  constructor() {
    this.image$ = this.displayImage(this.image);
   }

  ngOnInit(): void {
  }

  displayData():void{
    this.image = `http://127.0.0.1:5000/graph?time=${Date.now()}`;
    this.image$ = this.displayImage(this.image);
  }

  displayImage(src:string) {
    return new Promise((resolve, reject) => {
      resolve(src);
    });
  }

}
