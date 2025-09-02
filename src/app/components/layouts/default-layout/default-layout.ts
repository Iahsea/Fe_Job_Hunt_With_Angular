import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-default-layout',
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './default-layout.html',
  styleUrls: ['./default-layout.scss']
})
export class DefaultLayout {

}
