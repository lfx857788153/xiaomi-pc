app.controller('addController', addController);

function addController($rootScope, $scope, $location) {
    if($rootScope.editFlag){
        $scope.title = $rootScope.item.title;
        $scope.url = $rootScope.item.url;
        $scope.image = $rootScope.item.image;
        $scope.content = $rootScope.item.content;
    } else {
        $scope.title = "";
        $scope.url = "";
        $scope.image = "";
        $scope.content = "";
    }

    $scope.save = function () {
        if($rootScope.editFlag){
            $rootScope.list[$rootScope.item.id - 1] = {
                id: $rootScope.item.id,
                title: $scope.title,
                url: $scope.url,
                image: $scope.image,
                content: $scope.content,
                comments: 5,
                loves: 3,
                time: "刚刚"
            }
        } else {
            // 添加数据
            $rootScope.list.push({
                id: $scope.createId(),
                title: $scope.title,
                url: $scope.url,
                image: $scope.image,
                content: $scope.content,
                comments: 5,
                loves: 3,
                time: "刚刚"
            });
        }

        $location.url('/');
    }

    var defaultIndex = $rootScope.list.length;
    $scope.createId = function(){
        var result = defaultIndex + 1;
        return result;
    }

    $scope.close = function () {
        $location.url('/');
    }
}
