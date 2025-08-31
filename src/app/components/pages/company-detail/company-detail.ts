import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CompanyService } from '../../../services/company.service';
import { Company } from '../../../models/company';
import { map, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environments';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { JobService } from '../../../services/job.service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Pagination } from '../../../core/components/pagination/pagination';
import { IPagination } from '../../../core/models/pagination';

@Component({
  selector: 'app-company-detail',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatToolbarModule,
    MatChipsModule,
    Pagination
  ],
  templateUrl: './company-detail.html',
  styleUrl: './company-detail.scss'
})
export class CompanyDetail implements OnInit {
  company$!: Observable<Company>;
  isExpanded = false;

  job$!: Observable<any[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private companyService: CompanyService,
    private jobService: JobService
  ) { }

  // phân trang
  pagination: IPagination = {
    totalItems: 0,
    pageSize: 1,
    current: 0
  };

  // filter cơ bản
  filter = {
    name: '',
    skills: '',
    location: '',
    sortBy: 'createdAt',
    order: 'desc'
  };


  ngOnInit(): void {
    const idParam = this.activatedRoute.snapshot.paramMap.get('id');
    debugger
    if (idParam) {
      this.getCompanyById(idParam);
      this.getJobByCompanyId(idParam);
    }
  }


  getCompanyById(companyId: string): void {
    this.company$ = this.companyService.getDetailCompany(companyId).pipe(
      map((res: any) => ({
        ...res.data,
        logo: `${environment.imagesUrl}/company/${res.data?.logo}`
      }))
    );
  }

  toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
  }

  getJobByCompanyId(companyId: string): void {
    debugger
    this.job$ = this.jobService.getJobByCompanyId(
      companyId,
      this.filter.name,
      this.filter.skills,
      this.filter.location,
      this.pagination.pageSize,
      this.pagination.current + 1,
      this.filter.sortBy,
      this.filter.order
    ).pipe(
      tap((res: any) => {
        this.pagination.totalItems = res.data.meta.totalItems;
      }),
      map((res: any) =>
        res.data.result.map((job: any) => {
          debugger;
          return {
            ...job,
            logo: job.logoJob
              ? `${environment.imagesUrl}/job/${job.logoJob}`
              : `${environment.imagesUrl}/company/${job.company?.logo || 'default.png'}`
          };
        })
      )
    );
  }

  onPageChange(event: PageEvent) {
    debugger
    this.pagination.pageSize = event.pageSize;
    this.pagination.current = event.pageIndex;
    const idParam = this.activatedRoute.snapshot.paramMap.get('id');
    if (idParam) {
      this.getJobByCompanyId(idParam); // truyền lại id vào
    }
  }

}
