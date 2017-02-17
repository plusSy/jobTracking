/**
 * topbarCtrl 头部
 * Created by applesyl on 2017/2/17.
 */
App.controller('topbarCtrl',function($scope,$state){

    $scope.userName = window.localStorage.user_name;

    $scope.clearUser = function(){
        window.localStorage.user_name = '';
        $state.go('login');
    }
});
