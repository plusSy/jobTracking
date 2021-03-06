/**
 * Created by applesyl on 2017/4/21.
 */
App.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/charts');
    $stateProvider
    //登陆路由
        .state("login",{
            url : "^/login",
            templateUrl : "code/login.html",
            controller : "loginCtrl",
            resolve:{
                deps:["$ocLazyLoad",function($ocLazyLoad){
                    return $ocLazyLoad.load(["css/login.css","js/loginCtrl.js"]);
                }]
            }
        })
        //首页
        .state('index',{
            url : '/index',
            views : {
                '' : {
                    templateUrl : "code/main.html"
                },
                'top@index' : {
                    templateUrl : 'code/topbar.html',
                    controller:'topbarCtrl'
                },
                'main@index' : {
                    templateUrl : "code/navRole.html",
                    controller:'navRoleCtl'
                }
            },
            resolve:{
                deps:["$ocLazyLoad",function($ocLazyLoad){
                    return $ocLazyLoad.load(["css/topbar.css","css/navRole.css","js/topbarCtrl.js","js/navRoleCtl.js"]);
                }]
            }
        })
        /**————————————————————————————————————————图表     EchartsManager—————————————————————————————————————————————**/
        //echarts管理
        .state("index.charts",{
            url : "^/charts",
            views : {
                "viewDetails@index" : {
                    templateUrl : 'code/charts/charts.html',
                    controller : 'chartsCtrl'
                }
            },
            resolve:{
                deps:["$ocLazyLoad",function($ocLazyLoad){
                    return $ocLazyLoad.load(["css/charts.css","js/charts/chartsCtrl.js"]);
                }]
            }
        })
        /**————————————————————————————————————————管理客户端   Admin————————————————————————————————————————————————————————**/
        //管理端
        .state("index.admin",{
            url : "^/admin",
            views : {
                "viewDetails@index" : {
                    templateUrl : 'code/admin/adminManager.html',
                    controller : 'adminCtrl'
                }
            },
            resolve:{
                deps:["$ocLazyLoad",function($ocLazyLoad){
                    return $ocLazyLoad.load(["ngTable","css/adminManager.css","js/admin/adminCtrl.js"]);
                }]
            }
        })
        /**————————————————————————————————————————教师管理端     teacherManager—————————————————————————————————————————————**/
        //教师完善信息
        .state("index.perfectTeacherInformation",{
            url : "^/perfectTeacherInformation",
            views : {
                "viewDetails@index" : {
                    templateUrl : 'code/teacher/perfectTeacherInformation.html',
                    controller : 'perfectTeacherInformationCtrl'
                }
            },
            resolve:{
                deps:["$ocLazyLoad",function($ocLazyLoad){
                    return $ocLazyLoad.load(["css/perfectTeacherInformation.css","js/teacher/perfectTeacherInformation.js"]);
                }]
            }
        })
        //教师班级管理
        .state("index.manageClassroom",{
            url : "^/manageClassroom",
            views : {
                "viewDetails@index" : {
                    templateUrl : 'code/teacher/manageClassroom.html',
                    controller : 'manageClassroomCtrl'
                }
            },
            resolve:{
                deps:["$ocLazyLoad",function($ocLazyLoad){
                    return $ocLazyLoad.load(["css/manageClassroom.css","js/teacher/manageClassroomCtrl.js"]);
                }]
            }
        })
        //班级管理信息
        .state("index.manageClassroom.classroomManage",{
            url : "^/classroomManage?className",
            views : {
                "classroom@index.manageClassroom" : {
                    templateUrl : 'code/teacher/classroomManage.html',
                    controller : 'classroomManageCtrl'
                }
            },
            resolve:{
                deps:["$ocLazyLoad",function($ocLazyLoad){
                    return $ocLazyLoad.load(["ngTable","css/classroomManage.css","js/teacher/classroomManageCtrl.js"]);
                }]
            }
        })
        /**————————————————————————————————————————学生端     studentManager—————————————————————————————————————————————**/
        //学生个人信息完善
        .state("index.studentPersonInformation",{
            url : "^/studentPersonInformation",
            views : {
                "viewDetails@index" : {
                    templateUrl : 'code/student/studentPersonInformation.html',
                    controller : 'studentPersonInformationCtrl'
                }
            },
            resolve:{
                deps:["$ocLazyLoad",function($ocLazyLoad){
                    return $ocLazyLoad.load(["css/studentPersonInformation.css","js/student/studentPersonInformationCtrl.js"]);
                }]
            }
        })
        //学生工作信息完善
        .state("index.jobInformation",{
            url : "^/jobInformation",
            views : {
                "viewDetails@index" : {
                    templateUrl : 'code/student/jobInformation.html',
                    controller : 'jobInformationCtrl'
                }
            },
            resolve:{
                deps:["$ocLazyLoad",function($ocLazyLoad){
                    return $ocLazyLoad.load(["ngTable","css/jobInformation.css","js/student/jobInformationCtrl.js"]);
                }]
            }
        })
        //新增／查看就业信息
        .state("index.addJobInformation",{
            url : "^/addJobInformation?param&workTime&isView",
            views : {
                "viewDetails@index" : {
                    templateUrl : 'code/student/addJobInformation.html',
                    controller : 'addJobInformationCtrl'
                }
            },
            resolve:{
                deps:["$ocLazyLoad",function($ocLazyLoad){
                    return $ocLazyLoad.load(["css/addJobInformation.css","js/student/addJobInformationCtrl.js"]);
                }]
            }
        })
});
