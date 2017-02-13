/**
 * personInformationCtrl 个人信息
 * Created by applesyl on 2017/2/13.
 */
App.controller('personInformationCtrl',function($scope,$rootScope,$stateParams){

    //设置导航选中项
    $rootScope.clickThisNav = 'ls2';

    $scope.name='personInformationCtrl的控制器';
});
