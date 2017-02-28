/**
 * addJobInformationCtrl  学生新增就业信息
 * Created by applesyl on 2017/2/15.
 */
App.controller("addJobInformationCtrl",function($scope){

    //保存新增的就业信息
    $scope.addJobInformation = function () {
        alert('addJonInformationCtrl');
    };


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
