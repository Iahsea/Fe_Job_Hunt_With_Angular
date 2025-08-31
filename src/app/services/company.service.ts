import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { Observable } from 'rxjs';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private http: HttpClient) {
  }

  getCompany(
    name: string,
    address: string,
    description: string,
    pageSize: number,
    current: number,
    sortBy: string,
    order: string
  ): Observable<any> {
    let params = new HttpParams()
      .set('name', name)
      .set('address', address)
      .set('description', description)
      .set('pageSize', pageSize.toString())
      .set('current', current.toString());

    if (sortBy) params = params.set('sortBy', sortBy);
    if (order) params = params.set('order', order);
    return this.http.get<[Company]>(`${environment.apiBaseUrl}/companies`, { params });
  }

  getDetailCompany(companyId: string) {
    return this.http.get(`${environment.apiBaseUrl}/companies/${companyId}`);
  }
}
