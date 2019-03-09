

var myChart_ca6c79b2e66444f1864daab666bd7489 = echarts.init(document.getElementById('ca6c79b2e66444f1864daab666bd7489'), 'light', {renderer: 'canvas'});

var option_ca6c79b2e66444f1864daab666bd7489 = {
    "title": [
        {
            "text": "\u59b9\u5b50\u8eab\u9ad8\u5206\u5e03\u67f1\u72b6\u56fe",
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
    "series_id": 6183580,
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
            "type": "bar",
            "name": "\u59b9\u5b50\u8eab\u9ad8",
            "data": [
                9.0,
                3648.0,
                9262.0,
                770.0,
                11.0
            ],
            "barCategoryGap": 0,
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "markPoint": {
                "data": []
            },
            "markLine": {
                "data": []
            },
            "seriesId": 6183580
        }
    ],
    "legend": [
        {
            "data": [
                "\u59b9\u5b50\u8eab\u9ad8"
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
    "xAxis": [
        {
            "show": true,
            "nameLocation": "middle",
            "nameGap": 25,
            "nameTextStyle": {
                "fontSize": 14
            },
            "axisTick": {
                "alignWithLabel": false
            },
            "inverse": false,
            "boundaryGap": true,
            "type": "category",
            "splitLine": {
                "show": false
            },
            "axisLabel": {
                "interval": "auto",
                "rotate": 0,
                "margin": 8,
                "textStyle": {
                    "fontSize": 12
                }
            },
            "data": [
                "140",
                "150",
                "160",
                "170",
                "180"
            ]
        }
    ],
    "yAxis": [
        {
            "show": true,
            "nameLocation": "middle",
            "nameGap": 25,
            "nameTextStyle": {
                "fontSize": 14
            },
            "axisTick": {
                "alignWithLabel": false
            },
            "inverse": false,
            "boundaryGap": true,
            "type": "value",
            "splitLine": {
                "show": true
            },
            "axisLabel": {
                "interval": "auto",
                "formatter": "{value} ",
                "rotate": 0,
                "margin": 8,
                "textStyle": {
                    "fontSize": 12
                }
            }
        }
    ],
    "color": [
        "#ca8622",
        "#2a5caa",
        "#1d953f",
        "#bda29a",
        "#ac6767",
        "#6d8346",
        "#f47920",
        "#918597",
        "#b2d235",
        "#c23531",
        "#546570",
        "#fab27b",
        "#f05b72",
        "#ef5b9c",
        "#749f83",
        "#6e7074",
        "#61a0a8",
        "#905a3d",
        "#726930",
        "#f6f5ec",
        "#c4ccd3",
        "#2f4554",
        "#444693",
        "#6950a1",
        "#d48265"
    ]
};
myChart_ca6c79b2e66444f1864daab666bd7489.setOption(option_ca6c79b2e66444f1864daab666bd7489);

