import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from 'express';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loggedUser =localStorage.getItem('loggedUser');
  if(loggedUser==null){
    router.navigateByUrl('/auth/login');
    return false;
  }
  return true;
};
