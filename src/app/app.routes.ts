import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { ContactComponent } from './component/contact/contact.component';
import { SingleComponent } from './component/single/single.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'product',component:ProductComponent},
    {path:'contact',component:ContactComponent},
    {path:'product/:id',component:SingleComponent}
];
