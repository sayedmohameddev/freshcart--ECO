import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {


  // req --> Api App
  // logic



   if( localStorage.getItem('userToken') !== null ){

     if(req.url.includes('cart') || req.url.includes('wishlist') || req.url.includes('orders')  ){

      req = req.clone(  { 
        setHeaders:{ token:localStorage.getItem('userToken') ! }
       }  )
      }
    

   }
  return next(req);    // response BackEnd
};
