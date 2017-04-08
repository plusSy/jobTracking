/**
 * chartsCtrl 图表的JS
 * Created by applesyl on 2017/2/13.
 */
App.controller('chartsCtrl',function($scope,$rootScope,$stateParams,$resource) {

    //就业行业分布
    //接口联调时候 将此放开
    //var list = $resource(baseurl+'/jahwa/echarts/histogramchart');
    //list.get({},function(data,header){
    //    $scope.char1Info = data.result;
    //});

    /**就业行业分布 开始**/
   var echartsIndustryOption = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    //normal: {
                    //    show: true,
                    //    position: 'center',
                    //},
                    normal: {
                        show:true,
                        position:'outside',
                        formatter:'{b}({d}%)'
                    },
                    emphasis: {
                        show: true,
                        position:'center',
                        textStyle: {
                            fontSize: '16',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: true
                    }
                },
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}
                ]
            }
        ]
    };
    var echartsIndustry = document.getElementById("echartsIndustry");
    var myChart = echarts.init(echartsIndustry);
    myChart.setOption(echartsIndustryOption);


    /**就业职位类别统计 开始**/
    var echartsPositionOption = {
        title: {
            text: '职位类别',
                x:'center',
                textStyle: {
                    fontSize: 12
                 },
            padding:[10,0,0,0]
        },
        color: ['#3398DB'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: "{b} <br/>{a} : {c}人"
        },
        grid: {
            left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                name:'单位（人）'
            }
        ],
        series : [
            {
                name:'共有人数',
                type:'bar',
                barWidth: '50%',
                data:[10, 52, 200, 334, 390, 330, 220],
                label: {
                    normal: {
                        show:true,
                        position: 'top',
                        textStyle:{
                            color:'#000',
                            fontSize:6,
                            fontWeight:'lighter',
                            fontStyle:'normal'
                        }
                    }
                }
            }
        ]
    };
    var echartsPosition = document.getElementById("echartsPosition");
    var myChart2 = echarts.init(echartsPosition);
    myChart2.setOption(echartsPositionOption);

    /**就业率折线分布 开始**/
    var echartsBrokenLineOption = {
        //title: {
        //    text: '未来一周气温变化',
        //    subtext: '纯属虚构'
        //},
        tooltip: {
            trigger: 'axis'
        },
        //legend: {
        //    data:['就业率展示']
        //},
        toolbox: {
            show: true,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {readOnly: false},
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} %'
            }
        },
        series: [
            {
                name:'就业率',
                type:'line',
                data:[11, 11, 15, 13, 12, 13, 10],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            }
        ]
    };
    var echartsBrokenLine = document.getElementById("echartsBrokenLine");
    var myChart3 = echarts.init(echartsBrokenLine);
    myChart3.setOption(echartsBrokenLineOption);

    var convertDataMap = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };

    /**就业城市分布地图 开始**/
    var echartsMapOption = {
        backgroundColor: '#404a59',
        title: {
            text: '就业城市分布热点',
            subtext: 'Data from the graduation city',
            //sublink: 'http://www.pm25.in',
            left: '20',
            top: '20',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip : {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            y: 'bottom',
            x:'right',
            data:['job numbers'],
            textStyle: {
                color: '#fff'
            }
        },
        visualMap: {
            min: 0,
            max: 200,
            left: '20',
            calculable: true,
            inRange: {
                color: ['#50a3ba', '#eac736', '#d94e5d']
            },
            textStyle: {
                color: '#fff'
            }
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: false,
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#111'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
        },
        series : [
            {
                name: '就业人数',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertDataMap(mapData),
                symbolSize: function (val) {
                    return val[2] / 10;
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ddb926'
                    }
                }
            },
            {
                name: '就业人数',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertDataMap(mapData.sort(function (a, b) {
                    return b.value - a.value;
                }).slice(0, 6)),
                symbolSize: function (val) {
                    return val[2] / 10;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#f4e925',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                zlevel: 1
            }
        ]
    };
    var echartsMap = document.getElementById("echartsMap");
    var myChart4 = echarts.init(echartsMap);
    myChart4.setOption(echartsMapOption);
});