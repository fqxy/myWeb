var myChart_8e844f825a534d6d9c38180060be6100 = echarts.init(document.getElementById('8e844f825a534d6d9c38180060be6100'), 'light', {renderer: 'canvas'});

var option_8e844f825a534d6d9c38180060be6100 = {
    "title": [
        {
            "text": "\u59b9\u5b50\u8eab\u9ad8\u5206\u5e03\u997c\u56fe-\u5706\u73af\u56fe",
            "left": "center",
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
    "series_id": 8204956,
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
            "type": "pie",
            "data": [
                {
                    "name": "140",
                    "value": 9.0
                },
                {
                    "name": "150",
                    "value": 3648.0
                },
                {
                    "name": "160",
                    "value": 9262.0
                },
                {
                    "name": "170",
                    "value": 770.0
                },
                {
                    "name": "180",
                    "value": 11.0
                }
            ],
            "radius": [
                "40%",
                "75%"
            ],
            "center": [
                "50%",
                "50%"
            ],
            "label": {
                "normal": {
                    "show": true,
                    "position": "outside",
                    "textStyle": {
                        "fontSize": 12
                    },
                    "formatter": "{b}: {d}%"
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    },
                    "formatter": "{b}: {d}%"
                }
            },
            "seriesId": 8204956
        }
    ],
    "legend": [
        {
            "data": [
                "140",
                "150",
                "160",
                "170",
                "180"
            ],
            "selectedMode": "multiple",
            "show": true,
            "left": "left",
            "top": "top",
            "orient": "vertical",
            "textStyle": {
                "fontSize": 12
            }
        }
    ],
    "color": [
        "#546570",
        "#61a0a8",
        "#c23531",
        "#726930",
        "#d48265",
        "#6950a1",
        "#fab27b",
        "#ca8622",
        "#c4ccd3",
        "#749f83",
        "#f05b72",
        "#b2d235",
        "#ac6767",
        "#ef5b9c",
        "#6e7074",
        "#6d8346",
        "#2a5caa",
        "#bda29a",
        "#905a3d",
        "#1d953f",
        "#918597",
        "#f47920",
        "#f6f5ec",
        "#444693",
        "#2f4554"
    ]
};
myChart_8e844f825a534d6d9c38180060be6100.setOption(option_8e844f825a534d6d9c38180060be6100);

