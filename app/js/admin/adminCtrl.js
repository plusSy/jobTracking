/**
 * adminCtrl  管理端
 * Created by applesyl on 2017/2/10.
 */
App.controller('adminCtrl',function($scope,$rootScope,$stateParams,ngDialog){

    //设置导航选中项
    $rootScope.clickThisNav = 'ls6';

    //查看所有教师
    $scope.allTeacher = [{
        name : '王虎威',
        unit : '信息学院',
        position : '党支部书记',
        regDate : '2017年2月12日'
    },{
        name : '刘赟',
        unit : '信息学院',
        position : '党支部副书记',
        regDate : '2017年2月12日'
    },{
        name : '田力雄',
        unit : '信息学院',
        position : '专职辅导员',
        regDate : '2017年2月12日'
    }];

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

    //查看个人教师信息
    $scope.seeTeacherDetails = function(){
        ngDialog.open({
            width: 1020,
            template: 'code/admin/seeTeacherDetails.html',
            className: 'ngdialog-theme-default',
            showClose: false,
            closeByDocument : false,
            closeByEscape : false,
            controller: function($scope) {
                $scope.closeThisDialog = function() {
                    ngDialog.close(); //关闭弹窗
                };
                $scope.personDetails = [{
                    image:'image/person.jpg',
                    name : '田力雄',
                    gender : '男',
                    unit : '信息学院',
                    position : '专职辅导员',
                    phone : '18435109660',
                    email : '792381585@qq.com',
                    address : '山西省太原市小店区',
                    clazz : [{
                        clazzId : '1',
                        clazzName : '13电子G1班'
                    },{
                        clazzId : '2',
                        clazzName : '13电子G2班'
                    },{
                        clazzId : '3',
                        clazzName : '13通信G1班'
                    },{
                        clazzId : '4',
                        clazzName : '13通信G2班'
                    },{
                        clazzId : '5',
                        clazzName : '13软件G3班'
                    },{
                        clazzId : '6',
                        clazzName : '13计科D班'
                    }],
                    intro : '这是一个十分敬业的老师'
                }];
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