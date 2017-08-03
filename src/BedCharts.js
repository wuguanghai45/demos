import G2 from "g2";
import React  from "react";
import { Stat } from 'g2';
/*病床使用率算定义组件*/
export default class BedCharts extends React.Component{

    componentDidMount()  {
        console.log(this.props)

        //用到的颜色
        const colorList = this.props.colorList;
        //数据
        const R=this.props.R;//半圆半径
        const data=this.props.data;//显示数据
        //画布大小
        const width=this.props.width;
        const height=this.props.height;

        var Shape = G2.Shape;
        // 自定义Shape 部分
        Shape.registShape('point', 'dashBoard', {
            drawShape: function(cfg, group){
                var origin = cfg.origin; // 原始数据
                var point = cfg.points[0]; // 获取第一个标记点
                point = this.parsePoint({ // 将标记点转换到画布坐标
                    x: point.x,
                    y: 0.95
                });
                var center = this.parsePoint({ // 获取极坐标系下画布中心点
                    x: 0,
                    y: 0
                });
                var r =R[0];
                var shape;

                /*  var imageW = 700;
                 var imageH = 500;
                 group.addShape('image', {
                 attrs: {
                 x: center.x -imageW / 2,
                 y: center.y - imageH,
                 width: imageW,
                 height: imageH,
                 img:"back.png"
                 }
                 });*/

                /*    group.addShape('circle', {
                 attrs: {
                 x: center.x,
                 y: center.y,
                 r: 320,
                 fill: '#0074C9',
                 textAlign: 'center'
                 }
                 });*/
                group.addShape('fan', {
                    attrs: {
                        x: center.x+r,
                        y: center.y,
                        rs: 0,
                        re: 13 * r,
                        startAngle: -Math.PI,
                        endAngle: 0,
                        stroke: colorList[0],//边框颜色
                        fill:colorList[0]//填充颜色
                    }
                });
                group.addShape('fan', {
                    attrs: {
                        x: center.x+r,
                        y: center.y,
                        rs: 0,
                        re: 13 * r,
                        startAngle: -Math.PI/1.25,
                        endAngle: 0,
                        stroke: colorList[1],
                        fill:colorList[1]
                    }
                });
                group.addShape('fan', {
                    attrs: {
                        x: center.x+r,
                        y: center.y,
                        rs: 0,
                        re: 13 * r,
                        startAngle: -Math.PI/2,
                        endAngle: 0,
                        stroke: colorList[2],
                        fill:colorList[2]
                    }
                });
                group.addShape('fan', {
                    attrs: {
                        x: center.x+r,
                        y: center.y,
                        rs: 0,
                        re: 13 * r,
                        startAngle: -Math.PI/3.6,
                        endAngle: 0,
                        stroke: colorList[3],
                        fill:colorList[3]
                    }
                });

                /*内部圆设置偏移*/
                group.addShape('fan', {
                    attrs: {
                        x: center.x,
                        y: center.y,
                        rs: 0,
                        re: 10 * r,
                        startAngle: -Math.PI,
                        endAngle: 0,
                        stroke:colorList[4],
                        fill:colorList[4]
                    }
                });
                //第一个三角形位置
                group.addShape('polygon', {
                    attrs: {
                        points: [
                            [center.x-10*r+r/2.3, center.y-10*r+2*r+r/2.5],
                            [center.x-10*r/Math.sqrt(2)+r/9, center.y-10*r/Math.sqrt(2)-2*r/1.2],
                            [center.x-10*r+2*r+2, center.y-10*r/Math.sqrt(2)+r/1.2]

                        ],
                        // stroke: 'l (0) 0.2:#ff00ff 1:#0000ff',
                        fill:colorList[0],
                        //fill:'red',
                    }
                });
                //第二个三角形位置
                group.addShape('polygon', {
                    attrs: {
                        points: [
                            [center.x+r-1, center.y-13 * r],
                            [center.x+r-1, center.y-10 * r],
                            [center.x+Math.sqrt(Math.pow(3*r,2)-Math.pow(3*r/2,2)), center.y-10*r-3*r/2]
                        ],
                        fill:colorList[1],
                    }
                });
                //第三个三角形位置
                group.addShape('polygon', {
                    attrs: {
                        points: [
                            [center.x+10*r-r+r/3.5, center.y-10*r-1],
                            [center.x+10*r/Math.sqrt(2)-r/5.5, center.y-10*r/Math.sqrt(2)-r/6],
                            [center.x+10*r+r/4, center.y-10*r/Math.sqrt(2)]
                        ],
                        fill:colorList[2],
                    }
                });
                //指针的位置
                group.addShape('polygon', {
                    attrs: {
                        points: [
                            [point.x-r, point.y-r],
                            [center.x+r/2,  center.y+r/2],
                            [center.x-r/2, center.y-r/2],
                        ],
                        lineWidth: 2,
                        arrow: false,
                        fill: colorList[5]
                    }
                });

                group.addShape('circle', {
                    attrs: {
                        x: center.x,
                        y: center.y,
                        r: r,
                        fill: colorList[5],
                        textAlign: 'center'
                    }
                });
                group.addShape('circle', {
                    attrs: {
                        x: center.x,
                        y: center.y,
                        r: r / 2,
                        fill: colorList[4],
                        textAlign: 'center'
                    }
                });
                //文本样式
                group.addShape('text', {
                    attrs: {
                        x: center.x,
                        y: center.y+60,
                        text: '病床使用率为：'+data[0]+'%',
                        fontSize: 28,
                        fontFamily:"黑体",
                        fill: '#ffffff',
                        textAlign: 'center'
                    }
                });


                return shape;
            }
        });
        // G2 语法部分
        var color = ['#EB6100', '#EFCF6E', '#E47668'];
        var chart = new G2.Chart({
            id : 'bedCharts',
            forceFit: true,
            height: height,
            width:width,
            plotCfg: {
                // margin: 100
            }
        });
        chart.source(creatData());
        chart.coord('gauge', {
            startAngle: - Math.PI,
            endAngle: 0,
            radius:0.8,
            inner:0.3

        });
        chart.col('value', {
            min: 0,
            max: 0.15,
            tickInterval: 0.075
        });
        chart.axis('value', {
            tickLine: {
                stroke: '#0074C9'
            },
            labelOffset: 0
        });
        chart.axis(false);//隐藏刻度
        chart.point().position('value').shape('dashBoard').color('value', function(v){ // 根据值的大小确定标记的颜色
            var rst;
            if ( v < 0.05 ) {
                rst = color[0];
            } else if ( v < 0.1 ){
                rst = color[1];
            } else {
                rst = color[2];
            }
            return rst;
        });
        chart.legend(false);
        draw(creatData());
        setInterval(function(){
            // draw(creatData());
        }, 1000);
        function draw(data) {
            var lineWidth = 80;
            // chart.guide().clear();
            /* chart.guide().arc([0, 0.95],[0.15, 0.95],{
             stroke: '#0A3859',
             lineWidth: lineWidth
             });
             chart.guide().arc([0, 0.95],[0.11, 0.95],{
             stroke: '#0074C9',
             lineWidth: lineWidth
             });
             chart.guide().arc([0, 0.95],[0.07, 0.95],{
             stroke: '#38A0E7',
             lineWidth: lineWidth
             });
             chart.guide().arc([0, 0.95],[0.03, 0.95],{
             stroke: '#38D4E7',
             lineWidth: lineWidth
             });*/


            chart.changeData(data);
        }
        function creatData(){
            var data = [];
            var val = /*0.12*/Math.random() * 0.15;
            val = val.toFixed(3);
            data.push({value: Number(val)});
            return data;
        }
    }
    render(){
        return(
            <div id="bedCharts">

            </div>
        );
    }
}
