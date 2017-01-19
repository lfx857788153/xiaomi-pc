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
// Input是用来处理输入操作
// Output是用来处理输出操作
var core_1 = require("@angular/core");
// Params模块是用来获取其他页面通过URL传递过来的数据detail/12
var router_1 = require("@angular/router");
var hero_1 = require("./hero");
var hero_service_1 = require("./hero.service");
var HeroDetailComponent = (function () {
    // 在构造函数中注入HeroService, ActivatedRoute
    function HeroDetailComponent(heroService, route, route2) {
        this.heroService = heroService;
        this.route = route;
        this.route2 = route2;
        // 要通过close属性通知调用方hero对象改变了。
        this.close = new core_1.EventEmitter();
        // 标识，标识是否跳转过
        this.navigated = false; // true if navigated here
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.route.params返回一个参数数组
        this.route.params.forEach(function (params) {
            // params['id']取URL传过来的id
            if (params['id'] !== undefined) {
                console.log('传了id');
                // 产生一个新的Hero对象 id  +params['id']取的是字符串，+充当转换成数字型
                var id = +params['id'];
                _this.navigated = true;
                // getHero()根据一个id获取Hero对象，给视图使用
                _this.heroService.getHero(id)
                    .then(function (hero) { return _this.hero = hero; });
            }
            else {
                console.log('id参数不传时是否执行到此处？');
                _this.navigated = false;
                _this.hero = new hero_1.Hero();
            }
        });
    };
    HeroDetailComponent.prototype.save = function () {
        var _this = this;
        this.heroService
            .save(this.hero)
            .then(function (hero) {
            _this.hero = hero; // saved hero, w/ id if new
            // 保存成功后跳转到来源
            _this.goBack(hero);
        })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    HeroDetailComponent.prototype.goBack = function (savedHero) {
        if (savedHero === void 0) { savedHero = null; }
        // emit()向其他组件发射通知
        this.close.emit(savedHero);
        console.log(this.navigated);
        if (this.navigated) {
            window.history.back();
        }
    };
    return HeroDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", hero_1.Hero)
], HeroDetailComponent.prototype, "hero", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], HeroDetailComponent.prototype, "close", void 0);
HeroDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-hero-detail',
        templateUrl: 'hero-detail.component.html',
        styleUrls: ['hero-detail.component.css']
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService,
        router_1.ActivatedRoute,
        router_1.Router])
], HeroDetailComponent);
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map