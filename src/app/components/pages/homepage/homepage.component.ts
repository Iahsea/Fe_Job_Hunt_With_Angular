import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../services/company.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Company } from '../../../models/company';
import { map, Observable, tap } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { environment } from '../../../environments/environments';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { Pagination } from '../../../shared/components/pagination/pagination';
import { IPagination } from '../../../core/models/pagination';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    Pagination,
    MatFormFieldModule,
    MatInputModule,         // <-- cần cho matInput
    MatSelectModule,
    MatExpansionModule
  ],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  companies$!: Observable<Company[]>;

  // phân trang
  pagination: IPagination = {
    totalItems: 0,
    pageSize: 9,
    current: 0
  };

  filter = {
    name: '',
    address: '',
    description: '',
  };

  constructor(
    private companyService: CompanyService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getCompany();
  }


  getCompany() {
    debugger
    this.companies$ = this.companyService.getCompany
      (
        this.filter,
        { ...this.pagination, current: this.pagination.current + 1 }
      )
      .pipe(
        tap(res => {
          this.pagination.totalItems = res.data.meta.totalItems; // gán tổng số bản ghi từ backend
        }),
        map(res =>
          res.data.result.map((company: Company) => ({
            ...company,
            logo: `${environment.imagesUrl}/company/${company?.logo}` // thêm domain vào logo
          }
          ))
        ),
        tap(data => console.log("check", data))
      )
  }

  onPageChange(event: PageEvent) {
    debugger
    this.pagination.pageSize = event.pageSize;
    this.pagination.current = event.pageIndex;
    this.getCompany();
  }

  applyFilter() {
    this.pagination.current = 0;
    this.getCompany();
  }

  onCompanyClick(companyId: string) {
    debugger;
    // Điều hướng đến trang detail-company với companyId là tham số
    this.router.navigate(['/company', companyId]);
  }
}