import { HttpParams } from '@angular/common/http';
import { IPagination } from '../models/pagination';
import { IJobFilter } from '../models/filter';

export abstract class BasePaginationAbstract {
    protected buildPaginationParams(pagination: IPagination, filter: IJobFilter): HttpParams {
        debugger
        let params = new HttpParams()
            .set('current', pagination.current.toString())
            .set('pageSize', pagination.pageSize.toString());

        if (filter.sortBy) {
            debugger
            params = params.set('sortBy', filter.sortBy);
        }
        if (filter.order) {
            debugger
            params = params.set('order', filter.order);
        }
        if (filter.name) {
            params = params.set('name', filter.name || '');
        }
        if (filter.skills) {
            params = params.set('skills', filter.skills || '');
        }
        if (filter.location) {
            params = params.set('location', filter.location || '');
        }
        return params;
    }
}
