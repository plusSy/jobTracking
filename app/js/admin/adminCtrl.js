/**
 * adminCtrl  管理端
 * Created by applesyl on 2017/2/10.
 */
App.controller('adminCtrl',function($scope,$rootScope,$stateParams,ngDialog,$resource,NgTableParams){

    //查看所有教师
    $scope.allTeachers = [{
        user_name : '王虎威',
        user_num : '1001',
        position : '党支部书记',
        create_date : '2017年2月12日'
    },{
        user_name : '刘赟',
        user_num : '1002',
        position : '党支部副书记',
        create_date : '2017年2月12日'
    },{
        user_name : '田力雄',
        user_num : '1003',
        position : '专职辅导员',
        create_date : '2017年2月12日'
    }];

    ////检索学生就业数据，绑定到$data上
    //var tableData=[];
    //
    //$scope.tableParams = new NgTableParams({page:1,count:5},{counts: [],total: tableData.length,getData: function($defer, params) {
    //    //var temp = $resource(base_url + 'personals/experts-info');
    //    var temp = $resource('http://10.211.54.207:8080/'+'principal/select-all-teacher');
    //
    //    //var param = {
    //    //    'pageNo':params.page(),
    //    //    'pageSize':params.count(),
    //    //    "_":new Date().getTime()
    //    //};
    //    temp.get({},function(data,headers){
    //        if(angular.isUndefined(data.error)){
    //            $scope.info = data.result;
    //            tableData = $scope.info;
    //            params.total(data.page.total_elements); // 设置过滤后总共有多少数据，用于页面确定到底分几页 {{tableParams.total()}} 这个是会显示分页栏
    //            params.totalPages = Math.ceil(tableData.length/params.count()); //自定义返回当前数据总页数，用于跳转判断 {{tableParams.totalPages}}
    //            $defer.resolve(tableData);	//更新数据 就是页面上的$data
    //        }else{
    //            var message = $filter('T')(data.error.code+""+data.error.error_subcode);
    //            ngDialog.open({data:{'message':message},template: 'message',className:'short-message'});
    //        }
    //    });
    //}});

    ////请求所有的教师信息
    //function getAllTeacher (){
    //    var temp = $resource('http://10.211.54.207:8080/'+'test05/principal/select-all-teacher');
    //
    //    var param ={
    //
    //    };
    //
    //    temp.get(param,function(data) {
    //        debugger;
    //        $scope.allTeachers = data.result;
    //    },function(){
    //        alert('请求失败');
    //    });
    //
    //}


    //添加教师
    $scope.addTeacher = function(){
        ngDialog.open({
            width: 410,
            template: 'code/admin/addTeacher.html',
            className: 'ngdialog-theme-default',
            showClose: false,
            closeByDocument : false,
            closeByEscape : false,
            controller:
                function($scope) {
                    $scope.closeThisDialog = function() {
                        ngDialog.close(); //关闭弹窗
                    };

                    //添加教师
                }
        })
    };

    //修改密码
    $scope.cheangePassword = function(){
        ngDialog.open({
            width: 410,
            template: 'code/common/adminChangePassword.html',
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
    };

    //查看个人教师信息
    $scope.seeTeacherDetails = function(){
        ngDialog.open({
            width: 1020,
            template: 'code/admin/seeTeacherDetails.html',
            className: 'ngdialog-theme-default',
            showClose: false,
            closeByDocument : false,
            closeByEscape : false,
            controller: function($scope) {
                $scope.closeThisDialog = function() {
                    ngDialog.close(); //关闭弹窗
                };
                $scope.personDetails = [{
                    image:'image/person.jpg',
                    name : '田力雄',
                    politicsStatus : '中共党员',
                    jobNumber : '1003',
                    position : '专职辅导员',
                    phone : '18435109660',
                    email : '792381585@qq.com',
                    address : '山西省太原市小店区',
                    clazz : [{
                        clazzId : '1',
                        clazzName : '13电子G1班'
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
    $scope.removerTeacher = function(){
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


    //页面初始化加载完成事件
    $scope.$on('$viewContentLoaded', function() {
        //查询所属类型
        //getAllTeacher();
    });
});