import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { environment } from '../../environments/environments';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public backendUrl = environment.imagesUrl;
}
