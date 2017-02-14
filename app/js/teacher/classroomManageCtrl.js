/**
 * classroomManageCtrl 班级信息
 * Created by applesyl on 2017/2/13.
 */
App.controller('classroomManageCtrl',function($scope,$rootScope,$stateParams,ngDialog){

    //添加教师
    $scope.addStudent = function(){
        ngDialog.open({
            width: 410,
            template: 'code/teacher/addStudent.html',
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

    //查看学生个人信息
    $scope.seeStudentDetails = function(){
        ngDialog.open({
            width: 1020,
            template: 'code/teacher/seeStudentDetails.html',
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
                    name : '石一龙',
                    specialty : '软件工程',
                    studentNumber : '2013330321',
                    job : '是',
                    phone : '18435109660',
                    email : '792381585@qq.com',
                    address : '山西省太原市小店区',
                    clazz : [{
                        clazzId : '1',
                        clazzName : '2013年10月至2014年2月就职于************单位，任软件开发工程师'
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
    };

    //展示推荐
    $scope.exhibition = function(){
        ngDialog.open({
            width: 360,
            template: 'code/teacher/exhibition.html',
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