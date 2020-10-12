import { Component, OnInit } from '@angular/core';
import { concat, from, interval, merge, Observable, of } from 'rxjs';
import {DataService} from '.././data.service';

import { map, take } from 'rxjs/operators';
import { promise } from 'protractor';
@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {
text='';
  constructor(private data:DataService  ) { }
  
data1='';
data2='';

  ngOnInit(): void {
    this.data.share.subscribe(x=>this.text=x);
    const sourcetech= interval(2000).pipe(map(v=>'sourcetech # ' +(v+1)),take(5));
    const sourcecom= interval(3000).pipe(map(v=>'sourcecom # ' +(v+1)),take(4));
    const sourcetip= interval(1000).pipe(map(v=>'sourcetip # ' +(v+1)),take(3));
    
    const finalObs1=concat(sourcetech,sourcecom,sourcetip);
    const finalObs2=merge(sourcetech,sourcecom,sourcetip);
    finalObs1.subscribe(res=>{
      console.log(res);
      //this._du.print(res,'elContainer')
      this.data1=res;
    })
    finalObs2.subscribe(res=>{
      console.log(res);
      //this._du.print(res,'elContainer')
      this.data2=res;
    })
  
    //  const person :Person={
    //    name:'david'
    //  };
    //  const personObs:Observable<Person >=of(person);
    //  personObs.subscribe(dat=>{
    //    console.log(dat);
       
    //  })

    //  const personPromise:Promise<Person> = Promise.resolve(person);
    //  const personOb:Observable<Person>=from(person);
    //  personOb.subscribe(dat=>{
    //    console.log(dat);
       
    //  })

      
  }

}
