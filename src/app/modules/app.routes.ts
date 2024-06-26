import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from '../components/details/details.component';

const routes: Routes = [
    {path: 'details', component: DetailsComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutesModule { }