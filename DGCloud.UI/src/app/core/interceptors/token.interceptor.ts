import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token =localStorage.getItem("token");
  //const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3RyaW5nIiwiVGVuYW50SWQiOiJkOGJlOThiNS0yZTU0LTRhNTItOWFmNS1hNDFiNmFkMmQzNDIiLCJhdWQiOlsiREdDTE9VRENMSUVOVCIsIkRHQ0xPVURDTElFTlQiXSwiZXhwIjoxNzI2MjMyNTA2LCJpc3MiOiJER0NMT1VEIn0.ryalY38IWligCtha3PLSLlUELzuKqcmI02B-xJgohGg';
  const clonedReq=req.clone({
    setHeaders:{
      Authorization:`Bearer ${token}`
    }
  });
  return next(clonedReq);
};
