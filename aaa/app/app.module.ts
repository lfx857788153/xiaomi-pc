// 概要： 创建一个根模块， 去使用组件，路由等

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import './rxjs-extensions';
// 导入自定义的组件，在根模块中去使用
import { AppComponent } from './app.component';
// 导入自定义的路由模块， AppRoutingModule模块名称， routedComponents路由使用的组件列表
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { HeroService } from './hero.service';
import { HeroSearchComponent } from './hero-search.component';

@NgModule({
  // imports中一般放置当前模块依赖的其它模块
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 })
  ],
  // declarations一般放置当前模块依赖的其它的组件
  declarations: [
    AppComponent,
    HeroSearchComponent,
    routedComponents
  ],
  // providers一般放置服务：对组件的业务逻辑的进一步封装
  providers: [
    HeroService
  ],
  // bootstrap一般放置启动的组件，根组件（主页面）
  bootstrap: [AppComponent]
})
export class AppModule { }
