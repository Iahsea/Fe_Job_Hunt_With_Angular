import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-pagination',
  imports: [CommonModule, MatPaginatorModule],
  templateUrl: './pagination.html',
  styleUrl: './pagination.scss'
})
export class Pagination {
  @Input() length = 0;         // total items
  @Input() pageSize = 10;      // default page size
  @Input() pageIndex = 0;      // current page
  @Input() pageSizeOptions: number[] = [5, 10, 20, 50];  // tuỳ chọn page size

  @Output() pageChange = new EventEmitter<PageEvent>();

  onPageChange(event: PageEvent) {
    this.pageChange.emit(event);
  }
}
