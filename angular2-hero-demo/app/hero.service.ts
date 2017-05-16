// 导入注解器Injectable
import { Injectable } from '@angular/core';
// 导入Headers，Http，Response用来从reseful接口中获取数据
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {
  // 接口的地址
  private heroesUrl = 'app/aaaa';  // URL to web api

  // 在构造中直接注入http服务
  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    console.log('getHeroes');
    return this.http
      .get(this.heroesUrl)
      // 转换成Promise, 要使用Promise异步
      .toPromise()
      // 获取成功时执行  as 类型推断 让response.json().data的类型转换成Hero[]
      .then(response => response.json().data as Hero[])
      // 出错异常时执行handleError方法()
      .catch(this.handleError);
  }

  // 获取单个英雄数据
  getHero(id: number): Promise<Hero> {
    // this.getHeroes()返回是Hero[]类型的数组
    return this.getHeroes()
      // find()从heroes数组中查询满足条件的数据，返回的是Hero对象
      .then(heroes => heroes.find(hero => hero.id === id));
  }

  // 保存， 把单个的Hero对象保存到Heros数组中
  // 双功能，即可以添加，也可以作为编辑
  save(hero: Hero): Promise<Hero> {
    // hero.id不存在，则说明是添加
    if (hero.id) {
      // 调用编辑方法put()
      return this.put(hero);
    }
    // 调用post()进行添加
    return this.post(hero);
  }

  delete(hero: Hero): Promise<Response> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.heroesUrl}/${hero.id}`;

    return this.http
      .delete(url, { headers: headers })
      .toPromise()
      .catch(this.handleError);
  }

  // Add new Hero
  private post(hero: Hero): Promise<Hero> {
    // 设置请求头application/json
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      // post()第一个参数是URL地址，第二个参数是传递的数据
      // 第三个参数是其他一些配置，options
      .post(this.heroesUrl, JSON.stringify(hero), { headers: headers })
      .toPromise()
      // 主要对返回的数组进行进一步的处理操作
      .then(res => {
        console.log(res.json());
        return res.json().data;
      })
      .catch(this.handleError);
  }

  // Update existing Hero
  private put(hero: Hero): Promise<Hero> {
    // 先设置请求头，使用application/json
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // 'app/heroes/12'
    let url = `${this.heroesUrl}/${hero.id}`;

    return this.http
      // hero 
      .put(url, JSON.stringify(hero), { headers: headers })
      .toPromise()
      // 箭头函数中只有一条语句时，可省略花括号及return
      // .then(() => hero)
      // .then(() => { return hero; })
      .then(function(){
        return hero;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}


// 定义服务时注意事项：
/**
 * 1. @Injectable的使用后，可以在别的组件中通过组件的构造函数把服务给注入到组件去使用。
 * 2. 一般情况下前端使用的服务是对后台的API接口进行进一步封装，一般会使用Http, Headers(post,put请求注意加header请求头)
 */
