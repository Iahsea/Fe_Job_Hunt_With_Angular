import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { Observable } from 'rxjs';
import { IPagination } from '../core/models/pagination';
import { BasePaginationAbstract } from '../core/abstracts/pagination.abstract';
import { IJobFilter } from '../core/models/filter';


@Injectable({
  providedIn: 'root'
})
export class JobService extends BasePaginationAbstract {
  constructor(private http: HttpClient) {
    super();
  }

  getJobByCompanyId(
    companyId: string,
    filterJob: IJobFilter,
    pagination: IPagination
  ): Observable<any> {
    // tạo HttpParams từ BaseService
    let params: HttpParams = this.buildPaginationParams(pagination, filterJob);
    const url = `${environment.apiBaseUrl}/jobs/company/${companyId}`;
    return this.http.get(url, { params });
  }
}
