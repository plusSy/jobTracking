/**
 * 主模块
 */

var App = angular.module('App', ['ui.router', 'ngResource', 'ngDialog', 'oc.lazyLoad']);

    App.run(function() {

        //设置请求基础路径
        //base_url   = "//120.27.133.125/"; //global

        //生产环境下base_url为空，开发环境下注释下方代码
        //base_url="";
    });


    App.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider",
        function ($provide, $compileProvider, $controllerProvider, $filterProvider) {
            App.controller = $controllerProvider.register;
            App.directive  = $compileProvider.directive;
            App.filter     = $filterProvider.register;
            App.factory    = $provide.factory;
            App.service    = $provide.service;
            App.constant   = $provide.constant;
    }]);

    //设置angular常量，用于懒加载
    App.constant('Modules_Config', [
        {
            name: 'ngTable',
            serie: true,
            files: ["frameworks/ng-table/dist/ng-table.js","frameworks/ng-table/dist/ng-table.css"]
        },{
            name: 'DateTimePicker',
            serie: true,
            files: ["frameworks/datepicker/bootstrap-datetimepicker.min.css","frameworks/datepicker/bootstrap-datetimepicker.js","frameworks/datepicker/bootstrap-datetimepicker.zh-CN.js"]
        }
    ]);

    /*配置懒加载*/
    App.config(["$ocLazyLoadProvider","Modules_Config",function routeFn($ocLazyLoadProvider,Modules_Config){
        $ocLazyLoadProvider.config({
            debug:false,
            events:false,
            modules:Modules_Config
        });
    }]);
