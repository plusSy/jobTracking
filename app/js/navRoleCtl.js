/**
 * 左侧导航
 */
App.controller('navRoleCtl',function($scope,$resource,$state){

    $scope.loginType = window.localStorage.login_type;

    //将路由状态赋值给state 进行页面效果判断
    $scope.state = $state;
});
