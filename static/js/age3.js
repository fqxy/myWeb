var myChart_bc8bc1d593294ffc8fa30d841d0f395f = echarts.init(document.getElementById('bc8bc1d593294ffc8fa30d841d0f395f'), 'light', {renderer: 'canvas'});

var option_bc8bc1d593294ffc8fa30d841d0f395f = {
    "title": [
        {
            "text": "\u59b9\u5b50\u5e74\u9f84\u5206\u5e03\u96f7\u8fbe\u56fe",
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
    "series_id": 1073630,
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
            "type": "radar",
            "name": "\u5e74\u9f84\u6bb5",
            "data": [
                [
                    3559.0,
                    6138.0,
                    2889.0,
                    302.0,
                    66.0
                ]
            ],
            "symbol": "circle",
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
            "itemStyle": {
                "normal": {}
            },
            "lineStyle": {
                "normal": {
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "areaStyle": {
                "opacity": 0
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u5e74\u9f84\u6bb5"
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
    "radar": {
        "indicator": [
            {
                "name": "18-30",
                "max": 8000
            },
            {
                "name": "26-30",
                "max": 8000
            },
            {
                "name": "31-40",
                "max": 8000
            },
            {
                "name": "41-50",
                "max": 8000
            },
            {
                "name": "50\u4ee5\u4e0a",
                "max": 8000
            }
        ],
        "name": {
            "textStyle": {
                "color": "#333",
                "fontSize": 12
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "normal": {
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        },
        "splitArea": {
            "show": true,
            "areaStyle": {
                "opacity": 1
            }
        },
        "axisLine": {
            "show": true,
            "lineStyle": {
                "normal": {
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    },
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
myChart_bc8bc1d593294ffc8fa30d841d0f395f.setOption(option_bc8bc1d593294ffc8fa30d841d0f395f);

