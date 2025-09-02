import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-auth-layout',
  imports: [CommonModule, RouterModule, FooterComponent],
  templateUrl: './auth-layout.html',
  styleUrls: ['./auth-layout.scss']
})
export class AuthLayout {

}
