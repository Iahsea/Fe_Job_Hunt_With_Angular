import { HttpParams } from '@angular/common/http';
import { IPagination } from '../models/pagination';

export abstract class BaseService {
    protected buildPaginationParams(pagination: IPagination): HttpParams {
        let params = new HttpParams()
            .set('page', pagination.current.toString())
            .set('pageSize', pagination.pageSize.toString());

        if (pagination.sortBy) {
            params = params.set('sortBy', pagination.sortBy);
        }
        if (pagination.order) {
            params = params.set('order', pagination.order);
        }
        return params;
    }
}
