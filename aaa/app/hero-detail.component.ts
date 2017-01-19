// Input是用来处理输入操作
// Output是用来处理输出操作
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// Params模块是用来获取其他页面通过URL传递过来的数据detail/12
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // 给hero属性添加注解
  @Input() 
  hero: Hero;
  // 要通过close属性通知调用方hero对象改变了。
  @Output() 
  close = new EventEmitter();
  // 操作过程中如果有错误，会用error属性保存
  error: any;
  // 标识，标识是否跳转过
  navigated = false; // true if navigated here

  // 在构造函数中注入HeroService, ActivatedRoute
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private route2: Router) {
  }

  ngOnInit(): void {
    // this.route.params返回一个参数数组
    this.route.params.forEach((params: Params) => {
      // params['id']取URL传过来的id
      if (params['id'] !== undefined) {
        console.log('传了id')
        // 产生一个新的Hero对象 id  +params['id']取的是字符串，+充当转换成数字型
        let id = +params['id'];
        this.navigated = true;
        // getHero()根据一个id获取Hero对象，给视图使用
        this.heroService.getHero(id)
            .then(hero => this.hero = hero);
      } else {
        console.log('id参数不传时是否执行到此处？')
        this.navigated = false;
        this.hero = new Hero();
      }
    });
  }

  save(): void {
    this.heroService
    // 编辑
        .save(this.hero)
        .then(hero => {
          this.hero = hero; // saved hero, w/ id if new
          // 保存成功后跳转到来源
          this.goBack(hero);
        })
        .catch(error => this.error = error); // TODO: Display error message
  }

  goBack(savedHero: Hero = null): void {
    // emit()向其他组件发射通知
    this.close.emit(savedHero);
    console.log(this.navigated);
    if (this.navigated) { 
      window.history.back();
      // this.route2.navigate(['/dashboard']);
    }
  }
}
