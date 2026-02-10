import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './sixthDay/login/login.component';
import { AdminComponent } from './sixthDay/admin/admin.component';
import { authGuard } from './sixthDay/auth.guard';
import { unsavedChangesGuard } from './sixthDay/unsaved-changes.guard';
import { SignupComponent } from './sixthDay/signup/signup.component';
import { dataResolver } from './sixthDay/data.resolver';


const routes: Routes = [
  {
    path:'admin',component:AdminComponent,canActivate:[authGuard]
  },
  {
    path:'login',component:LoginComponent,canDeactivate:[unsavedChangesGuard]
  },
  {
    path:'sign-up/:id',component:SignupComponent,
    resolve:{ resolvedData: dataResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
