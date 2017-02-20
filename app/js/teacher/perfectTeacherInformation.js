/**
 * perfectInformationCtrl  完善信息
 * Created by applesyl on 2017/2/13.
 */
App.controller('perfectTeacherInformationCtrl',function($scope,$rootScope,ngDialog,$stateParams){

    //设置导航选中项
    $rootScope.clickThisNav = 'ls4';

    $scope.changeTeacherPassword = function(){
        ngDialog.open({
            width: 410,
            template: 'code/common/changePassword.html',
            className: 'ngdialog-theme-default',
            showClose: false,
            closeByDocument : false,
            closeByEscape : false,
            controller: function($scope) {
                $scope.closeThisDialog = function() {
                    ngDialog.close(); //关闭弹窗
                };
            }
        })
    };

 });