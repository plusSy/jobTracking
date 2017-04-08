/**
 * classroomManageCtrl 班级信息
 * Created by applesyl on 2017/2/13.
 */
App.controller('classroomManageCtrl',function($scope,$rootScope,$stateParams,ngDialog,$state,$resource,NgTableParams){

    var studentNumber = '';

    //根据班级ID查询班级信息
    var classroomId = $state.params.className;

    //添加学生
    $scope.addStudent = function(){
       if(studentNumber){
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
                   //
                   //if (!isNaN(studentNumber))
                   //{
                   //    studentNumber = studentNumber+1;
                   //}
                   $scope.studentInfo = {
                       'name' : '',
                       'studentNumber' : studentNumber,
                       'oldPassword' : '123456'
                   };
                   debugger;
                   $scope.addStudentInfo = function(name,studentNumber,oldPassword){
                       if(!name || !studentNumber || !oldPassword){
                           alert('请输入完整的信息！');
                           return
                       }
                       var getAccount = $resource(base_url + 'user/regist', {}, {
                           save: {
                               method: 'POST'
                           }
                       });
                       var para = {
                           'user_name' : name,
                           'user_num' : studentNumber,
                           'password' : oldPassword,
                           'class_id' : classroomId,
                           'role_id' : '3'
                       };
                       debugger;
                       getAccount.save({}, para, function(data) {
                           if(angular.isUndefined(data.error)) {
                               ngDialog.close();
                               $rootScope.getAllStudent();
                               //$state.go('index.manageClassroom.classroomManage{{className:classroomId}}');
                           } else {
                               alert("您输入的用户名/密码不正确，请联系管理员！");
                           }
                       });
                   }
               }
           })
       }
    };

    //修改密码
    $scope.cheangePassword = function(stuId,stuNum){
        ngDialog.open({
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
                    if (!stuId) {
                        return
                    }
                    if(password.newPassword != password.conformPassword){
                        alert('两次密码输入不一致。');
                        return;
                    }
                    var temp = $resource(base_url + 'user/update-user-password/:userId',{},{update:{'method':'put'}});
                    debugger;
                    var para = {
                        'userId' : stuId,
                        'userNum' : stuNum,
                        'newPassword' : $scope.password.newPassword,
                        'resPassword' : $scope.password.conformPassword
                    };
                    temp.update(para,{},function(data,header){
                        if (angular.isUndefined(data.error)) {
                            ngDialog.close(); //关闭弹窗
                            $rootScope.getAllStudent();
                        } else {
                            //alert("您输入的用户名/密码不正确，请联系管理员！");
                        }
                    });
                }
            }]
        })
    };

    //查看学生个人信息
    $scope.seeStudentDetails = function(stuNum){
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
                var temp = $resource( base_url +'student/select-student-details/:userId');
                var param ={
                    'userId': stuNum
                };
                debugger;
                temp.get(param,function(data) {
                    debugger;
                    $scope.personDetails = data.result;
                    console.log($scope.personDetails );
                },function(){
                    alert('请求失败');
                });
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
    $scope.removerStudent = function(stuId,StuName){
        $scope.title = StuName;
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
                    if (!stuId) {
                        return
                    }
                    var resource_delete = $resource(base_url + 'user/delete-teacher/:userId', {}, {delete: {method: 'delete'}});
                    var para = {
                        'userId' : stuId
                    };
                    resource_delete.delete(para,function (data) {
                        if (angular.isUndefined(data.error)) {
                            $rootScope.getAllStudent();
                        } else {
                            //alert("您输入的用户名/密码不正确，请联系管理员！");
                        }
                    });
                }
            }]
        });
    };

    //请求classroomId的所有学生
    var tableData = [];
    $rootScope.getAllStudent = function (searchText){
        if(classroomId){
            $scope.tableParams = new NgTableParams(
                {
                    page:1,
                    count:10
                },
                {
                    counts: [],
                    total: tableData.length,
                    getData: function($defer,params) {
                        var temp = $resource( base_url +'/teacher/select-class-user/:classId');
                        var param = {
                            classId: classroomId,
                            keyword: searchText,
                            'pageNum':params.page(),
                            'pageSize':params.count(),
                            "_":new Date().getTime()
                        };
                        temp.get(param,function(data) {
                            if(angular.isUndefined(data.error)) {
                                $scope.allStudets = data.result;
                                tableData = $scope.allStudets;
                                params.total(data.page.total_elements);
                                params.totalPages = Math.ceil(tableData.length / 10);
                                $defer.resolve(tableData);
                            } else {
                                alert('请求失败');
                            }
                        });
                    }
                }
            );
        }
    };

    //查询学生学号
    function queryStudentJobNumber (){
        var temp = $resource( base_url +'user/work-number');

        var param ={
            role: '3',
            classNum: classroomId
        };
        temp.get(param,function(data) {
            var studentNumbers = parseInt(data.result);
            studentNumber = studentNumbers;
            return studentNumber;
        },function(){
            alert('请求失败');
        });
    }



    //页面初始化加载完成事件
    $scope.$on('$viewContentLoaded', function() {
        //查询所有学生
        $rootScope.getAllStudent();

        //查询学生学好号
        queryStudentJobNumber();
    });

});