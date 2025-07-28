axisLabel: {
    show: true,
    interval: 0, // 确保显示所有标签
    textStyle: {
        fontSize: 12 // 可调整字体大小以适应更多标签
    },
    // 移除或修改formatter函数
    formatter: function(params) {
        return params; // 直接返回原始标签
    }
}