import{a as $}from"./chunk-HEZBV2E5.js";import{a as O}from"./chunk-LT6UCBYE.js";import{a as z,c as G,g as R,l as q}from"./chunk-EN3TMZMY.js";import{a as U}from"./chunk-AHP4XESX.js";import{d as j}from"./chunk-32RMYXYN.js";import{a as J}from"./chunk-CWWY3YV2.js";import{l as H}from"./chunk-XF2Y3HXU.js";import{a as D}from"./chunk-SLTK32QX.js";import"./chunk-6AUBK3KX.js";import{m as N}from"./chunk-H455QME5.js";import{Cb as l,Db as _,Eb as E,Fb as L,Gb as M,Hb as A,Ia as k,Jb as I,Kb as V,Lb as B,Ma as a,Pb as y,Rb as b,X as d,Xa as C,_ as F,bb as v,db as x,hb as u,ia as f,ib as W,ja as g,jb as S,kb as w,lb as o,mb as s,nb as p,qb as P,ub as T,vb as m}from"./chunk-EFTTM5UD.js";import"./chunk-CWTPBX7D.js";var K=(i,r)=>r.id,Q=i=>["/details",i],X=()=>[1,2,3,4,5];function Y(i,r){i&1&&(o(0,"span"),p(1,"i",12),s())}function Z(i,r){i&1&&p(0,"i",9)}function ee(i,r){if(i&1){let n=P();o(0,"span")(1,"i",13),T("click",function(){f(n);let t=m().$implicit,c=m();return g(c.addtoWishlist(t.id))}),s()()}}function te(i,r){i&1&&(o(0,"span"),p(1,"i",14),s())}function ie(i,r){if(i&1){let n=P();o(0,"div",2)(1,"div",3)(2,"div",4),p(3,"img",5),o(4,"h3",6),l(5),s(),o(6,"h4",7),l(7),s(),o(8,"div",8)(9,"span"),l(10),y(11,"currency"),s(),o(12,"div"),S(13,Y,2,0,"span",null,W),v(15,Z,1,0,"i",9),o(16,"span",10),l(17),s()()()(),v(18,ee,2,0,"span")(19,te,2,0,"span"),o(20,"button",11),T("click",function(){let t=f(n).$implicit,c=m();return g(c.addcart(t.id))}),l(21,"Add To Cart"),s()()()}if(i&2){let n=r.$implicit,e=m();a(2),x("routerLink",B(13,Q,n.id)),a(),x("src",n.imageCover,k)("alt",n.title),a(2),_(n.category.name),a(2),_(n.title.split(" ",2).join(" ")),a(3),E("",b(11,10,n.price,"GBP")," "),a(3),w(V(15,X).slice(0,n.ratingsAverage)),a(2),u(15,n.ratingsAverage%1!==0?15:-1),a(2),_(n.ratingsAverage),a(),u(18,e.wishlist.includes(n.id)?-1:18),a(),u(19,e.wishlist.includes(n.id)?19:-1)}}var ve=(()=>{let r=class r{constructor(){this._ProductsService=d(O),this._CategoriesService=d(U),this._CartService=d(D),this._ToastrService=d(H),this._WishlistService=d(J),this.productsList=C([]),this.CategoriesList=C([]),this.text="",this.wishlist=[]}ngOnInit(){this._CategoriesService.getAllcategories().subscribe({next:e=>{console.log(e.data),this.CategoriesList.set(e.data)}}),this._ProductsService.getAllproduct().subscribe({next:e=>{console.log(e.data),this.productsList.set(e.data)}}),this._WishlistService.getproducToWishList().subscribe({next:e=>{console.log(e);let t=e.data.map(c=>c._id);this.wishlist=t}})}addcart(e){this._CartService.addProductToCart(e).subscribe({next:t=>{console.log(t),this._ToastrService.success(t.message,"FreshCart"),this._CartService.CartNumber.set(t.numOfCartItems)}})}addtoWishlist(e){this._WishlistService.addproductToWishlist(e).subscribe({next:t=>{console.log(t.data),this.wishlist=t.data,this._ToastrService.success(t.message,"Wishlist")}})}};r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=F({type:r,selectors:[["app-product"]],standalone:!0,features:[I],decls:8,vars:4,consts:[["type","search","placeholder","Search by Name",1,"form-control","w-50","mx-auto","my-5",3,"ngModelChange","ngModel"],[1,"row","g-3"],[1,"col-md-2"],[1,"product","p-2"],[3,"routerLink"],[1,"w-100",3,"src","alt"],[1,"small","text-main"],[1,"h6"],[1,"d-flex","justify-content-between","align-items-center"],[1,"fa-solid","fa-star-half-stroke","rating-color"],[1,"text-muted"],[1,"btn-main","w-100",3,"click"],[1,"fas","fa-star","rating-color"],[1,"far","fa-heart","heart",3,"click"],[1,"fas","fa-heart","heart","text-danger"]],template:function(t,c){t&1&&(o(0,"section")(1,"h2"),l(2,"popular Products:"),s(),o(3,"input",0),A("ngModelChange",function(h){return M(c.text,h)||(c.text=h),h}),s(),o(4,"div",1),S(5,ie,22,16,"div",2,K),y(7,"search"),s()()),t&2&&(a(3),L("ngModel",c.text),a(2),w(b(7,1,c.productsList(),c.text)))},dependencies:[j,N,q,z,G,R,$]});let i=r;return i})();export{ve as ProductComponent};
