export interface IPagination {
    current: number;        // current page (bắt đầu từ 0 hoặc 1 tùy backend)
    pageSize: number;    // số bản ghi / trang
    totalItems: number;  // tổng số bản ghi

}
