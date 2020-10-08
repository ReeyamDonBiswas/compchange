import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from'@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataService {
private content=new BehaviorSubject<string>("Default Data");
public share=this.content.asObservable();
constructor(private http:HttpClient) { }
updateData(text){
  this.content.next(text);
}
getData(){
  let url  ="https://jsonplaceholder.typicode.com/todos";
  return this.http.get(url);
}
}
