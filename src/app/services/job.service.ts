import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { Observable } from 'rxjs';
import { IPagination } from '../core/models/pagination';
import { BaseService } from '../core/abstracts/base.abstract';


@Injectable({
  providedIn: 'root'
})
export class JobService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  getJobByCompanyId(
    companyId: string,
    name: string,
    skills: string,
    location: string,
    pagination: IPagination
  ): Observable<any> {
    // tạo HttpParams từ BaseService
    let params: HttpParams = this.buildPaginationParams(pagination);

    // thêm các filter riêng của Job
    if (name) params = params.set('name', name);
    if (skills) params = params.set('skills', skills);
    if (location) params = params.set('location', location);

    const url = `${environment.apiBaseUrl}/jobs/company/${companyId}`;
    return this.http.get(url, { params });
  }
}
