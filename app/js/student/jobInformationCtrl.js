/**
 * jobInformationCtrl 工作信息
 * Created by applesyl on 2017/2/13.
 */
App.controller('jobInformationCtrl',function($scope,$rootScope,ngDialog,$stateParams,NgTableParams){


    //删除工作信息
    $scope.removerJobInformation = function () {
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


    ////检索教师数据，绑定到$data上
    //var tableData=[];
    //
    //$scope.tableParams = new NgTableParams({page:1,count:5},{counts: [],total: tableData.length,getData: function($defer, params) {
    //    var temp = $resource('http://10.211.54.207:8080/'+'principal/select-all-teacher');
    //    //var param = {
    //    //    'pageNo':params.page(),
    //    //    'pageSize':params.count(),
    //    //    "_":new Date().getTime()
    //    //};
    //    temp.get(param,function(data,headers){
    //        if(angular.isUndefined(data.error)){
    //            $scope.info = data.result;
    //            tableData = $scope.info;
    //            params.total(data.page.total_elements); // 设置过滤后总共有多少数据，用于页面确定到底分几页 {{tableParams.total()}} 这个是会显示分页栏
    //            params.totalPages = Math.ceil(tableData.length/params.count()); //自定义返回当前数据总页数，用于跳转判断 {{tableParams.totalPages}}
    //            $defer.resolve(tableData);	//更新数据 就是页面上的$data
    //        }else{
    //            alert('系统出错,请联系管理员!')
    //        }
    //    });
    //}});


});