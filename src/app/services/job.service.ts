import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JobService {
  constructor(private http: HttpClient) {
  }

  getJobByCompanyId(
    companyId: string,
    name: string,
    skills: string,
    location: string,
    pageSize: number,
    current: number,
    sortBy: string,
    order: string
  ): Observable<any> {
    const params = new HttpParams()
      .set('name', name)
      .set('skills', skills)
      .set('location', location)
      .set('pageSize', pageSize.toString())
      .set('current', current.toString())
      .set('sortBy', sortBy)
      .set('order', order);
    const url = `${environment.apiBaseUrl}/jobs/company/${companyId}`;
    return this.http.get(url, { params });
  }
}
