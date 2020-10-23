import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:8080/api/tutorials'

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseURL)
  }

  get(id): Observable<any> {
    return this.http.get(`${baseURL}/${id}`)
  }

  create(data): Observable<any> {
    return this.http.post(baseURL, data)
  }
}
