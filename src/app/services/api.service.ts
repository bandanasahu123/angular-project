import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const getTopicsUrl = '/api/category/3'
const createTopicsUrl = '/api/topic/v1/create'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getAllTopics(): Observable<any> {
    return this.http.get(getTopicsUrl)
  }

  createTopic(data): Observable<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer e46abd4f-040f-44df-8b33-4c4b89ed45a0`)
    }

    return this.http.post(createTopicsUrl, data, header)
  }
}
