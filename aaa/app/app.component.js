//概要： app.component.ts演示如何创建组件，组件可以理解成视图view
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 创建组件时，一般不会从头开发，要使用angular2已经给我们提供的组件功能
var core_1 = require("@angular/core");
// 使用注解去创建自定义组件
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.showModuleId = module.id;
    }
    AppComponent.prototype.sayHello = function (name) {
        return "Hello world! " + name;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        // 给当前的组件定一个moduleId
        // 组件理解成是模块(module)中一部分（小模块）,返回当前组件的文件路径
        moduleId: module.id,
        // 给自定义的组件起个名字，我们在HTML中通过此名字去直接调用<my-app></my-app>
        selector: 'my-app',
        // html代码片段，模板字符串， templateUrl
        template: "\n    <h1>{{title}} - {{showModuleId}} - {{sayHello('Angular')}}</h1>\n    <div class=\"header-bar\"></div>\n    <nav>\n      <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n      <a routerLink=\"/heroes\" routerLinkActive=\"active\">Heroes</a>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
        styleUrls: ['app.component.css']
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map