/**
 * addJobInformationCtrl  学生新增就业信息
 * Created by applesyl on 2017/2/15.
 */
App.controller("addJobInformationCtrl",function($scope,$rootScope,$resource,$state,$filter){

    var stuId = window.localStorage.user_id;
    var param = $state.params.param;
    var workTime = $state.params.workTime;
    var isView = $state.params.isView;

    //保存新增的就业信息
    $scope.addJobInformation = function (jobInfo) {
        var getAccount = $resource(base_url + 'student/add-student-employment?param=2', {}, {
            save: {
                method: 'POST'
            }
        });
        var para = {
            //param : param
        };
        var paras = {
            student_id : stuId,
            work_time : jobInfo.work_time,
            work_unit : jobInfo.work_unit,
            work_country : jobInfo.work_country,
            remarks : jobInfo.remarks
        };
        debugger;
        getAccount.save(para, paras, function(data) {
            if(angular.isUndefined(data.error)) {
                alert('添加成功!');
                $state.go('index.jobInformation');
            } else {
                alert("您输入的用户名/密码不正确，请联系管理员！");
            }
        });
    };
    if(param == 1 && isView == 'true'){
        queryJobInformation()
    }
    //查询单个的学生就业信息详情
    function queryJobInformation () {
        var temp = $resource( base_url +'student/select-student-employment/:studentId');
        var param ={
            'studentId' : stuId,
            'workTime' : $filter('date')(workTime,'yyyy-MM-dd hh:mm:ss')
        };
        temp.get(param,function(data) {
            $scope.jobInfo = data.result;
            console.log($scope.jobInfo );
        },function(){
            alert('请求失败');
        });
    }



    //绑定datetimepicker的日期控件
    $('.clickShowTimePicker').datetimepicker({
        language: 'zh-CN',
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0
    });
});
