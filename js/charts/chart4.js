/**
 * chart4Ctrl  地图 控制器
 */
App.controller('chart4Ctrl',function($scope,$resource){


    //var list = $resource(baseurl+'/jahwa/echarts/map');
    //list.get({},function(data,header){
    //    $scope.mapInfo = data.result;
    //
    //})

    //生成随机数
    function randomData() {
        return Math.round(Math.random()*1000);
    }

    option4 = {
        title: {
            text: '2016年淘宝“双十一”各省成交额',
            subtext: '单位：万元',
            x: 'left'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data:['2016年']
        },
        dataRange: {
            min: 0,
            max: 45000,
            x: 'left',
            top: 'bottom',
            text: ['高','低'],           // 文本，默认为数值文本
            calculable: true
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            x: 'right',
            top: 'center',
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: '2016年',
                type: 'map',
                mapType: 'china',
                roam: false,
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                data:[
                    {name: '北京',value: 21300 },
                    {name: '天津',value: 5816 },
                    {name: '上海',value: 28408 },
                    {name: '重庆',value: 7890 },
                    {name: '河北',value: 7120 },
                    {name: '河南',value: 12406 },
                    {name: '云南',value: 6870 },
                    {name: '辽宁',value: 9845 },
                    {name: '黑龙江',value: 5222 },
                    {name: '湖南',value: 12658 },
                    {name: '安徽',value: 10783 },
                    {name: '山东',value: 16253 },
                    {name: '新疆',value: 3536 },
                    {name: '江苏',value: 31939 },
                    {name: '浙江',value: 33156 },
                    {name: '江西',value: 8684 },
                    {name: '湖北',value: 14803 },
                    {name: '广西',value: 7531 },
                    {name: '甘肃',value: 2880 },
                    {name: '山西',value: 5444 },
                    {name: '内蒙古',value: 3775 },
                    {name: '陕西',value: 7435 },
                    {name: '吉林',value: 4019 },
                    {name: '福建',value: 14269 },
                    {name: '贵州',value: 5106 },
                    {name: '广东',value: 41800 },
                    {name: '青海',value: 600 },
                    {name: '西藏',value: 365 },
                    {name: '四川',value: 16160 },
                    {name: '宁夏',value: 1027 },
                    {name: '海南',value: 2149 },
                    {name: '台湾',value:  randomData()},
                    {name: '香港',value: randomData() },
                    {name: '澳门',value: 7}
                ]
            }
        ]
    };
    var mapInfo = document.getElementById("eChartBox4");
    var map = echarts.init(mapInfo);
    map.setOption(option4);
});
