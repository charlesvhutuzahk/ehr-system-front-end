(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{zrcO:function(e,t,r){"use strict";r.r(t),r.d(t,"UsersModule",function(){return A});var s=r("3Pt+"),i=r("ofXK"),n=r("tyNb"),c=r("fXoL");let b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Eb({type:e,selectors:[["ng-component"]],decls:1,vars:0,template:function(e,t){1&e&&c.Lb(0,"router-outlet")},directives:[n.f],encapsulation:2}),e})();var o=r("SxV6"),a=r("DELc");function d(e,t){if(1&e&&(c.Qb(0,"tr"),c.Qb(1,"td"),c.sc(2),c.Pb(),c.Qb(3,"td"),c.sc(4),c.Pb(),c.Qb(5,"td"),c.sc(6),c.Pb(),c.Qb(7,"td"),c.sc(8),c.Pb(),c.Qb(9,"td"),c.sc(10),c.Pb(),c.Qb(11,"td"),c.sc(12),c.Pb(),c.Pb()),2&e){const e=t.$implicit,r=t.index;c.yb(2),c.tc(r+1),c.yb(2),c.vc("",null==e?null:e.firstName," ",null==e?null:e.lastName,""),c.yb(2),c.vc("",null==e?null:e.firstName," ",null==e?null:e.lastName,""),c.yb(2),c.tc(null==e?null:e.username),c.yb(2),c.tc(null==e?null:e.role),c.yb(2),c.tc(null==e?null:e.role)}}function u(e,t){1&e&&(c.Qb(0,"tr"),c.Qb(1,"td",24),c.Lb(2,"span",25),c.Pb(),c.Pb())}let l=(()=>{class e{constructor(e){this.accountService=e,this.users=[]}ngOnInit(){this.accountService.getAll().pipe(Object(o.a)()).subscribe(e=>{console.log(e),this.users=e})}deleteUser(e){this.users.find(t=>t.id===e).isDeleting=!0,this.accountService.delete(e).pipe(Object(o.a)()).subscribe(()=>this.users=this.users.filter(t=>t.id!==e))}}return e.\u0275fac=function(t){return new(t||e)(c.Kb(a.a))},e.\u0275cmp=c.Eb({type:e,selectors:[["ng-component"]],decls:46,vars:2,consts:[[1,"content-header"],[1,"container-fluid"],[1,"row","mb-2"],[1,"col-sm-6"],[1,"fa","fa-arrow-left"],[1,"breadcrumb","float-sm-right"],[1,"breadcrumb-item"],[1,"breadcrumb-item","active"],[1,"content"],[1,"row"],[1,"col-12"],[1,"card","card-info"],[1,"card-header"],[1,"card-title"],[1,"card-tools"],[1,"input-group","input-group-sm",2,"width","150px"],["type","text","name","table_search","placeholder","Search",1,"form-control","float-right"],[1,"input-group-append"],["type","submit",1,"btn","btn-default"],[1,"fas","fa-search"],[1,"card-body","table-responsive","p-0",2,"height","500px"],[1,"table","table-bordered","table-head-fixed","text-nowrap"],[4,"ngFor","ngForOf"],[4,"ngIf"],["colspan","4",1,"text-center"],[1,"spinner-border","spinner-border-lg","align-center"]],template:function(e,t){1&e&&(c.Qb(0,"section",0),c.Qb(1,"div",1),c.Qb(2,"div",2),c.Qb(3,"div",3),c.Qb(4,"a"),c.Lb(5,"i",4),c.Pb(),c.Pb(),c.Qb(6,"div",3),c.Qb(7,"ol",5),c.Qb(8,"li",6),c.Qb(9,"a"),c.sc(10,"Home"),c.Pb(),c.Pb(),c.Qb(11,"li",7),c.sc(12,"Users"),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(13,"section",8),c.Qb(14,"div",1),c.Qb(15,"div",9),c.Qb(16,"div",10),c.Qb(17,"div",11),c.Qb(18,"div",12),c.Qb(19,"h3",13),c.sc(20,"Users List"),c.Pb(),c.Qb(21,"div",14),c.Qb(22,"div",15),c.Lb(23,"input",16),c.Qb(24,"div",17),c.Qb(25,"button",18),c.Lb(26,"i",19),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(27,"div",20),c.Qb(28,"table",21),c.Qb(29,"thead"),c.Qb(30,"tr"),c.Qb(31,"th"),c.sc(32,"#"),c.Pb(),c.Qb(33,"th"),c.sc(34,"Full Name"),c.Pb(),c.Qb(35,"th"),c.sc(36,"Display Name"),c.Pb(),c.Qb(37,"th"),c.sc(38,"Username"),c.Pb(),c.Qb(39,"th"),c.sc(40,"Online auth"),c.Pb(),c.Qb(41,"th"),c.sc(42,"Roles"),c.Pb(),c.Pb(),c.Pb(),c.Qb(43,"tbody"),c.qc(44,d,13,8,"tr",22),c.qc(45,u,3,0,"tr",23),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb()),2&e&&(c.yb(44),c.cc("ngForOf",t.users),c.yb(1),c.cc("ngIf",!t.users))},directives:[i.i,i.j],encapsulation:2}),e})();var f=r("i1ol");function m(e,t){1&e&&(c.Qb(0,"h1"),c.sc(1,"Add User"),c.Pb())}function p(e,t){1&e&&(c.Qb(0,"h1"),c.sc(1,"Edit User"),c.Pb())}function h(e,t){1&e&&(c.Qb(0,"div"),c.sc(1,"First Name is required"),c.Pb())}function v(e,t){if(1&e&&(c.Qb(0,"div",17),c.qc(1,h,2,0,"div",0),c.Pb()),2&e){const e=c.Zb();c.yb(1),c.cc("ngIf",e.f.firstName.errors.required)}}function P(e,t){1&e&&(c.Qb(0,"div"),c.sc(1,"Last Name is required"),c.Pb())}function g(e,t){if(1&e&&(c.Qb(0,"div",17),c.qc(1,P,2,0,"div",0),c.Pb()),2&e){const e=c.Zb();c.yb(1),c.cc("ngIf",e.f.lastName.errors.required)}}function Q(e,t){1&e&&(c.Qb(0,"div"),c.sc(1,"Username is required"),c.Pb())}function y(e,t){if(1&e&&(c.Qb(0,"div",17),c.qc(1,Q,2,0,"div",0),c.Pb()),2&e){const e=c.Zb();c.yb(1),c.cc("ngIf",e.f.username.errors.required)}}function w(e,t){1&e&&(c.Qb(0,"em"),c.sc(1,"(Leave blank to keep the same password)"),c.Pb())}function q(e,t){1&e&&(c.Qb(0,"div"),c.sc(1,"Password is required"),c.Pb())}function N(e,t){1&e&&(c.Qb(0,"div"),c.sc(1,"Password must be at least 6 characters"),c.Pb())}function I(e,t){if(1&e&&(c.Qb(0,"div",17),c.qc(1,q,2,0,"div",0),c.qc(2,N,2,0,"div",0),c.Pb()),2&e){const e=c.Zb();c.yb(1),c.cc("ngIf",e.f.password.errors.required),c.yb(1),c.cc("ngIf",e.f.password.errors.minlength)}}function S(e,t){1&e&&c.Lb(0,"span",18)}const L=function(e){return{"is-invalid":e}};let C=(()=>{class e{constructor(e,t,r,s,i){this.formBuilder=e,this.route=t,this.router=r,this.accountService=s,this.alertService=i,this.loading=!1,this.submitted=!1}ngOnInit(){this.id=this.route.snapshot.params.id,this.isAddMode=!this.id;const e=[s.o.minLength(6)];this.isAddMode&&e.push(s.o.required),this.form=this.formBuilder.group({firstName:["",s.o.required],lastName:["",s.o.required],username:["",s.o.required],password:["",e]}),this.isAddMode||this.accountService.getById(this.id).pipe(Object(o.a)()).subscribe(e=>this.form.patchValue(e))}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),this.form.invalid||(this.loading=!0,this.isAddMode?this.createUser():this.updateUser())}createUser(){this.accountService.register(this.form.value).pipe(Object(o.a)()).subscribe({next:()=>{this.alertService.success("User added successfully",{keepAfterRouteChange:!0}),this.router.navigate(["../"],{relativeTo:this.route})},error:e=>{this.alertService.error(e),this.loading=!1}})}updateUser(){this.accountService.update(this.id,this.form.value).pipe(Object(o.a)()).subscribe({next:()=>{this.alertService.success("Update successful",{keepAfterRouteChange:!0}),this.router.navigate(["../../"],{relativeTo:this.route})},error:e=>{this.alertService.error(e),this.loading=!1}})}}return e.\u0275fac=function(t){return new(t||e)(c.Kb(s.c),c.Kb(n.a),c.Kb(n.b),c.Kb(a.a),c.Kb(f.a))},e.\u0275cmp=c.Eb({type:e,selectors:[["ng-component"]],decls:32,vars:22,consts:[[4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"form-row"],[1,"form-group","col"],["for","firstName"],["type","text","formControlName","firstName",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["for","lastName"],["type","text","formControlName","lastName",1,"form-control",3,"ngClass"],["for","username"],["type","text","formControlName","username",1,"form-control",3,"ngClass"],["for","password"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],[1,"form-group"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["routerLink","/users",1,"btn","btn-link"],[1,"invalid-feedback"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(e,t){1&e&&(c.qc(0,m,2,0,"h1",0),c.qc(1,p,2,0,"h1",0),c.Qb(2,"form",1),c.Xb("ngSubmit",function(){return t.onSubmit()}),c.Qb(3,"div",2),c.Qb(4,"div",3),c.Qb(5,"label",4),c.sc(6,"First Name"),c.Pb(),c.Lb(7,"input",5),c.qc(8,v,2,1,"div",6),c.Pb(),c.Qb(9,"div",3),c.Qb(10,"label",7),c.sc(11,"Last Name"),c.Pb(),c.Lb(12,"input",8),c.qc(13,g,2,1,"div",6),c.Pb(),c.Pb(),c.Qb(14,"div",2),c.Qb(15,"div",3),c.Qb(16,"label",9),c.sc(17,"Username"),c.Pb(),c.Lb(18,"input",10),c.qc(19,y,2,1,"div",6),c.Pb(),c.Qb(20,"div",3),c.Qb(21,"label",11),c.sc(22," Password "),c.qc(23,w,2,0,"em",0),c.Pb(),c.Lb(24,"input",12),c.qc(25,I,3,2,"div",6),c.Pb(),c.Pb(),c.Qb(26,"div",13),c.Qb(27,"button",14),c.qc(28,S,1,0,"span",15),c.sc(29," Save "),c.Pb(),c.Qb(30,"a",16),c.sc(31,"Cancel"),c.Pb(),c.Pb(),c.Pb()),2&e&&(c.cc("ngIf",t.isAddMode),c.yb(1),c.cc("ngIf",!t.isAddMode),c.yb(1),c.cc("formGroup",t.form),c.yb(5),c.cc("ngClass",c.gc(14,L,t.submitted&&t.f.firstName.errors)),c.yb(1),c.cc("ngIf",t.submitted&&t.f.firstName.errors),c.yb(4),c.cc("ngClass",c.gc(16,L,t.submitted&&t.f.lastName.errors)),c.yb(1),c.cc("ngIf",t.submitted&&t.f.lastName.errors),c.yb(5),c.cc("ngClass",c.gc(18,L,t.submitted&&t.f.username.errors)),c.yb(1),c.cc("ngIf",t.submitted&&t.f.username.errors),c.yb(4),c.cc("ngIf",!t.isAddMode),c.yb(1),c.cc("ngClass",c.gc(20,L,t.submitted&&t.f.password.errors)),c.yb(1),c.cc("ngIf",t.submitted&&t.f.password.errors),c.yb(2),c.cc("disabled",t.loading),c.yb(1),c.cc("ngIf",t.loading))},directives:[i.j,s.p,s.i,s.e,s.b,s.h,s.d,i.h,n.d],encapsulation:2}),e})();const U=[{path:"",component:b,children:[{path:"",component:l},{path:"add",component:C},{path:"edit/:id",component:C}]}];let x=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Ib({type:e}),e.\u0275inj=c.Hb({imports:[[n.e.forChild(U)],n.e]}),e})(),A=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Ib({type:e}),e.\u0275inj=c.Hb({imports:[[i.b,s.m,x]]}),e})()}}]);