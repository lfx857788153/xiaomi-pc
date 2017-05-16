"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// 导入组件对象及生命周期事件OnInit
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
// 1. 使用服务前要导入,和模块，组件一样。
var hero_service_1 = require("./hero.service");
var DashboardComponent = (function () {
    // 在构造函数中定义变量router，类型Router
    // 在其他方法中就可以通过router变量去操作Router对象中的方法和属性
    function DashboardComponent(router, 
        // 使用此语句前，要注意HeroService服务要使用@Injectable
        heroService) {
        this.router = router;
        this.heroService = heroService;
        // heroes数组，供templateUrl使用
        this.heroes = [];
        console.log("1");
    }
    // 执行时去获取数据，绑定到heroes
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("2");
        // this.heroes是指上面定义的heroes变量
        this.heroService.getHeroes()
            .then(function (heroes) { return _this.heroes = heroes.slice(1, 5); });
    };
    // 跳转方法 /detail/1
    DashboardComponent.prototype.gotoDetail = function (hero) {
        // 1.路径，2.携带的数据
        var link = ['/detail', hero.id];
        // navigate()是Router对象中的一个跳转（导航）方法
        // 形参是数组形式的路径
        this.router.navigate(link);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-dashboard',
        // 使用templateUrl去指定一个具体的视图文件，推荐写法，不建议使用template进行字符串拼接（容易出错）
        templateUrl: 'dashboard.component.html',
        styleUrls: ['dashboard.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        hero_service_1.HeroService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map