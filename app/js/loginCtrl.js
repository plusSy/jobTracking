/**
 * Created by applesyl on 2017/1/30.
 *
 * 登陆
 */
App.controller('loginCtrl', function( $scope,$state,$resource) {


    //模拟数据
    var hasRegister =[{
        userName : 'admin',
        password : 'admin',
        loginType : 1
    },{
        userName : 'teacher',
        password : 'teacher',
        loginType : 2
    },{
        userName : 'student',
        password : 'student',
        loginType : 3
    }];



    ////判断写死情况下登陆账户密码和类型
    //var userLoginType;
    //function isLogin(userName,password){
    //    var flag = false;
    //    angular.forEach(hasRegister,function(val,key){
    //        if(userName == val.userName){
    //            if(password == val.password){
    //                userLoginType = val.loginType;
    //                flag = true;
    //            }
    //        }
    //    });
    //    return flag;
    //}
    //$scope.login = function (user) {
    //    if(!user){
    //        alert('请输入用户名和密码！');
    //        return
    //    }
    //   if(isLogin(user.userName,user.password)){
    //       window.localStorage.user_name    = user.userName;
    //
    //       window.localStorage.login_type   = userLoginType;
    //       $state.go('index.charts')
    //   }else{
    //       alert("您输入的用户名/密码不正确，请联系管理员！");
    //   }
    //};



    /*登陆连调*/
    $scope.login = function (user) {
        if(!user){
            alert('请输入用户名和密码！');
            return
        }
        var getAccount = $resource('http://10.211.54.207:8080/' + 'test05/user/login', {}, {
            save: {
                method: 'POST'
            }
        });
        var para = {
            'user_num' : user.userName,
            'password' : user.password
        };
        getAccount.save({}, para, function(data) {
            if(angular.isUndefined(data.error)) {
                window.localStorage.user_name    = data.result.user_name;
                window.localStorage.user_id    = data.result.user_id;
                window.localStorage.login_type   = data.result.role_id;
                $state.go('index.charts')
            } else {
                alert("您输入的用户名/密码不正确，请联系管理员！");
            }
        });
     }
});
