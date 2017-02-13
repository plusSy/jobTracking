App.controller('loginCtrl', function( $scope,$state) {

    var hasRegister =[{
        userName : 'zhangsan',
        password : '123123'
    },{
        userName : 'lisi',
        password : '123123'
    },{
        userName : 'wangwu',
        password : '123123'
    },{
        userName : 'admin',
        password : 'admin'
    }];

    function isLogin(userName,password){
        var flag = false;
        angular.forEach(hasRegister,function(val,key){
            if(userName == val.userName){
                if(password == val.password){
                    flag = true;
                }
            }
        });
        return flag;
    }
    $scope.login = function (user) {
        if(!user){
            alert('请输入用户名和密码！');
            return
        }
       if(isLogin(user.userName,user.password)){
           $state.go('index.chart1')
       }else{
           alert("您输入的用户名/密码不正确，请联系管理员！");
       }
    }
})
