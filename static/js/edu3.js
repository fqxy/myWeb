var myChart_efaf4521b5744608bd71fa583b03e610 = echarts.init(document.getElementById('efaf4521b5744608bd71fa583b03e610'), 'light', {renderer: 'canvas'});

var option_efaf4521b5744608bd71fa583b03e610 = {
    "title": [
        {
            "text": "\u59b9\u5b50\u5b66\u5386\u5206\u5e03\u6f0f\u6597\u56fe",
            "left": "auto",
            "top": "auto",
            "textStyle": {
                "fontSize": 18
            },
            "subtextStyle": {
                "fontSize": 12
            }
        }
    ],
    "toolbox": {
        "show": true,
        "orient": "vertical",
        "left": "95%",
        "top": "center",
        "feature": {
            "saveAsImage": {
                "show": true,
                "title": "\u4e0b\u8f7d\u56fe\u7247"
            },
            "restore": {
                "show": true
            },
            "dataView": {
                "show": true
            }
        }
    },
    "series_id": 3517606,
    "tooltip": {
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "textStyle": {
            "fontSize": 14
        },
        "backgroundColor": "rgba(50,50,50,0.7)",
        "borderColor": "#333",
        "borderWidth": 0
    },
    "series": [
        {
            "type": "funnel",
            "name": "\u5b66\u5386",
            "data": [
                {
                    "name": "\u672c\u79d1",
                    "value": 4968
                },
                {
                    "name": "\u5927\u4e13",
                    "value": 4358
                },
                {
                    "name": "\u9ad8\u4e2d",
                    "value": 1278
                },
                {
                    "name": "\u4e2d\u4e13",
                    "value": 1088
                },
                {
                    "name": "\u521d\u4e2d",
                    "value": 711
                },
                {
                    "name": "\u7855\u58eb",
                    "value": 548
                },
                {
                    "name": "\u535a\u58eb",
                    "value": 19
                },
                {
                    "name": "\u9662\u58eb",
                    "value": 2
                }
            ],
            "label": {
                "normal": {
                    "show": true,
                    "position": "inside",
                    "textStyle": {
                        "color": "#fff",
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u5927\u4e13",
                "\u535a\u58eb",
                "\u9ad8\u4e2d",
                "\u521d\u4e2d",
                "\u9662\u58eb",
                "\u4e2d\u4e13",
                "\u7855\u58eb",
                "\u672c\u79d1"
            ],
            "selectedMode": "multiple",
            "show": true,
            "left": "center",
            "top": "top",
            "orient": "horizontal",
            "textStyle": {
                "fontSize": 12
            }
        }
    ],
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597",
        "#f6f5ec"
    ]
};
myChart_efaf4521b5744608bd71fa583b03e610.setOption(option_efaf4521b5744608bd71fa583b03e610);