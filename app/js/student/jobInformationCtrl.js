/**
 * jobInformationCtrl 工作信息
 * Created by applesyl on 2017/2/13.
 */
App.controller('jobInformationCtrl',function($scope,$rootScope,ngDialog,$stateParams){

    //设置导航选中项
    $rootScope.clickThisNav = 'ls3';


    //删除工作信息
    $scope.removerJobInformation = function () {
        ngDialog.open({
            width: 360,
            template: 'code/common/remove.html',
            className: 'ngdialog-theme-default',
            showClose : false,
            closeByDocument : false,
            closeByEscape : false,
            controller: function($scope) {
                $scope.closeThisDialog = function() {
                    ngDialog.close(); //关闭弹窗
                };
            }
        })
    }
});