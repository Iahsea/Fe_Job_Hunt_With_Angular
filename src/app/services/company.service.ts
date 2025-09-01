import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { Observable } from 'rxjs';
import { Company } from '../models/company';
import { IPagination } from '../core/models/pagination';
import { BasePaginationAbstract } from '../core/abstracts/pagination.abstract';
import { ICompanyFilter } from '../core/models/filter';

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends BasePaginationAbstract {
  constructor(private http: HttpClient) {
    super();
  }

  getCompany(
    filterCompany: ICompanyFilter,
    pagination: IPagination
  ): Observable<any> {
    // tạo HttpParams từ BaseService
    let params: HttpParams = this.buildPaginationParams(pagination, filterCompany);
    return this.http.get<[Company]>(`${environment.apiBaseUrl}/companies`, { params });
  }

  getDetailCompany(companyId: string) {
    return this.http.get(`${environment.apiBaseUrl}/companies/${companyId}`);
  }
}
