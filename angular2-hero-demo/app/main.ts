// 概要： 通过platformBrowserDynamic模块去加载当前项目的根模块

// @angular/platform-browser-dynamic其实是访问system-config.js文件中map属性中的@angular/platform-browser-dynamic，本质是访问node_modules中@angular/platform-browser/bundles/platform-browser.umd.js
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// 导入根模块，目的：启动它
import { AppModule } from './app.module';

// bootstrap=>启动
// 通过platformBrowserDynamic模块中的启动模块方法bootstrapModule(module形参)
platformBrowserDynamic().bootstrapModule(AppModule)
  // then成功后执行的逻辑
  .then(success => console.log(`Bootstrap success`))
  //出现异常时执行的逻辑
  .catch((error) => console.log(error));

  

