function addmodel() {
    var content='请选择绑定参数tem的设备：<select><option>1</option><option>2</option></select><br/>' +
        '请选择绑定参数hum的设备：<select><option>1</option><option>2</option></select>'
    var index=layer.open({
        title: '添加实例'
        ,content: content
        ,yes:function () {
            console.log("click")
            layer.close(index)
        }
    });
}