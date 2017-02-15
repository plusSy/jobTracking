/**
 * personInformationCtrl 个人信息
 * Created by applesyl on 2017/2/13.
 */
App.controller('personInformationCtrl',function($scope,$rootScope,$stateParams){

    //设置导航选中项
    $rootScope.clickThisNav = 'ls2';

    $scope.personDetails = [{
        image:'image/person.jpg',
        name : '石一龙',
        specialty : '软件工程',
        studentNumber : '2013330321',
        job : '是',
        phone : '18435109660',
        email : '792381585@qq.com',
        address : '山西省太原市小店区',
        clazz : [{
            clazzId : '1',
            clazzName : '2013年10月至2014年2月就职于************单位，任软件开发工程师'
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
});
