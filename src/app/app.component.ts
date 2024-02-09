import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';
import { ProductComponent } from './component/product/product.component';
import { NavComponent } from './units/nav/nav.component';
import { FootComponent } from './units/foot/foot.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductComponent,NavComponent,FootComponent,ContactComponent,HomeComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'E-cart';
  
}
