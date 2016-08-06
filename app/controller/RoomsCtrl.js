angular.module('zhufengchat').controller('RoomsCtrl',function($scope,$http){
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

});