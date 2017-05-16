import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 路由使用的各个组件
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

// 路由配置清单
const routes: Routes = [
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
    component: DashboardComponent
  },
  // 第一个路径
  {
    path: 'detail/:id',
    // 第二个路径使用的组件
    component: HeroDetailComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  }
];

@NgModule({
  // 当前自定义的模块要依赖的其它的模块， forRoot()理解成给RouterModule传递一个初始化的值（配置清单）
  imports: [RouterModule.forRoot(routes)],
  // 导出的模块列表
  exports: [RouterModule]
})
export class AppRoutingModule { }

// 为什么导出？ 让路由的组件有统一的出口，如果不在此导出，可以直接在app.module.ts文件中declarations直接加载依赖
export const routedComponents = [DashboardComponent, HeroesComponent, HeroDetailComponent];
