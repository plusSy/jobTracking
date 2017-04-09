/**
 * personInformationCtrl 个人信息
 * Created by applesyl on 2017/2/13.
 */
App.controller('studentPersonInformationCtrl',function($scope,$rootScope,ngDialog,$stateParams,$resource){


    var studentId = window.localStorage.user_id;

    //修改密码
    $scope.changeStudentPassword = function (){
        if(studentId){
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
        }
    };

    //$scope.stuInfos = [{
    //    image:'image/person.jpg',
    //    name : '石一龙',
    //    specialty : '软件工程',
    //    studentNumber : '2013330321',
    //    job : '是',
    //    phone : '18435109660',
    //    email : '792381585@qq.com',
    //    address : '山西省太原市小店区',
    //    clazz : [{
    //        clazzId : '1',
    //        clazzName : '2013年10月至2014年2月就职于************单位，任软件开发工程师'
    //    },{
    //        clazzId : '2',
    //        clazzName : '13电子G2班'
    //    },{
    //        clazzId : '3',
    //        clazzName : '13通信G1班'
    //    },{
    //        clazzId : '4',
    //        clazzName : '13通信G2班'
    //    },{
    //        clazzId : '5',
    //        clazzName : '13软件G3班'
    //    },{
    //        clazzId : '6',
    //        clazzName : '13计科D班'
    //    }],
    //    intro : '这是一个十分敬业的老师'
    //}];
    //

    //查看学生个人信息
    $scope.saveStuDetails = function(studentId){
        if(studentId){
            var temp = $resource( base_url +'/student/select-student-details/:userId');
            var param ={
                'userId': studentId
            };
            temp.get(param,function(data) {
                debugger;
                $scope.stuInfos = data.result;
                console.log($scope.stuInfos );
            },function(){
                alert('请求失败');
            });
        }
    };
    $scope.saveStuDetails(studentId);

    //学生更新信息
    $scope.updateStuInfo = function(student){

        var temp = $resource(base_url + 'student/update-student-details/:studentId',{},{update:{'method':'put'}});
        var para = {
            'studentId':student.student_id
        };
        var paras = {
            'current_address' : student.current_address,
            'introduce' : student.introduce,
            'email' : student.email,
            'phone' : student.phone,
            'url_img' : student.url_img,
            'specialty': student.specialty
        };
        debugger;
        temp.update(para,paras,function(data,header){
            if (angular.isUndefined(data.error)) {
                debugger;
                alert('修改成功');
                $scope.saveStuDetails();
            } else {
                //alert("您输入的用户名/密码不正确，请联系管理员！");
            }
        });
    }
});
