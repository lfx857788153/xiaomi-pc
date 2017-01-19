// 概要： 通过platformBrowserDynamic模块去加载当前项目的根模块
"use strict";
// @angular/platform-browser-dynamic其实是访问system-config.js文件中map属性中的@angular/platform-browser-dynamic，本质是访问node_modules中@angular/platform-browser/bundles/platform-browser.umd.js
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
// 导入根模块，目的：启动它
var app_module_1 = require("./app.module");
// bootstrap=>启动
// 通过platformBrowserDynamic模块中的启动模块方法bootstrapModule(module形参)
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .then(function (success) { return console.log("Bootstrap success"); })
    .catch(function (error) { return console.log(error); });
//# sourceMappingURL=main.js.map