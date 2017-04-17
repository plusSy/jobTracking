/**
 * addJobInformationCtrl  学生新增就业信息
 * Created by applesyl on 2017/2/15.
 */
App.controller("addJobInformationCtrl",function($scope,$rootScope,$resource,$state,$filter,ngDialog){

    var stuId = window.localStorage.user_id;
    var param = $state.params.param;
    var workTime = $state.params.workTime;
    var isView = $state.params.isView;

    $scope.companyNature = companyNatures;

    $scope.companyTrench = companyTrench;

    $scope.companySalary = companySalary;

    $scope.companyPosition = companyPosition;


    //保存新增的就业信息
    $scope.addJobInformation = function (jobInfo) {

        var getAccount = $resource(base_url + 'student/add-student-employment?param=2', {}, {
            save: {
                method: 'POST'
            }
        });
        var para = {
            "studentId" : stuId,
            "workTime" : $filter('date')(jobInfo.work_time,'yyyy-MM-dd hh:mm:ss'),
            "workUnit" : jobInfo.work_unit,
            "workCountry" : jobInfo.work_country,
            "remarks" : jobInfo.remarks,
            "companyNature":jobInfo.property,
            "salary" :jobInfo.salary,
            "jobCategory": jobInfo.job_category.comPosi,
            "position": jobInfo.position.industry_name,
            "jobTrench" :jobInfo.job_trench
        };
        debugger;
        getAccount.save({}, para, function(data) {
            if(angular.isUndefined(data.error)) {
                alert('添加成功');
                $state.go('index.jobInformation');
            } else {
                alert("新增失败");
            }
        });
        //var getAccount = $resource(base_url + 'student/add-student-employment?param=2', {}, {
        //    save: {
        //        method: 'POST'
        //    }
        //});
        //
        //console.log(paras);
        //debugger;
        //getAccount.save({}, paras, function(data) {
        //    if(angular.isUndefined(data.error)) {
        //        alert('添加成功!');
        //        $state.go('index.jobInformation');
        //    } else {
        //        alert("您输入的用户名/密码不正确，请联系管理员！");
        //    }
        //});
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

    //查询联动信息
    //查询单个的学生就业信息详情
    $scope.querySelectption =function  (parentId) {
        var temp = $resource( base_url +'user/select-industry/:parent');
        var param ={
            'parent' : parentId
        };
        debugger;
        temp.get(param,function(data) {
            $scope.companyPositionList = data.result;
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
