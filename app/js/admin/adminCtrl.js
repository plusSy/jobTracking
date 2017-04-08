/**
 * adminCtrl  管理端
 * Created by applesyl on 2017/2/10.
 */
App.controller('adminCtrl',function($scope,$rootScope,$stateParams,ngDialog,$resource,$state,NgTableParams){

//添加教师
$scope.addTeacher = function(){

        if($rootScope.jobNumber){
            ngDialog.open({
                width: 410,
                template: 'code/admin/addTeacher.html',
                className: 'ngdialog-theme-default',
                showClose: false,
                closeByDocument : false,
                closeByEscape : false,
                controller:
                    function($scope,$state) {
                        $scope.closeThisDialog = function() {
                            ngDialog.close(); //关闭弹窗
                        };
                        $rootScope.jobNumber = parseInt($rootScope.jobNumber);
                        if(!isNaN($rootScope.jobNumber)){
                            $rootScope.jobNumber = $rootScope.jobNumber+1;
                        }
                        $scope.teacher = {
                            'name' : '',
                            'duty' : '',
                            'jobNumber' : $rootScope.jobNumber,
                            'oldPassword' : '123456'
                        };

                        //添加教师
                        $scope.addTeacher = function (teacher) {
                            if(!teacher.name || !teacher.duty || !teacher.jobNumber || !teacher.oldPassword){
                                alert('请输入完整的信息！');
                                return
                            }
                            var getAccount = $resource(base_url + 'user/regist', {}, {
                                save: {
                                    method: 'POST'
                                }
                            });
                            var para = {
                                'user_name' : teacher.name,
                                'position' : teacher.duty,
                                'user_num' : teacher.jobNumber,
                                'password' : teacher.oldPassword,
                                'role_id' : '2'
                            };
                            getAccount.save({}, para, function(data) {
                                if(angular.isUndefined(data.error)) {
                                    ngDialog.close();
                                    getAllTeacher();
                                    $state.go('index.admin');
                                } else {
                                    alert("您输入的用户名/密码不正确，请联系管理员！");
                                }
                            });

                        }

                    }
            });
        }
    };

//修改密码
$scope.cheangePassword = function(teacherId,teacherNum){
    ngDialog.open({
        scope: $scope,
        width: 410,
        template: 'code/common/adminChangePassword.html',
        className: 'ngdialog-theme-default',
        showClose: false,
        closeByDocument : false,
        closeByEscape : false,
        controller:  ['$scope', '$resource', function($scope, $resource) {
            $scope.closeThisDialog = function() {
                ngDialog.close(); //关闭弹窗
            };
            $scope.ok = function(password){
                if (!teacherId) {
                    return
                }
                if(password.newPassword != password.conformPassword){
                    alert('两次密码输入不一致。');
                    return;
                }
                $scope.password = {
                    newPassword : password.newPassword,
                    conformPassword : password.conformPassword
                };
                var temp = $resource(base_url + 'user/update-user-password/:userId',{},{update:{'method':'put'}});
                var para = {
                    'userId' : teacherId,
                    'userNum' : teacherNum,
                    'newPassword' : $scope.password.newPassword,
                    'resPassword' : $scope.password.conformPassword
                };
                temp.update(para,{},function(data,header){
                    if (angular.isUndefined(data.error)) {
                        ngDialog.close(); //关闭弹窗
                        getAllTeacher();
                    } else {
                        //alert("您输入的用户名/密码不正确，请联系管理员！");
                    }
                });
            }
        }]
    })
};

//查看个人教师信息
$scope.seeTeacherDetails = function(teacherId){
    if(teacherId){
        ngDialog.open({
            scope:$scope,
            width: 1020,
            template: 'code/admin/seeTeacherDetails.html',
            className: 'ngdialog-theme-default',
            showClose: false,
            closeByDocument : false,
            closeByEscape : false,
            controller: ['$scope', '$resource', function($scope, $resource) {
                $scope.closeThisDialog = function() {
                    ngDialog.close(); //关闭弹窗
                };
                var temp = $resource( base_url +'teacher/select-teacher-details/:teacherId');
                var param ={
                    'teacherId': teacherId
                };
                temp.get(param,function(data) {
                    $scope.personDetails = data.result;
                    console.log($scope.personDetails );
                },function(){
                    alert('请求失败');
                });
            }]
        })
    }
};

//删除教师
$scope.removerTeacher = function(teacherId,teacherName){
    $scope.title = teacherName;
    ngDialog.open({
        scope: $scope,
        width: 360,
        template: 'code/common/remove.html',
        className: 'ngdialog-theme-default',
        showClose : false,
        closeByDocument : false,
        closeByEscape : false,
        controller: ['$scope', '$resource', function($scope, $resource) {
            $scope.closeThisDialog = function() {
                ngDialog.close(); //关闭弹窗
            };
            $scope.ok = function(){
                ngDialog.close();
                if (!teacherId) {
                    return
                }
                var resource_delete = $resource(base_url + 'user/delete-teacher/:userId', {}, {delete: {method: 'delete'}});
                var para = {
                    'userId' : teacherId
                };
                resource_delete.delete(para,function (data) {
                    if (angular.isUndefined(data.error)) {
                        getAllTeacher();
                    } else {
                        //alert("您输入的用户名/密码不正确，请联系管理员！");
                    }
                });
            }
        }]
    });
};

//页面初始化加载完成事件
$scope.$on('$viewContentLoaded', function() {
    //查询所属类型
    getAllTeacher();

    //查询教师工号
    queryTeacherJobNumber();
});


//请求所有的教师信息
function getAllTeacher (){
    var temp = $resource( base_url +'principal/select-all-teacher');

    var param ={

    };
    debugger;
    temp.get(param,function(data) {
        $scope.allTeachers = data.result;
    },function(){
        alert('请求失败');
    });

}

//查询教师工号
function queryTeacherJobNumber (){
    var temp = $resource( base_url +'user/work-number');

    var param ={
        role: '2'
    };

    temp.get(param,function(data) {
        $rootScope.jobNumber = data.result;
    },function(){
        alert('请求失败');
    });
}
});