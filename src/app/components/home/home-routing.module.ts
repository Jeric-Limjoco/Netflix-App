import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from '../details/details.component';





const routes: Routes = [
  {
    path: 'details',
    component: DetailsComponent,
    loadChildren:() => import('../details/details.component').then(m => m.DetailsComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
