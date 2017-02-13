/**
 * chart2Ctrl 折线图 控制器
 */
App.controller('chart2Ctrl',function($scope,$resource){

    //var list = $resource(baseurl+'/jahwa/echarts/linechart');
    //list.get({},function(data,header){
    //    $scope.supplyInfo = data.result;
    //});
    //折线图
    option2 = {
        title : {
            text: '总销售量走势(Salesvolume)',
            subtext: '纯属虚构'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['线上销售量', '线下销售量']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : [
                    '2014年1月','2014年2月','2014年3月','2014年4月','2014年5月','2014年6月','2014年7月','2014年8月','2014年9月','2014年10月','2014年11月','2014年12月',
                    '2015年1月','2015年2月','2015年3月','2015年4月','2015年5月','2015年6月','2015年7月','2015年8月','2015年9月','2015年10月','2015年11月','2015年12月',
                    '2016年1月','2016年2月','2016年3月','2016年4月','2016年5月','2016年6月','2016年7月','2016年8月','2016年9月','2016年10月','2016年11月','2016年12月',
                    '2017年1月','2017年2月','2017年3月','2017年4月','2017年5月','2017年6月','2017年7月','2017年8月','2017年9月','2017年10月','2017年11月','2017年12月',
                    '2018年1月','2018年2月','2018年3月','2018年4月','2018年5月','2018年6月','2018年7月','2018年8月','2018年9月','2018年10月','2018年11月','2018年12月',
                ]
                //data : $scope.supplyInfo.timeLine
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel : {
                    formatter: '{value}'
                }
            }
        ],
        series : [
            {
                name:'线上销售量',
                type:'line',
                data:[
                    11,12,15,10,17,27,30,33,29,25,19,15,
                    11,12,15,10,17,27,30,37,29,25,19,10,
                    15,12,15,10,17,27,30,35,30,25,19,13,
                    13,12,15,10,17,27,30,32,35,25,19,11,
                    12,12,15,10,17,27,30,33,29,25,19,11
                ],
                //data:$scope.supplyInfo.onLine,
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            }
            ,
            {
                name:'线下销售量',
                type:'line',
                data:[
                    1,-1,3,5,7,10,22,25,19,16,12,10,
                    -2,-1,3,5,7,10,22,26,15,16,12,8,
                    2,-1,3,5,7,10,22,23,18,16,12,8,
                    5,2,3,5,7,10,22,24,15,16,12,8,
                    3,-1,3,5,7,10,22,27,17,16,12,8
                ],
                //data:$scope.supplyInfo.offLine,
                markPoint : {
                    data : [
                        {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name : '平均值'}
                    ]
                }
            }
        ]
    };
    var chartContainer = document.getElementById("eChartBox2");
    var myChart = echarts.init(chartContainer);
    myChart.setOption(option2);
});
