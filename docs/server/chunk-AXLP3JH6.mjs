import './polyfills.server.mjs';
import{a as X}from"./chunk-EXJZTPRA.mjs";import{a as K,d as W}from"./chunk-F7ZOJNH3.mjs";import{a as Y,b as J,c as Q}from"./chunk-LHDURCOB.mjs";import{a as $,b as q}from"./chunk-HQJU4LVT.mjs";import{a as Z}from"./chunk-DE5OUPQD.mjs";import{b as f,d as U,e as v,f as C,g as G,h as z}from"./chunk-FG3AUJKH.mjs";import{e as N,h as _}from"./chunk-V443I64Y.mjs";import{A as H,B as V,p as F,s as M,z as j}from"./chunk-YJATQK5N.mjs";import{$ as c,E as D,Fb as l,Gb as E,Mb as m,Pa as w,R as h,S as L,U as g,W as I,X as d,aa as B,ea as A,gb as b,k as S,ob as n,oc as T,pb as i,pc as R,qb as r,ua as P,x,xb as k}from"./chunk-Z7GZ3Q2P.mjs";var ee=(()=>{let t=class t{constructor(){this.title="ecommerce"}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=c({type:t,selectors:[["app-root"]],standalone:!0,features:[m],decls:4,vars:1,consts:[[1,"backgraund"],["bdColor","rgba(100, 100, 100, 0.8)","size","medium","color","#fff","type","ball-clip-rotate-multiple",3,"fullScreen"],[2,"color","white"]],template:function(a,p){a&1&&(r(0,"router-outlet",0),n(1,"ngx-spinner",1)(2,"p",2),l(3," Loading... "),i()()),a&2&&(w(),b("fullScreen",!0))},dependencies:[f,J]});let e=t;return e})();var te=(e,t)=>{let s=d(U),o=d(P);return M(o)?localStorage.getItem("userToken")!==null?!0:(s.navigate(["/login"]),!1):!1};var ne=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=c({type:t,selectors:[["app-nav-auth"]],standalone:!0,features:[m],decls:23,vars:0,consts:[[1,"navbar","navbar-expand-lg","bg-body-tertiary"],[1,"container-fluid"],["routerLink","login",1,"navbar-brand"],["src","./assets/images/freshcart-logo.svg","alt",""],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav","ms-auto"],[1,"nav-item","d-flex","gap-3","me-3"],["target","_blank","href","https://www.instagram.com/sayeed_mohamed.1/"],[1,"fab","fa-instagram"],["target","_blank","href","https://www.facebook.com/profile.php?id=100036507706960"],[1,"fab","fa-facebook"],["target","_blank","href","https://www.linkedin.com/in/sayed-mohamed-81b66b290/"],[1,"fab","fa-linkedin"],["target","_blank","href","https://api.whatsapp.com/send?phone=01150778216",1,"text-reset"],[1,"fa-brands","fa-whatsapp"],[1,"nav-item"],["routerLink","login","routerLinkActive","active-link",1,"nav-link","fit-content"],["routerLink","register","routerLinkActive","active-link",1,"nav-link","fit-content"]],template:function(a,p){a&1&&(n(0,"nav",0)(1,"div",1)(2,"a",2),r(3,"img",3),i(),n(4,"button",4),r(5,"span",5),i(),n(6,"div",6)(7,"ul",7)(8,"li",8)(9,"a",9),r(10,"i",10),i(),n(11,"a",11),r(12,"i",12),i(),n(13,"a",13),r(14,"i",14),i(),n(15,"a",15),r(16,"i",16),i()(),n(17,"li",17)(18,"a",18),l(19," login "),i()(),n(20,"li",17)(21,"a",19),l(22," register "),i()()()()()())},dependencies:[v,C]});let e=t;return e})();var y=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=c({type:t,selectors:[["app-footer"]],standalone:!0,features:[m],decls:24,vars:0,consts:[[1,"bg-main-light","py-5"],[1,"container"],[1,"m-0","h4"],[1,"text-muted","small"],[1,"d-flex","align-items-center","gap-3","text-nowrap"],["type","text","placeholder","Email",1,"form-control"],[1,"btn-main"],[1,"pay-details","d-flex","justify-content-between","align-items-center"],[1,"d-flex","align-items-center","gap-2"],[1,"h6","m-0"],["src","./assets/images/amazon-pay.png","width","30px","alt",""],["src","./assets/images/American-Express-Color.png","width","30px","alt",""],["src","./assets/images/paypal.png","width","30px","alt",""],["src","./assets/images/mastercard.webp","width","30px","alt",""],["src","./assets/images/get-google-play.png","width","75px","alt",""],["src","./assets/images/get-apple-store.png","width","75px","alt",""]],template:function(a,p){a&1&&(n(0,"footer",0)(1,"div",1)(2,"h2",2),l(3,"Get The FreshCart App"),i(),n(4,"p",3),l(5," We Will Send You a Link, Open it on Your Phone to download the app "),i(),n(6,"div",4),r(7,"input",5),n(8,"button",6),l(9,"Share App Link"),i()(),r(10,"hr"),n(11,"div",7)(12,"div",8)(13,"h3",9),l(14,"Payment partners"),i(),r(15,"img",10)(16,"img",11)(17,"img",12)(18,"img",13),i(),n(19,"div",8)(20,"h3",9),l(21,"Get Deliveries with FreshCart"),i(),r(22,"img",14)(23,"img",15),i()()()())}});let e=t;return e})();var ie=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=c({type:t,selectors:[["app-auth-layout"]],standalone:!0,features:[m],decls:4,vars:0,consts:[[1,"bac"],[1,"container"]],template:function(a,p){a&1&&(r(0,"app-nav-auth",0),n(1,"div",1),r(2,"router-outlet"),i(),r(3,"app-footer"))},dependencies:[ne,f,y],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;min-height:100vh}"]});let e=t;return e})();var oe=(()=>{let t=class t{constructor(){this.currentLang="en";let o=localStorage.getItem("lang");o&&(this.currentLang=o,this.setLang(this.currentLang))}setLang(o){this.currentLang=o,localStorage.setItem("lang",o),document.documentElement.lang=o,o==="ar"?document.documentElement.dir="rtl":document.documentElement.dir="ltr"}getCurrentLang(){return this.currentLang}};t.\u0275fac=function(a){return new(a||t)},t.\u0275prov=h({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var re=(()=>{let t=class t{constructor(){this._AuthService=d(X),this._CartService=d(Z),this._LanguageService=d(oe),this.CountNumber=T(()=>this._CartService.CartNumber())}ngOnInit(){this._CartService.getProductsCart().subscribe({next:o=>{console.log(o),this._CartService.CartNumber.set(o.numOfCartItems)}})}changeLanguage(o){this._LanguageService.setLang(o)}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=c({type:t,selectors:[["app-nav-blank"]],standalone:!0,features:[m],decls:54,vars:1,consts:[[1,"navbar","fixed-top","navbar-expand-lg","bg-body-tertiary"],[1,"container-fluid"],["routerLink","home",1,"navbar-brand"],["src","./assets/images/freshcart-logo.svg","alt",""],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav","mx-auto"],[1,"nav-item"],["routerLink","home","routerLinkActive","active-link",1,"nav-link","fit-content"],["routerLink","products","routerLinkActive","active-link",1,"nav-link","fit-content"],["routerLink","wishlist","routerLinkActive","active-link",1,"nav-link","fit-content"],["routerLink","categories","routerLinkActive","active-link",1,"nav-link","fit-content"],["routerLink","brands","routerLinkActive","active-link",1,"nav-link","fit-content"],[1,"navbar-nav","ms-auto"],["routerLink","cart","routerLinkActive","active-link",1,"nav-link","position-relative","fit-content"],[1,"fa-solid","fa-cart-shopping","fa-2xl"],[1,"badge","bg-danger","position-absolute","top-0","start-0"],[1,"nav-item","d-flex","gap-3","me-3"],["target","_blank","href","https://www.instagram.com/sayeed_mohamed.1/"],[1,"fab","fa-instagram"],["target","_blank","href","https://www.facebook.com/profile.php?id=100036507706960"],[1,"fab","fa-facebook"],["target","_blank","href","https://www.linkedin.com/in/sayed-mohamed-81b66b290/"],[1,"fab","fa-linkedin"],["target","_blank","href","https://api.whatsapp.com/send?phone=01150778216",1,"text-reset"],[1,"fa-brands","fa-whatsapp"],[1,"nav-item","dropdown"],["href","#","role","button","data-bs-toggle","dropdown","aria-expanded","false",1,"nav-link","dropdown-toggle"],["aria-labelledby","dropdownMenuLink",1,"dropdown-menu"],[1,"dropdown-item"],[1,"nav-link","btn","bg-success","text-white",3,"click"]],template:function(a,p){a&1&&(n(0,"nav",0)(1,"div",1)(2,"a",2),r(3,"img",3),i(),n(4,"button",4),r(5,"span",5),i(),n(6,"div",6)(7,"ul",7)(8,"li",8)(9,"a",9),l(10,"home"),i()(),n(11,"li",8)(12,"a",10),l(13,"products"),i()(),n(14,"li",8)(15,"a",11),l(16,"Wishlist"),i()(),n(17,"li",8)(18,"a",12),l(19,"categories"),i()(),n(20,"li",8)(21,"a",13),l(22,"brands"),i()()(),n(23,"ul",14)(24,"li",8)(25,"a",15),r(26,"i",16),n(27,"span",17),l(28),i()()(),n(29,"li",18)(30,"a",19),r(31,"i",20),i(),n(32,"a",21),r(33,"i",22),i(),n(34,"a",23),r(35,"i",24),i(),n(36,"a",25),r(37,"i",26),i()(),n(38,"li",27)(39,"a",28),l(40," settings "),i(),n(41,"ul",29)(42,"li")(43,"a",30),l(44,"Update Profile "),i()(),n(45,"li")(46,"a",30),l(47,"Update Password"),i()(),n(48,"li")(49,"a",30),l(50,"Orders"),i()()()(),n(51,"li",8)(52,"a",31),k("click",function(){return p._AuthService.logOut()}),l(53," SignOut "),i()()()()()()),a&2&&(w(28),E(p.CountNumber()))},dependencies:[v,C]});let e=t;return e})();var ae=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=c({type:t,selectors:[["app-blank-layout"]],standalone:!0,features:[m],decls:4,vars:0,consts:[[1,"container-fluid"]],template:function(a,p){a&1&&(r(0,"app-nav-blank"),n(1,"div",0),r(2,"router-outlet"),i(),r(3,"app-footer"))},dependencies:[re,f,y],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;min-height:100vh}"]});let e=t;return e})();var se=[{path:"",component:ae,canActivate:[te],children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",loadComponent:()=>import("./chunk-ZUGQ4YMV.mjs").then(e=>e.HomeComponent)},{path:"products",loadComponent:()=>import("./chunk-CA6Y3ORZ.mjs").then(e=>e.ProductComponent)},{path:"cart",loadComponent:()=>import("./chunk-ZKRHKBAH.mjs").then(e=>e.CartComponent)},{path:"categories",loadComponent:()=>import("./chunk-HKAIIJ53.mjs").then(e=>e.CategoriesComponent)},{path:"brands",loadComponent:()=>import("./chunk-EULBC24W.mjs").then(e=>e.BrandaComponent)},{path:"wishlist",loadComponent:()=>import("./chunk-ICIN4KJ3.mjs").then(e=>e.WishlistComponent)},{path:"details/:id",loadComponent:()=>import("./chunk-IHIBEHTN.mjs").then(e=>e.DetailsComponent)},{path:"subcategory/:id",loadComponent:()=>import("./chunk-THTLQX3X.mjs").then(e=>e.SubcategoryComponent)},{path:"allorders",loadComponent:()=>import("./chunk-KLBWHAHN.mjs").then(e=>e.AllordersComponent)},{path:"orders/:id",loadComponent:()=>import("./chunk-ZQSUODJW.mjs").then(e=>e.OrdersComponent)}]},{path:"",component:ie,children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",loadComponent:()=>import("./chunk-GOPLOY62.mjs").then(e=>e.LoginComponent)},{path:"register",loadComponent:()=>import("./chunk-CVCSJTOO.mjs").then(e=>e.RegisterComponent)},{path:"forgot",loadComponent:()=>import("./chunk-LBDL2TRG.mjs").then(e=>e.ForgetpasswordComponent)}]},{path:"**",loadComponent:()=>import("./chunk-DETSNMZP.mjs").then(e=>e.NotfoundComponent)}];var le=(e,t)=>(localStorage.getItem("userToken")!==null&&(e.url.includes("cart")||e.url.includes("wishlist")||e.url.includes("orders"))&&(e=e.clone({setHeaders:{token:localStorage.getItem("userToken")}})),t(e));var pe=(e,t)=>{let s=d($);return t(e).pipe(x(o=>(s.error(o.error.message,"FreshCart"),S(()=>o))))};var O=new g("@sweetalert2/ngx-sweetalert2#swalProvider"),ce=new g("@sweetalert2/ngx-sweetalert2#fireOnInit"),me=new g("@sweetalert2/ngx-sweetalert2#dismissOnDestroy"),de=(()=>{class e{swalProvider;swalPromiseCache;constructor(s){this.swalProvider=s}get swal(){return this.swalPromiseCache||this.preloadSweetAlertLibrary(),this.swalPromiseCache}preloadSweetAlertLibrary(){if(this.swalPromiseCache)return;let s=o(this.swalProvider)?this.swalProvider():Promise.resolve(this.swalProvider);this.swalPromiseCache=s.then(p=>a(p)?p:p.default);function o(p){return typeof p=="function"&&p.version===void 0}function a(p){return typeof p=="function"}}static \u0275fac=function(o){return new(o||e)(I(O))};static \u0275prov=h({token:e,factory:e.\u0275fac})}return e})();function we(){return import("./chunk-BQIFHIOR.mjs")}var ue=(()=>{class e{static forRoot(s={}){return{ngModule:e,providers:[de,{provide:O,useValue:s.provideSwal||we},{provide:ce,useValue:s.fireOnInit||!1},{provide:me,useValue:s.dismissOnDestroy||!0}]}}static forChild(s={}){return{ngModule:e,providers:[...s.provideSwal?[de,{provide:O,useValue:s.provideSwal}]:[],...s.fireOnInit!==void 0?[{provide:ce,useValue:s.fireOnInit}]:[],...s.dismissOnDestroy!==void 0?[{provide:me,useValue:s.dismissOnDestroy}]:[]]}}static \u0275fac=function(o){return new(o||e)};static \u0275mod=B({type:e});static \u0275inj=L({imports:[F]})}return e})();var fe=(e,t)=>{let s=d(Y);return s.show(),t(e).pipe(D(()=>{s.hide()}))};var he={providers:[G(se,z()),_(),j(V(),H([le,pe,fe])),K(),q(),A(ue,Q)]};var ve={providers:[W()]},ge=R(he,ve);var Ce=()=>N(ee,ge),tn=Ce;export{tn as a};