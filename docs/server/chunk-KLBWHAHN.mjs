import './polyfills.server.mjs';
import{a as A}from"./chunk-BUPGDCJP.mjs";import{a as b}from"./chunk-EXJZTPRA.mjs";import"./chunk-EDOPUDTE.mjs";import"./chunk-FG3AUJKH.mjs";import"./chunk-V443I64Y.mjs";import"./chunk-YJATQK5N.mjs";import{$ as x,Fb as i,Gb as s,Hb as m,La as h,Mb as g,Pa as n,X as c,_a as S,gb as f,lb as p,mb as v,nb as u,ob as e,pb as t,qb as y,yb as _}from"./chunk-Z7GZ3Q2P.mjs";import"./chunk-VVCT4QZE.mjs";function E(a,r){if(a&1&&(e(0,"div",3)(1,"div",4)(2,"div"),y(3,"img",5),t()(),e(4,"div",6)(5,"div",7)(6,"div")(7,"h3",8),i(8),t(),e(9,"p",9),i(10),t(),e(11,"p",9),i(12),t()(),e(13,"div",10)(14,"p",11),i(15," is delivered: "),e(16,"span"),i(17),t()(),e(18,"p",11),i(19," is paied: "),e(20,"span"),i(21),t()(),e(22,"p",11),i(23," payment type method: "),e(24,"span"),i(25),t()()()()()()),a&2){let o=r.$implicit,l=_().$implicit;n(3),f("src",o.product.imageCover,h),n(5),m(" title: ",o.product.title,""),n(2),m(" count: ",o.count,""),n(2),m(" price: ",o.price,""),n(5),s(l.isDelivered),n(4),s(l.isPaid),n(4),s(l.paymentMethodType)}}function I(a,r){if(a&1&&(e(0,"div",2),v(1,E,26,7,"div",3,p),t()),a&2){let o=r.$implicit;n(),u(o.cartItems)}}var M=(()=>{let r=class r{constructor(){this._OrdersService=c(A),this._AuthService=c(b),this.userid="",this.AllOrdersList=S([])}ngOnInit(){this._AuthService.SaveUserData(),this.userid=this._AuthService.userData.id,this._OrdersService.getUserOrders(this.userid).subscribe({next:l=>{console.log(l),this.AllOrdersList.set(l)}})}};r.\u0275fac=function(d){return new(d||r)},r.\u0275cmp=x({type:r,selectors:[["app-allorders"]],standalone:!0,features:[g],decls:5,vars:0,consts:[[1,"bg-main-light","rounded-4","shadow","p-4","my-5","w-75","mx-auto"],[1,"h2","py-3","text-center"],[1,"border","p-5","mb-3"],[1,"row","border-bottom","align-items-center","py-4"],[1,"col-md-1"],["alt","",1,"w-100",3,"src"],[1,"col-md-11"],[1,"d-flex","justify-content-center","align-items-center"],[1,"h6","text-main","small"],[1,"text-uppercase","mb-0"],[1,"py-3","order-details","mt-4","w-50","mx-auto"],[1,"text-capitalize","mb-0","p-1","small"]],template:function(d,C){d&1&&(e(0,"section",0)(1,"h1",1),i(2,"All Orders"),t(),v(3,I,3,0,"div",2,p),t()),d&2&&(n(3),u(C.AllOrdersList()))},styles:[".order-details[_ngcontent-%COMP%]{border:2px solid black}"]});let a=r;return a})();export{M as AllordersComponent};
