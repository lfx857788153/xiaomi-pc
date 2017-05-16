"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
// 路由使用的各个组件
var dashboard_component_1 = require("./dashboard.component");
var heroes_component_1 = require("./heroes.component");
var hero_detail_component_1 = require("./hero-detail.component");
// 路由配置清单
var routes = [
    // 匹配不到任何路径时使用的默认地址
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full' // 匹配模式使用完全匹配
    },
    // 第一个路径
    {
        path: 'dashboard',
        // 第一个路径使用的组件，会放置到router-outlet显示
        component: dashboard_component_1.DashboardComponent
    },
    // 第一个路径
    {
        path: 'detail/:id',
        // 第二个路径使用的组件
        component: hero_detail_component_1.HeroDetailComponent
    },
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        // 当前自定义的模块要依赖的其它的模块， forRoot()理解成给RouterModule传递一个初始化的值（配置清单）
        imports: [router_1.RouterModule.forRoot(routes)],
        // 导出的模块列表
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
// 为什么导出？ 让路由的组件有统一的出口，如果不在此导出，可以直接在app.module.ts文件中declarations直接加载依赖
exports.routedComponents = [dashboard_component_1.DashboardComponent, heroes_component_1.HeroesComponent, hero_detail_component_1.HeroDetailComponent];
//# sourceMappingURL=app-routing.module.js.map