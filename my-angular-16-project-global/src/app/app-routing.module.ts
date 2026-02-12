import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './day-three/about/about.component';
import { LoginComponent } from './day-three/login/login.component';
import { CareerComponent } from './day-three/career/career.component';


const routes: Routes = [
  {
    path:'customers',
    loadChildren:() => import('./customer/customer.module').then(m => m.CustomerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
