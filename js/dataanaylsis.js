var myChart = echarts.init(document.getElementById('mycanvas'));
day=['2018-7-20','2018-7-21','2018-7-22']
option = {
    title: {},
    legend: {
        data: ['最大值', '均值', '最小值','标准差'],
        align: 'left'
    },
    toolbox: {
        // y: 'bottom',
        feature: {
            magicType: {
                type: ['stack', 'tiled']
            },
            dataView: {},
            saveAsImage: {
                pixelRatio: 2
            }
        }
    },
    tooltip: {},
    xAxis: {
        data: day,
        silent: false,
        splitLine: {
            show: false
        }
    },
    yAxis: {
    },
    series: [{
        name: '最大值',
        type: 'bar',
        data: [89,79,63],
        animationDelay: function (idx) {
            return idx * 10;
        }
    }, {
        name: '均值',
        type: 'bar',
        data: [52,58,77],
        animationDelay: function (idx) {
            return idx * 10 + 100;
        }
    },
        {
            name: '最小值',
            type: 'bar',
            data: [37,67,80],
            animationDelay: function (idx) {
                return idx * 10;
            }
        },
        {
            name: '标准差',
            type: 'bar',
            data: [96,36,10],
            animationDelay: function (idx) {
                return idx * 10;
            }
        }
        ],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function (idx) {
        return idx * 5;
    }
};
myChart.clear();
myChart.setOption(option);
