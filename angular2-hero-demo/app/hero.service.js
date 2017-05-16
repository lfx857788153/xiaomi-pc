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
// 导入注解器Injectable
var core_1 = require("@angular/core");
// 导入Headers，Http，Response用来从reseful接口中获取数据
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var HeroService = (function () {
    // 在构造中直接注入http服务
    function HeroService(http) {
        this.http = http;
        // 接口的地址
        this.heroesUrl = 'app/aaaa'; // URL to web api
    }
    HeroService.prototype.getHeroes = function () {
        console.log('getHeroes');
        return this.http
            .get(this.heroesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    // 获取单个英雄数据
    HeroService.prototype.getHero = function (id) {
        // this.getHeroes()返回是Hero[]类型的数组
        return this.getHeroes()
            .then(function (heroes) { return heroes.find(function (hero) { return hero.id === id; }); });
    };
    // 保存， 把单个的Hero对象保存到Heros数组中
    // 双功能，即可以添加，也可以作为编辑
    HeroService.prototype.save = function (hero) {
        // hero.id不存在，则说明是添加
        if (hero.id) {
            // 调用编辑方法put()
            return this.put(hero);
        }
        // 调用post()进行添加
        return this.post(hero);
    };
    HeroService.prototype.delete = function (hero) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.heroesUrl + "/" + hero.id;
        return this.http
            .delete(url, { headers: headers })
            .toPromise()
            .catch(this.handleError);
    };
    // Add new Hero
    HeroService.prototype.post = function (hero) {
        // 设置请求头application/json
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(this.heroesUrl, JSON.stringify(hero), { headers: headers })
            .toPromise()
            .then(function (res) {
            console.log(res.json());
            return res.json().data;
        })
            .catch(this.handleError);
    };
    // Update existing Hero
    HeroService.prototype.put = function (hero) {
        // 先设置请求头，使用application/json
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        // 'app/heroes/12'
        var url = this.heroesUrl + "/" + hero.id;
        return this.http
            .put(url, JSON.stringify(hero), { headers: headers })
            .toPromise()
            .then(function () {
            return hero;
        })
            .catch(this.handleError);
    };
    HeroService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return HeroService;
}());
HeroService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HeroService);
exports.HeroService = HeroService;
// 定义服务时注意事项：
/**
 * 1. @Injectable的使用后，可以在别的组件中通过组件的构造函数把服务给注入到组件去使用。
 * 2. 一般情况下前端使用的服务是对后台的API接口进行进一步封装，一般会使用Http, Headers(post,put请求注意加header请求头)
 */
//# sourceMappingURL=hero.service.js.map