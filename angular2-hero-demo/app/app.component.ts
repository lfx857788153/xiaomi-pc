//概要： app.component.ts演示如何创建组件，组件可以理解成视图view

// 创建组件时，一般不会从头开发，要使用angular2已经给我们提供的组件功能
import { Component } from '@angular/core';

// 使用注解去创建自定义组件
@Component({
  // 给当前的组件定一个moduleId
  // 组件理解成是模块(module)中一部分（小模块）,返回当前组件的文件路径
  moduleId: module.id,
  // 给自定义的组件起个名字，我们在HTML中通过此名字去直接调用<my-app></my-app>
  selector: 'my-app',
  // html代码片段，模板字符串， templateUrl
  template: `
    <h1>{{title}} - {{showModuleId}} - {{sayHello('Angular')}}</h1>
    <div class="header-bar"></div>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `, // router-outlet可想像成angular1中ng-view
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  showModuleId = module.id;
  sayHello(name):string{
    return `Hello world! ${name}`;
  }
}
