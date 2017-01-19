// 概要： 创建一个根模块， 去使用组件，路由等
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./in-memory-data.service");
require("./rxjs-extensions");
// 导入自定义的组件，在根模块中去使用
var app_component_1 = require("./app.component");
// 导入自定义的路由模块， AppRoutingModule模块名称， routedComponents路由使用的组件列表
var app_routing_module_1 = require("./app-routing.module");
var hero_service_1 = require("./hero.service");
var hero_search_component_1 = require("./hero-search.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        // imports中一般放置当前模块依赖的其它模块
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService, { delay: 600 })
        ],
        // declarations一般放置当前模块依赖的其它的组件
        declarations: [
            app_component_1.AppComponent,
            hero_search_component_1.HeroSearchComponent,
            app_routing_module_1.routedComponents
        ],
        // providers一般放置服务：对组件的业务逻辑的进一步封装
        providers: [
            hero_service_1.HeroService
        ],
        // bootstrap一般放置启动的组件，根组件（主页面）
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map