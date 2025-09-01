import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { Observable } from 'rxjs';
import { Company } from '../models/company';
import { IPagination } from '../core/models/pagination';
import { BaseService } from '../core/abstracts/base.abstract';

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  getCompany(
    name: string,
    address: string,
    description: string,
    pagination: IPagination
  ): Observable<any> {
    // tạo HttpParams từ BaseService
    let params: HttpParams = this.buildPaginationParams(pagination);

    if (name) params = params.set('name', name);
    if (address) params = params.set('address', address);
    if (description) params = params.set('description', description);
    return this.http.get<[Company]>(`${environment.apiBaseUrl}/companies`, { params });
  }

  getDetailCompany(companyId: string) {
    return this.http.get(`${environment.apiBaseUrl}/companies/${companyId}`);
  }
}
