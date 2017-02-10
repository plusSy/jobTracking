/**
 * chart3Ctrl 饼状图 控制器
 */
App.controller('chart3Ctrl',function($scope,$resource){

    //var list = $resource(baseurl+'/jahwa/echarts/piechart');
    //list.get({},function(data,header){
    //    $scope.pieInfo = data.result;
    //})
    //饼状图
    option3 = {
        title : {
            text: '销售渠道所占比例',
            subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data:['SQE','IQC','Procurement','PE','QA','R&D','Program','Procurement_Mgr']
            //data: $scope.pieInfo.labels
        },
        series : [
            {
                name: '销售渠道',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'SQE'},
                    {value:310, name:'Procurement'},
                    {value:234, name:'PE'},
                    {value:135, name:'QA'},
                    {value:100, name:'R&D'},
                    {value:100, name:'Program'},
                    {value:100, name:'Procurement_Mgr'},
                    {value:1548, name:'IQC'}
                ],
                //data:$scope.pieInfo.resultList,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    var pieSimple = document.getElementById("eChartBox3");
    var pie = echarts.init(pieSimple);
    pie.setOption(option3);
});
