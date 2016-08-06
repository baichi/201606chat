angular.module('zhufengchat').controller('RoomsCtrl',function($scope,$http,$location){
  //  rooms 根据关键字过滤之后过滤出来的房间 _rooms原始的房间
  $scope.rooms = $scope._rooms = [];

  $http({
      url:'/room/list',
      method:'GET'
  }).success(function(rooms){
      $scope.rooms = $scope._rooms = rooms;
  }).error(function(data){
      alert(data);
  });

  $scope.filter = function() {
      $scope.rooms  = $scope._rooms.filter(function(room){
          return room.name.indexOf($scope.keyword)!=-1;
      });
  }

  $scope.createRoom = function(){
      $http({
          url:'/room/add',
          method:'POST',
          data:{name:$scope.keyword}
      }).success(function(room){
          $scope._rooms.push(room);
          $scope.filter();
      })
  }
    $scope.join = function(roomId){
        $location.path('/rooms/'+roomId);
    }


});