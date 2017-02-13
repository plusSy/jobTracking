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
                    'topbar@index' : {
                        templateUrl : 'code/topbar.html'
                    },
                    'main@index' : {
                        templateUrl : "code/navRole.html",
                        controller:'navRoleCtl'
                    }
                },
                resolve:{
                    deps:["$ocLazyLoad",function($ocLazyLoad){
                        return $ocLazyLoad.load(["css/topbar.css","css/navRole.css","js/navRoleCtl.js"]);
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
                        return $ocLazyLoad.load(["js/charts/chartsCtrl.js"]);
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
                        return $ocLazyLoad.load(["css/adminManager.css","js/admin/adminCtrl.js"]);
                    }]
                }
            })
            /**————————————————————————————————————————教师管理端     teacherManager—————————————————————————————————————————————**/
            //教师完善信息
            .state("index.perfectInformation",{
                url : "^/perfectInformation",
                views : {
                    "viewDetails@index" : {
                        templateUrl : 'code/teacher/perfectInformation.html',
                        controller : 'perfectInformationCtrl'
                    }
                },
                resolve:{
                    deps:["$ocLazyLoad",function($ocLazyLoad){
                        return $ocLazyLoad.load(["js/teacher/perfectInformationCtrl.js"]);
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
                        return $ocLazyLoad.load(["js/teacher/manageClassroomCtrl.js"]);
                    }]
                }
            })
             /**————————————————————————————————————————学生端     studentManager—————————————————————————————————————————————**/
            //学生个人信息完善
            .state("index.personInformation",{
                url : "^/personInformation",
                views : {
                    "viewDetails@index" : {
                        templateUrl : 'code/student/personInformation.html',
                        controller : 'personInformationCtrl'
                    }
                },
                resolve:{
                    deps:["$ocLazyLoad",function($ocLazyLoad){
                        return $ocLazyLoad.load(["js/person/personInformationCtrl.js"]);
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
                        return $ocLazyLoad.load(["js/person/jobInformationCtrl.js"]);
                    }]
                }
            })
    });