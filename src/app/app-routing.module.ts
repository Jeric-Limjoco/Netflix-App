import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
// import { DetailsComponent } from './components/details/details.component';



const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    loadChildren: () => import('./components/navbar/navbar.component').then(m => m.NavbarComponent)
  },
  {
    path: '',
    component: HomeComponent,
    loadChildren: ()  => import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: '',
    component: FooterComponent,
    loadChildren: () => import('./components/footer/footer.component').then(m => m.FooterComponent)
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
