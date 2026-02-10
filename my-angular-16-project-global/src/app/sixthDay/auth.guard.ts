import { CanActivateFn, Router } from '@angular/router';
import { AuthserviceService } from './authservice.service';
import { Inject,inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthserviceService)
  const router = inject(Router)

  if(authService.isLoggedIn()){

    console.log("true");
    return false
  }
  else{
    console.log("false");
    return router.parseUrl('/login');
  }
};
