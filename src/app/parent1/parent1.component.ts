import { Component, OnInit } from '@angular/core';
import {DataService} from '.././data.service'
@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {
text='';
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.data.share.subscribe(x=>this.text=x);
  }

}
