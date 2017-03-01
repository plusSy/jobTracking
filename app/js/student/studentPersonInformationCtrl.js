/**
 * personInformationCtrl 个人信息
 * Created by applesyl on 2017/2/13.
 */
App.controller('studentPersonInformationCtrl',function($scope,$rootScope,ngDialog,$stateParams){


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

    ////通过studentsId查询专家详情
    //function queryPersonExperts() {
    //    var temp = $resource(base_url + 'personals/expert-info/:personalId');
    //    var param = {
    //        personalId:window.localStorage.user_id
    //    };
    //    temp.get(param,function(data){
    //        if(angular.isUndefined(data.error)){
    //            $scope.personDetails = data.result;
    //        }else{
    //            var message = $filter('T')(data.error.code+""+data.error.error_subcode);
    //            ngDialog.open({data:{'message':message},template: 'message',className:'short-message'});
    //        }
    //    });
    //}
    //
    ////当参数存在的时候执行查询函数
    //if(window.localStorage.user_id){
    //    queryPersonExperts();
    //}

});
