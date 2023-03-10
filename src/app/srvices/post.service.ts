import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from './data.service';



@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService  {
  
  constructor( httpClient: HttpClient  ) { 

     super('https://jsonplaceholder.typicode.com/posts', httpClient)
  }
}


