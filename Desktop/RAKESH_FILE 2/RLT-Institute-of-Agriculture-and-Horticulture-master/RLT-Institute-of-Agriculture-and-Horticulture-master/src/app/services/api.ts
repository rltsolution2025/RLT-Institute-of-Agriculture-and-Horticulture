import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Api {
  private baseUrl = 'http://localhost:3000/api/contact';

  constructor(private http: HttpClient) { }

  submitContact(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl,data)
  }
}
