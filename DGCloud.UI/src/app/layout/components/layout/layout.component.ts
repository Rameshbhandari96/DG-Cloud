import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HorizontalNavbarComponent } from '../horizontal-navbar/horizontal-navbar.component';
import { VerticalNavbarComponent } from '../vertical-navbar/vertical-navbar.component';
import { ThemesComponent } from '../themes/themes.component';
import { SearchBoxModalComponent } from "../search-box-modal/search-box-modal.component";


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HorizontalNavbarComponent,
    VerticalNavbarComponent,
    ThemesComponent,
    SearchBoxModalComponent,
    RouterOutlet
],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
