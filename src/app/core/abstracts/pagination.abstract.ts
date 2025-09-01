import { HttpParams } from '@angular/common/http';
import { IPagination } from '../models/pagination';

export abstract class BasePaginationAbstract {
    protected buildPaginationParams(pagination: IPagination): HttpParams {
        debugger
        let params = new HttpParams()
            .set('current', pagination.current.toString())
            .set('pageSize', pagination.pageSize.toString());

        if (pagination.sortBy) {
            debugger
            params = params.set('sortBy', pagination.sortBy);
        }
        if (pagination.order) {
            debugger
            params = params.set('order', pagination.order);
        }
        return params;
    }
}
