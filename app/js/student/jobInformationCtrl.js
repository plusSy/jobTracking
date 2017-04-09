/**
 * jobInformationCtrl 工作信息
 * Created by applesyl on 2017/2/13.
 */
App.controller('jobInformationCtrl',function($scope,$rootScope,ngDialog,$stateParams,NgTableParams,$resource,$filter){

    var studentId = window.localStorage.user_id;

    //删除工作信息
    $scope.removerJobInformation = function (workTime,title) {
        $scope.title = title;
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
                    if (!studentId) {
                        return
                    }
                    var resource_delete = $resource(base_url + 'student/delete-student-employment/:studentId', {}, {delete: {method: 'delete'}});
                    var para = {
                        'studentId' : studentId,
                        'workTime' : $filter('date')(workTime,'yyyy-MM-dd HH:mm:ss')
                    };
                    debugger;
                    resource_delete.delete(para,function (data) {
                        debugger;
                        if (angular.isUndefined(data.error)) {
                            $scope.queryStuJobInfo();
                        } else {
                            //alert("您输入的用户名/密码不正确，请联系管理员！");
                        }
                    });
                }
            }]
        });
    };


    ////查看学生个人就业信息
    //var tableData=[];
    //
    //$scope.jobTableParams = new NgTableParams(
    //    {
    //        page:1,
    //        count:10
    //    },
    //    {
    //        counts: [],
    //        total: tableData.length,
    //        getData: function($defer, params) {
    //            var temp = $resource( base_url +'student/select-student-employment/:studentId');
    //            var param = {
    //                'studentId' : studentId,
    //                'pageNo':params.page(),
    //                'pageSize':params.count(),
    //                "_":new Date().getTime()
    //            };
    //            temp.get(param,function(data,headers){
    //                if(angular.isUndefined(data.error)){
    //                    debugger;
    //                    $scope.info = data.result;
    //                    tableData = $scope.info;
    //                    params.total(data.page.total_elements); // 设置过滤后总共有多少数据，用于页面确定到底分几页 {{tableParams.total()}} 这个是会显示分页栏
    //                    params.totalPages = Math.ceil(tableData.length/params.count()); //自定义返回当前数据总页数，用于跳转判断 {{tableParams.totalPages}}
    //                    $defer.resolve(tableData);	//更新数据 就是页面上的$data
    //                }else{
    //                    alert('系统出错,请联系管理员!')
    //                }
    //            });
    //}});

    //查看学生个人就业信息
    $scope.queryStuJobInfo = function(){
        debugger;
        if(studentId){
            var temp = $resource( base_url +'student/select-student-employment/:studentId');
            var param ={
                'studentId' : studentId,
                'workTime' : ''
            };
            temp.get(param,function(data) {
                debugger;
                $scope.jobInfos = data.result;
                console.log($scope.jobInfos );
            },function(){
                alert('请求失败');
            });
        }
    };
    $scope.queryStuJobInfo();


});