/**
 * perfectInformationCtrl  完善信息
 * Created by applesyl on 2017/2/13.
 */
App.controller('perfectTeacherInformationCtrl',function($scope,$rootScope,ngDialog,$stateParams,$resource){

    var teacherId = window.localStorage.user_id;

    $scope.changeTeacherPassword = function(teacId,teacNum){
        ngDialog.open({
            width: 410,
            template: 'code/common/changePassword.html',
            className: 'ngdialog-theme-default',
            showClose: false,
            closeByDocument : false,
            closeByEscape : false,
            controller:  ['$scope', '$resource', function($scope, $resource) {
                $scope.closeThisDialog = function() {
                    ngDialog.close(); //关闭弹窗
                };
                $scope.ok = function(){
                    if (!teacId) {
                        return
                    }
                    if($scope.password.newPassword != $scope.password.conformPassword){
                        alert('两次密码输入不一致。');
                        return;
                    }
                    var temp = $resource(base_url + 'user/update-user-password/:userId',{},{update:{'method':'put'}});
                    var para = {
                        'userId' : teacId,
                        'userNum' : teacNum,
                        'oldPassword' : $scope.password.oldPassword,
                        'newPassword' : $scope.password.newPassword,
                        'resPassword' : $scope.password.conformPassword
                    };
                    temp.update(para,{},function(data,header){
                        if (angular.isUndefined(data.error)) {
                            alert('修改成功,请牢记密码.');
                            ngDialog.close(); //关闭弹窗
                        } else {
                            //alert(data.error);
                            alert("原始密码错误，如果忘记，请联系管理员修改！");
                        }
                    });
                }
            }]
        })
    };

    //查看个人教师信息
    $scope.saveTeacherDetails = function(teacherId){
        if(teacherId){
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
        }
    };
    $scope.saveTeacherDetails(teacherId);

    //更新信息
    $scope.updateTeacherInfo = function(teacher){

        var temp = $resource(base_url + 'teacher/update-teacher-details/:teacherId',{},{update:{'method':'put'}});
        var para = {
            'teacherId':teacher.teacher_id
        };
        var paras = {
            'address' : teacher.address,
            'introduce' : teacher.introduce,
            'mail' : teacher.mail,
            'phone' : teacher.phone,
            'position' : teacher.position,
            'political_outlook' : teacher.political_outlook,
            'url_img' : teacher.url_img
        };
        temp.update(para,paras,function(data,header){
            if (angular.isUndefined(data.error)) {
                $scope.saveTeacherDetails();
            } else {
                //alert("您输入的用户名/密码不正确，请联系管理员！");
            }
        });
    }


});