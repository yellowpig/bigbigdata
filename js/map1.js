var myChart = echarts.init(document.getElementById('map'));
mapData = mapjson.map(function (serieData, idx) {
    var px = serieData[0] / 1000;
    var py = serieData[1] / 1000;
    var res = [
        [px, py]
    ];

    for (var i = 2; i < serieData.length; i += 2) {
        var dx = serieData[i] / 1000;
        var dy = serieData[i + 1] / 1000;
        var x = px + dx;
        var y = py + dy;
        res.push([x.toFixed(2), y.toFixed(2), 1]);

        px = x;
        py = y;
    }
    return res;
});
var zoomValue = 4;
/*var windowWidth = document.body.clientWidth;
if(windowWidth > 1900){
    zoomValue = 5;
}*/
myChart.setOption({
    bmap: {
        center: [105.13066322374, 39.240018034923],
        zoom: zoomValue,
        roam: true,
        mapStyle: {
            styleJson: [
                {
                    "featureType": "land",
                    "elementType": "all",
                    "stylers": {
                        "color": "#000000ff"
                    }
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": {
                        "color": "#000000ff"
                    }
                },
                {
                    "featureType": "boundary",
                    "elementType": "all",
                    "stylers": {
                        "color": "#000000ff"
                    }
                },
                {
                    "featureType": "country",
                    "elementType": "all",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "city",
                    "elementType": "labels.icon",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "city",
                    "elementType": "labels.text.fill",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "districtlabel",
                    "elementType": "all",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "green",
                    "elementType": "all",
                    "stylers": {
                        "color": "#000000ff",
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "manmade",
                    "elementType": "all",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": {
                        "color": "#000000ff",
                        "visibility": "on"
                    }
                }
            ]
        }
    },
    title: {
        text: '全国物联网布局大数据分析',
        subtext: '数据源来自物管理平台',
        left: 'center',
        textStyle: {
            color: '#fff'
        },
        top:"2%"
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{c}"
    },
    legend: {
        orient: 'vertical',
        y: 'bottom',
        x:'right',
        data:['参数一','参数二','参数三'],
        textStyle: {
            color: '#fff'
        }
    },
    series: [{
        name:'参数一',
        type: 'scatter',
        symbolSize: 1,
        large: true,
        itemStyle: {
            normal: {
                shadowBlur: 2,
                shadowColor: 'rgba(37, 140, 249, 0.8)',
                color: 'rgba(37, 140, 249, 0.8)'
            }
        },
        coordinateSystem: 'bmap',
        data: mapData[0]
    },
        {
            name:'参数二',
            type: 'scatter',
            symbolSize: 1,
            large: true,
            itemStyle: {
                normal: {
                    shadowBlur: 2,
                    shadowColor: 'rgba(14, 241, 242, 0.8)',
                    color: 'rgba(14, 241, 242, 0.8)'
                }
            },
            coordinateSystem: 'bmap',
            data: mapData[1]
        },
        {
            name:'参数三',
            type: 'scatter',
            symbolSize: 1,
            large: true,
            itemStyle: {
                normal: {
                    shadowBlur: 2,
                    shadowColor: 'rgba(255, 255, 255, 0.8)',
                    color: 'rgba(255, 255, 255, 0.8)'
                }
            },
            coordinateSystem: 'bmap',
            data: mapData[2]
        }]

});

var bmap = myChart.getModel().getComponent('bmap').getBMap();
bmap.addControl(new BMap.MapTypeControl(
    {
        mapTypes:[]
    }
));

bmap.setMapType(BMAP_NORMAL_MAP);

//var provList = new Array(["黑龙江","#F09ABD"],["吉林省","#01933F"],["辽宁","#FAC300"],["内蒙古","#FCF502"],["河北","#F09ABD"],["北京","#FCF502"],["天津","#01933F"],["山东省","#FCF502"],["江苏","#D8EDDA"],["上海","#B9B4C8"],["浙江","#FCF502"],["福建","#FAC300"],["台湾","#F09ABD"],["广东","#FCF502"],["海南","#F09ABD"],["广西","#FAC300"],["云南","#FCF502"],["西藏","#B9B4C8"],["新疆","#FAC300"],["甘肃","#01933F"],["青海","#F09ABD"],["四川","#FAC300"],["贵州","#01933F"],["重庆","#B9B4C8"],["湖南","#F09ABD"],["江西","#01933F"],["湖北","#FCF502"],["安徽","#FAC300"],["河南","#B9B4C8"],["陕西","#F09ABD"],["山西","#01933F"],["宁夏","#FAC300"]); //通过取色器获取各省颜色
var provList = new Array(["黑龙江","#323c47"],["吉林省","#323c47"],["辽宁","#323c47"],["内蒙古","#323c47"],["河北","#323c47"],["北京","#323c47"],["天津","#323c47"],["山东省","#323c47"],["江苏","#323c47"],["上海","#323c47"],["浙江","#323c47"],["福建","#323c47"],["台湾","#323c47"],["广东","#323c47"],["广西","#323c47"],["云南","#323c47"],["西藏","#323c47"],["新疆","#323c47"],["甘肃","#323c47"],["青海","#323c47"],["四川","#323c47"],["贵州","#323c47"],["重庆","#323c47"],["湖南","#323c47"],["江西","#323c47"],["湖北","#323c47"],["安徽","#323c47"],["河南","#323c47"],["陕西","#323c47"],["山西","#323c47"],["宁夏","#323c47"]);
//bmap.centerAndZoom("兰州", 5); //取兰州作为中心点

//bmap.addControl(new BMap.NavigationControl()); // 缩放控件
bmap.addControl(new BMap.ScaleControl()); // 比例尺
bmap.enableScrollWheelZoom();
function getBoundary(provItem){
    // console.log(provItem);
    var bdary = new BMap.Boundary();
    bdary.get(provItem[0], function(rs){       //获取行政区域
        var count = rs.boundaries.length; //行政区域的点有多少个
        if (count === 0) {
            alert('未能获取当前输入行政区域');
            return ;
        }
        var pointArray = [];
        for (var i = 0; i < count; i++) {
            //var ply = new BMap.Polygon(rs.boundaries[i], {strokeWeight: 1, strokeColor: "#aaaaaa", fillColor: provItem[1]}); //建立多边形覆盖物
            var ply = new BMap.Polygon(rs.boundaries[i], {strokeWeight: 1, strokeColor: "#000000", fillColor: provItem[1]}); //建立多边形覆盖物
            bmap.addOverlay(ply);  //添加覆盖物
            pointArray = pointArray.concat(ply.getPath());
        }
    });
}

setTimeout(function(){
    provList.forEach(function(item){
        getBoundary(item);
    });
}, 20);

$('#dropzone').hover(
    function () {
        $('#dropli').fadeIn(500);
    },function () {
        $('#dropli').fadeOut(500);
    }
);