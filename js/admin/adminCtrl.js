/**
 * Created by applesyl on 2017/2/10.
 */
App.controller('adminCtrl',function($scope,$stateParams,ngDialog){


    //添加教师
    $scope.addTeacher = function(){
        ngDialog.open({
            width: 410,
            template: 'code/admin/addTeacher.html',
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

    //修改密码
    $scope.cheangePassword = function(){
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

    //查看信息
    $scope.seeTeacherDetails = function(){
        ngDialog.open({
            width: 600,
            template: 'code/admin/seeTeacherDetails.html',
            className: 'ngdialog-theme-default',
            closeByDocument : false,
            closeByEscape : false,
            controller: function($scope) {
                $scope.closeThisDialog = function() {
                    ngDialog.close(); //关闭弹窗
                };
            }
        })
    };

    //删除
    $scope.removerTeacher = function(){
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