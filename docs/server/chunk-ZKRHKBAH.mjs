import './polyfills.server.mjs';
import{a as F}from"./chunk-DE5OUPQD.mjs";import"./chunk-EDOPUDTE.mjs";import{e as Y}from"./chunk-FG3AUJKH.mjs";import"./chunk-V443I64Y.mjs";import{o as E}from"./chunk-YJATQK5N.mjs";import{$ as b,Fb as l,Gb as y,Hb as x,La as h,Mb as k,Ob as D,Pa as m,Sb as B,Ub as T,X as v,gb as _,ja as p,ka as f,mb as g,nb as w,ob as n,pb as r,qb as d,tb as S,xb as u,yb as C}from"./chunk-Z7GZ3Q2P.mjs";import{a as V}from"./chunk-FDOB7Q2K.mjs";import{g as I}from"./chunk-VVCT4QZE.mjs";var s=I(V());var P=(o,a)=>a.product._id,$=o=>["/orders",o];function N(o,a){if(o&1){let c=S();n(0,"div",5)(1,"div",7)(2,"div"),d(3,"img",8),r()(),n(4,"div",9)(5,"div")(6,"h3",10),l(7),r(),n(8,"p",11),l(9),r(),n(10,"button",12),u("click",function(){let e=p(c).$implicit,i=C();return f(i.confirmBox(e.product.id))}),d(11,"i",13),l(12,"remove"),r()(),n(13,"div",14)(14,"span",15),u("click",function(){let e=p(c).$implicit,i=C();return f(i.updatacount(e.product.id,e.count+1))}),d(15,"i",16),r(),n(16,"span"),l(17),r(),n(18,"span",15),u("click",function(){let e=p(c).$implicit,i=C();return f(i.updatacount(e.product.id,e.count-1))}),d(19,"i",17),r()()()()}if(o&2){let c=a.$implicit;m(3),_("src",c.product.imageCover,h)("alt",c.product.title),m(4),x(" ",c.product.title," "),m(2),x(" price: ",c.price,""),m(8),y(c.count)}}var z=(()=>{let a=class a{constructor(){this._CartService=v(F),this.CartDetails={}}ngOnInit(){this._CartService.getProductsCart().subscribe({next:t=>{console.log(t.data),this.CartDetails=t.data}})}removeitem(t){this._CartService.deleteSpecificCartItem(t).subscribe({next:e=>{console.log(e),this.CartDetails=e.data,this._CartService.CartNumber.set(e.numOfCartItems)}})}updatacount(t,e){e>0&&this._CartService.updataproductquantity(t,e).subscribe({next:i=>{console.log(i),this.CartDetails=i.data}})}removecart(){this._CartService.ClearCart().subscribe({next:t=>{console.log(t),t.message=="success"&&(this.CartDetails={},this._CartService.CartNumber.set(0))}})}confirmBox(t){s.default.fire({title:"Are you sure want to remove?",text:"You will not be able to recover this file!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, keep it"}).then(e=>{e.value?(s.default.fire("Deleted!","Your imaginary file has been deleted.","success"),this.removeitem(t)):e.dismiss===s.default.DismissReason.cancel&&s.default.fire("Cancelled","Your imaginary file is safe :)","error")})}confirmBoxClearCart(){s.default.fire({title:"Are you sure want to remove?",text:"You will not be able to recover this file!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, keep it"}).then(t=>{t.value?(s.default.fire("Deleted!","Your imaginary file has been deleted.","success"),this.removecart()):t.dismiss===s.default.DismissReason.cancel&&s.default.fire("Cancelled","Your imaginary file is safe :)","error")})}};a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=b({type:a,selectors:[["app-cart"]],standalone:!0,features:[k],decls:14,vars:7,consts:[[1,"bg-main-light","rounded-4","shadow","p-4","my-5","w-75","mx-auto","my-2","d-flex","flex-column","g-5"],[1,"h2","text-center","mb-2"],[1,"d-flex","align-items-center","justify-content-between"],[1,"btn","btn-outline-danger","btn-sm",3,"click"],[1,"text-main"],[1,"row","mb-1","border-bottom"],[1,"btn-main","mt-2",3,"routerLink"],[1,"col-md-1"],[1,"w-100",3,"src","alt"],[1,"col-md-11","d-flex","align-items-center","justify-content-between"],[1,"h5"],[1,"m-0","text-main"],[1,"text-danger","btn","p-0","cr",3,"click"],[1,"fa-solid","fa-trash"],[1,"d-flex","align-items-center","gap-2"],[1,"text-main","cr",3,"click"],[1,"fa-solid","fa-circle-plus","fa-2xl"],[1,"fa-solid","fa-circle-minus","fa-2xl"]],template:function(e,i){e&1&&(d(0,"br"),n(1,"section",0)(2,"h1",1),l(3,"Shop Cart"),r(),n(4,"div",2)(5,"button",3),u("click",function(){return i.confirmBoxClearCart()}),l(6,"Clear Cart"),r()(),n(7,"p",4),l(8),B(9,"currency"),r(),g(10,N,20,5,"div",5,P),n(12,"button",6),l(13,"Orders"),r()()),e&2&&(m(8),x("Total Cart Price:",T(9,2,i.CartDetails.totalCartPrice,"GBP"),""),m(2),w(i.CartDetails.products),m(2),_("routerLink",D(5,$,i.CartDetails._id)))},dependencies:[E,Y]});let o=a;return o})();export{z as CartComponent};