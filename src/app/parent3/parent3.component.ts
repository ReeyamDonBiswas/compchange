import { Component, OnInit } from '@angular/core';
import {DataService} from '.././data.service'
@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.css']
})
export class Parent3Component implements OnInit {
text='';
text1='';
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.data.share.subscribe(x=>this.text1=x)
  
  }

  updateText(text){
    this.data.updateData(text);
    this.data.share.subscribe(x=>this.text1=x)
  }
}
