// 导入组件对象及生命周期事件OnInit
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';

// 1. 使用服务前要导入,和模块，组件一样。
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  // 使用templateUrl去指定一个具体的视图文件，推荐写法，不建议使用template进行字符串拼接（容易出错）
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
// OnInit是生命周期事件，理解成组件初始化时执行的业务逻辑， 自己会执行，不用明确调用
// implements去实现OnInit方法，一定要实现
export class DashboardComponent implements OnInit {
  // heroes数组，供templateUrl使用
  heroes: Hero[] = [];

  // 在构造函数中定义变量router，类型Router
  // 在其他方法中就可以通过router变量去操作Router对象中的方法和属性
  constructor(
    private router: Router,
    // 使用此语句前，要注意HeroService服务要使用@Injectable
    private heroService: HeroService) {
    console.log("1");
  }

  // 执行时去获取数据，绑定到heroes
  ngOnInit(): void {
    console.log("2");
    // this.heroes是指上面定义的heroes变量
    this.heroService.getHeroes()
      // heroes形参是getHeroes()返回的结果
      // slice用来截取数组生成一个新的数组
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  // 跳转方法 /detail/1
  gotoDetail(hero: Hero): void {
    // 1.路径，2.携带的数据
    let link = ['/detail', hero.id];
    // navigate()是Router对象中的一个跳转（导航）方法
    // 形参是数组形式的路径
    this.router.navigate(link);
  }
}
