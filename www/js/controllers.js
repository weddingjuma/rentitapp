angular.module('rentit.controllers',[]).controller('ItemListController',['$scope','Item',function($scope,Item){

    Item.getAll().success(function(data){
        $scope.items=data.results;
    });

    $scope.onItemDelete=function(item){
        Item.delete(item.objectId);
        $scope.items.splice($scope.items.indexOf(item),1);
    }

}]).controller('ItemCreationController',['$scope','Item','$state',function($scope,Item,$state){

    $scope.item={};

    $scope.create=function(){
        Item.create({
          content:$scope.item.content,
          category:$scope.item.category,
          phone:$scope.item.phone,
          rate:$scope.item.rate

        }).success(function(data){
            $state.go('items');
        });
    }


}]).controller('ItemEditController',['$scope','Item','$state','$stateParams',function($scope,Item,$state,$stateParams){

    $scope.item={id:$stateParams.id,content:$stateParams.content};

    $scope.edit=function(){
        Item.edit($scope.item.id,{content:$scope.item.content}).success(function(data){
            $state.go('items');
        });
    }

}]);
