var myChart = echarts.init(document.getElementById('main'));

option = {
    title : {
        text: '设备数量',
        subtext: '',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['压力传感器','温度传感器','湿度传感器','形变传感器','速率传感器','光照传感器']
    },
    series : [
        {
            name: '传感器数量',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:30963, name:'压力传感器'},
                {value:86773, name:'温度传感器'},
                {value:64923,name:'湿度传感器'},
                {value:54321, name:'形变传感器'},
                {value:22222, name:'速率传感器'},
                {value:12345, name:'光照传感器'}
            ],
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

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

// 基于准备好的dom，初始化echarts实例
var myChart1 = echarts.init(document.getElementById('main1'));

option1 = {
    title : {
        text: '数据数量',
        subtext: '',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['压力传感器','温度传感器','湿度传感器','形变传感器','速率传感器','光照传感器']
    },
    series : [
        {
            name: '传感器数量',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:5313366, name:'压力传感器'},
                {value:5432222, name:'温度传感器'},
                {value:7632732, name:'湿度传感器'},
                {value:1234743, name:'形变传感器'},
                {value:8453215, name:'速率传感器'},
                {value:5246789, name:'光照传感器'}
            ],
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

// 使用刚指定的配置项和数据显示图表。
myChart1.setOption(option1);

// 基于准备好的dom，初始化echarts实例
var myChart2 = echarts.init(document.getElementById('main2'));

option2 = {
    title : {
        text: '正常数据数量',
        subtext: '',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['压力传感器','温度传感器','湿度传感器','形变传感器','速率传感器','光照传感器']
    },
    series : [
        {
            name: '传感器数量',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:5313366, name:'压力传感器'},
                {value:5432222, name:'温度传感器'},
                {value:7632732, name:'湿度传感器'},
                {value:1234743, name:'形变传感器'},
                {value:8453215, name:'速率传感器'},
                {value:5246789, name:'光照传感器'}
            ],
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

// 使用刚指定的配置项和数据显示图表。
myChart2.setOption(option2);

// 基于准备好的dom，初始化echarts实例
var myChart3 = echarts.init(document.getElementById('main3'));

option3 = {
    title : {
        text: '正常数据占有率',
        subtext: '',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['压力传感器','温度传感器','湿度传感器','形变传感器','速率传感器','光照传感器']
    },
    series : [
        {
            name: '传感器数量',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:0.97, name:'压力传感器'},
                {value:0.67, name:'温度传感器'},
                {value:0.85, name:'湿度传感器'},
                {value:0.33, name:'形变传感器'},
                {value:0.75, name:'速率传感器'},
                {value:0.84, name:'光照传感器'}
            ],
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

// 使用刚指定的配置项和数据显示图表。
myChart3.setOption(option3);