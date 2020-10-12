import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {HttpClient} from'@angular/common/http'
import { catchError } from 'rxjs/operators';
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
getData():Observable<any>{
  let url  ="https://jsonplaceholder.typicode.com/todo";
  return this.http.get<any>(url).pipe(catchError(this.handleError));
}

print(val,containerId){
let el =document.createElement('li');
el.innerText=val;
document.getElementById(containerId).appendChild(el);
}
handleError(error){
return throwError(error.message||"server Error")
}
}
