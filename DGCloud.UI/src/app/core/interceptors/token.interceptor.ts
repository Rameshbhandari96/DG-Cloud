import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  if(localStorage.getItem("token")!=null){
    const token =localStorage.getItem("token");
  //const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3RyaW5nIiwiVGVuYW50SWQiOiJkOGJlOThiNS0yZTU0LTRhNTItOWFmNS1hNDFiNmFkMmQzNDIiLCJhdWQiOlsiREdDTE9VRENMSUVOVCIsIkRHQ0xPVURDTElFTlQiXSwiZXhwIjoxNzI2MjQzOTc0LCJpc3MiOiJER0NMT1VEIn0.5-ZJtvuZZA9r1lZhuigI5h5xCDmDs3C12N6maglL4Ho';
    const clonedReq=req.clone({
      setHeaders:{
        Authorization:`Bearer ${token}`
      }
    });
    return next(clonedReq);
  }
  else{
    return next(req);
  }
  
};
