app.controller('listController', function ($rootScope, $scope, $location, $window) {
    if (!$rootScope.list) {
        $rootScope.list = [
            {
                id: 1,
                title: "Angular.js实现简单的表单验证",
                content: "最近有点小忙，没怎么有时间专注看angular,但是空余时间还是要写点东西的，因为前几天一直在看angular,所以对双向绑定这个事情还是蛮感兴趣的，所以业余时间就自己想写一写，这个例子不兼容IE，在谷歌下面可以运行的。用的是ES5的属性。 demo: http://www.hu...",
                url: "http://www.hui52.com/archives/1044.html",
                image: "http://www.hui52.com/wp-content/themes/yusi1.0/timthumb.php?src=http://www.hui52.com/wp-content/uploads/2015/09/QQ%E6%88%AA%E5%9B%BE20150914094405.png&h=123&w=200&q=90&zc=1&ct=1",
                comments: 5,
                loves: 3,
                time: "2天前"
            },
            {
                id: 2,
                title: "简单的实现了一下双向绑定的效果",
                content: "前两天简单看了一下路由部分，自己凭着自己的感觉写了一个例子，这个例子可能跟大家之前看到的例子不太一样，因为我写了一个路由分发控制器，这个控制器里面，包含了所有的路由控制器处理过程： demo： http://www.hui52.com/demo/angular/demo_1032...",
                url: "http://www.hui52.com/archives/1038.html",
                image: "http://www.hui52.com/wp-content/themes/yusi1.0/timthumb.php?src=http://www.hui52.com/wp-content/themes/yusi1.0/img/pic/8.jpg&h=123&w=200&q=90&zc=1&ct=1",
                comments: 3,
                loves: 2,
                time: "1天前"
            },
            {
                id: 3,
                title: "Angular.js学习第六天",
                content: "今天学习了一下Angular的过滤器功能，直接看一下demo吧，感受感受： demo地址: http://www.hui52.com/demo/angular/demo_1021/ 上代码: index.html ",
                url: "http://www.hui52.com/archives/1032.html",
                image: "http://www.hui52.com/wp-content/themes/yusi1.0/timthumb.php?src=http://www.hui52.com/wp-content/uploads/2015/09/QQ%E6%88%AA%E5%9B%BE20150914094405.png&h=123&w=200&q=90&zc=1&ct=1",
                comments: 13,
                loves: 14,
                time: "刚才"
            }
        ]
    }

    $scope.add = function () {
        $rootScope.editFlag = false;
        $location.url('/add');
    }

    $scope.edit = function (index) {
        $rootScope.editFlag = true;
        $rootScope.item = $rootScope.list[index];
        $location.url('/add');
    }

    $scope.remove = function (index) {
        if($window.confirm("确定要删除吗？")){
            $rootScope.list.splice(index, 1);
        }
    }
})