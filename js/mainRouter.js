App.config(function ($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('/index');
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
            //首页图表
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
            //管理客户端   Admin
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
                        return $ocLazyLoad.load(["css/adminManager.css","js/adminCtrl.js"]);
                    }]
                }
            })
            ////首页图表
            //.state("index.chart1",{
            //    url : "^/chart1",
            //    views : {
            //        "charts@index" : {
            //            templateUrl : 'code/charts/chart1.html',
            //            controller : 'chart1Ctrl'
            //        }
            //    },
            //    resolve:{
            //        deps:["$ocLazyLoad",function($ocLazyLoad){
            //            return $ocLazyLoad.load(["js/charts/chart1.js"]);
            //        }]
            //    }
            //})
            ////首页图表二级 图表2
            //.state("index.chart2",{
            //    url : "^/chart2",
            //    views : {
            //        "charts@index" : {
            //            templateUrl : 'code/charts/chart2.html',
            //            controller : 'chart2Ctrl'
            //        }
            //    },
            //    resolve:{
            //        deps:["$ocLazyLoad",function($ocLazyLoad){
            //            return $ocLazyLoad.load(["js/charts/chart2.js"]);
            //        }]
            //    }
            //})
            ////首页图表二级 图表3
            //.state("index.chart3",{
            //    url : "^/chart3",
            //    views : {
            //        "charts@index" : {
            //            templateUrl : 'code/charts/chart3.html',
            //            controller : 'chart3Ctrl'
            //        }
            //    },
            //    resolve:{
            //        deps:["$ocLazyLoad",function($ocLazyLoad){
            //            return $ocLazyLoad.load(["js/charts/chart3.js"]);
            //        }]
            //    }
            //})
            ////首页图表二级 图表4
            //.state("index.chart4",{
            //    url : "^/chart4",
            //    views : {
            //        "charts@index" : {
            //            templateUrl : 'code/charts/chart4.html',
            //            controller : 'chart4Ctrl'
            //        }
            //    },
            //    resolve:{
            //        deps:["$ocLazyLoad",function($ocLazyLoad){
            //            return $ocLazyLoad.load(["js/charts/chart4.js"]);
            //        }]
            //    }
            //})
            ////报表管理
            //.state("index.report",{
            //    url : "^/report",
            //    views : {
            //        "main@index" : {
            //            templateUrl : 'code/report.html',
            //            controller : 'reportCtrl'
            //        }
            //    },
            //    resolve:{
            //        deps:["$ocLazyLoad",function($ocLazyLoad){
            //            return $ocLazyLoad.load(["css/report.css","js/reportCtrl.js"]);
            //        }]
            //    }
            //})
            ////报表管理二级
            //.state("index.report.report1",{
            //    url : "^/report1",
            //    views : {
            //        "report@index.report" : {
            //            templateUrl : 'code/report/report1.html'
            //        }
            //    }
            //})
            //.state("index.report.report2",{
            //    url : "^/report2",
            //    views : {
            //        "report@index.report" : {
            //            templateUrl : 'code/report/report2.html'
            //        }
            //    }
            //})
            //.state("index.report.report3",{
            //    url : "^/report3",
            //    views : {
            //        "report@index.report" : {
            //            templateUrl : 'code/report3.html'
            //        }
            //    }
            //})
            //.state("index.report.report4",{
            //    url : "^/report4",
            //    views : {
            //        "report@index.report" : {
            //            templateUrl : 'code/report/report4.html'
            //        }
            //    }
            //})
            //.state("index.report.report5",{
            //    url : "^/report5",
            //    views : {
            //        "report@index.report" : {
            //            templateUrl : 'code/report/report5.html'
            //        }
            //    }
            //})
            //.state("index.report.report6",{
            //    url : "^/report6",
            //    views : {
            //        "report@index.report" : {
            //            templateUrl : 'code/report/report6.html'
            //        }
            //    }
            //})
            //.state("index.report.report7",{
            //    url : "^/report7",
            //    views : {
            //        "report@index.report" : {
            //            templateUrl : 'code/report/report7.html'
            //        }
            //    }
            //})
            //.state("index.report.report8",{
            //    url : "^/report8",
            //    views : {
            //        "report@index.report" : {
            //            templateUrl : 'code/report/report8.html'
            //        }
            //    }
            //})
            //.state("index.report.report9",{
            //    url : "^/report9",
            //    views : {
            //        "report@index.report" : {
            //            templateUrl : 'code/report/report9.html'
            //        }
            //    }
            //})
    });