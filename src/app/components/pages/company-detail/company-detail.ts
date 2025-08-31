import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CompanyService } from '../../../services/company.service';
import { Company } from '../../../models/company';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environments';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';

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
  ],
  templateUrl: './company-detail.html',
  styleUrl: './company-detail.scss'
})
export class CompanyDetail implements OnInit {
  company$!: Observable<Company>;
  isExpanded = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private companyService: CompanyService,
  ) { }


  ngOnInit(): void {
    const idParam = this.activatedRoute.snapshot.paramMap.get('id');
    debugger
    if (idParam) {
      this.getCompanyById(idParam);
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


}
