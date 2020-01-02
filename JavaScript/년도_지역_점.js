//년도별 지역의 사상자 발생률(사상자수/인구)
var series = ['2014년도', '2015년도', '2016년도', '2017년도', '2018년도'];
var data_set = ["강원", "경기", "경남", "경북", "광주", "대구", "대전", "부산", "서울", "세종", "울산", "인천", "전남", "전북", "제주", "충남", "충북"];

var data_2014 = [0.0000954, 0.0001032, 0.0001119, 0.0001295, 0.0001635, 0.0003935, 0.0001275, 0.0001596, 0.0002885, 0.0000606, 0.0001347, 0.0001251, 0.0000932, 0.0001914, 0.0001664, 0.0000785, 0.0001572];
var data_2015 = [0.0000884, 0.0001217, 0.0000949, 0.0001299, 0.0001275, 0.0004297, 0.0001602, 0.0001556, 0.0002592, 0.0000214, 0.0001564, 0.0001263, 0.0001503, 0.0001275, 0.0001770, 0.0000599, 0.0001196];
var data_2016 = [0.0000842, 0.0000979, 0.0000848, 0.0001092, 0.0001338, 0.0002369, 0.0001628, 0.0001314, 0.0002272, 0.0000085, 0.0001115, 0.0000626, 0.0000862, 0.0001139, 0.0001084, 0.0000837, 0.0001387];
var data_2017 = [0.0000664, 0.0000800, 0.0000878, 0.0001062, 0.0001037, 0.0002315, 0.0001106, 0.0001183, 0.0002032, 0.0000451, 0.0000587, 0.0000492, 0.0001170, 0.0001022, 0.0000866, 0.0000739, 0.0001212];
var data_2018 = [0.0000546, 0.0000730, 0.0000659, 0.0001144, 0.0000831, 0.0001494, 0.0000863, 0.0001426, 0.0001573, 0.0000263, 0.0000555, 0.0000235, 0.0001101, 0.0000626, 0.0001087, 0.0000679, 0.0001272];

var color = ["#ea5e5e", "#ffdc34", "#1fab89" , "#1089ff", "#8d448b"];

var svg_dot = d3.select(".dot")
            .append("svg")
            .attr('width', 1000)
            .attr('height', 300);

    svg_dot.append('line') //x축
        .attr('x1', 40) 
        .attr('y1', 270)
        .attr('x2', 980)
        .attr('y2', 270)
        .style("stroke", 'black')
        .style("stroke-width",0.5);
    svg_dot.append('line') //x축
        .attr('x1', 40)
        .attr('y1', 30)
        .attr('x2', 980)
        .attr('y2', 30)
        .style("stroke", 'black')
        .style("stroke-width",0.5);

    svg_dot.append('line') //y축
        .attr('x1', 40)
        .attr('y1', 30)
        .attr('x2', 40)
        .attr('y2', 270)
        .style("stroke", 'black')
        .style("stroke-width",0.5);
        svg_dot.append('line') //y축
        .attr('x1', 980)
        .attr('y1', 30)
        .attr('x2', 980)
        .attr('y2', 270)
        .style("stroke", 'black')
        .style("stroke-width",0.5);

        for(var i = 0; i<6; i++) {
            svg_dot.append('line')
                .attr('x1', 40)
                .attr('y1', 270 - 48 * i)
                .attr('x2', 980)
                .attr('y2', 270 - 48 * i)
                .style("stroke", 'black')
                .style("stroke-width",0.2);

                svg_dot.append('line')
                .attr('x1', 40)
                .attr('y1', 270 - 48 * i)
                .attr('x2', 50)
                .attr('y2', 270 - 48 * i)
                .style("stroke", 'black')
                .style("stroke-width",0.5);

                svg_dot.append('text')
                .attr('x', 0)
                .attr('y', 270 - 48 * i + 7)
                .text(i /10000)
                .style("font-size", "13px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")
        }    
        for(var i = 0; i<17; i++) {
            svg_dot.append('line')
                .attr('x1', 57 * (i+1))
                .attr('y1', 30)
                .attr('x2', 57 * (i+1))
                .attr('y2', 270)
                .style("stroke", 'black')
                .style("stroke-width",0.2);

                svg_dot.append('text')
                .attr('x', 57 * (i+1) - 15)
                .attr('y', 290)
                .text(data_set[i])
                .style("font-size", "13px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")
                .attr("font-weight", "bold")
        }

        for(var i = 0; i < 17; i++) {
            svg_dot.append("circle")
                .attr('cx', 57 * (i+1))
                .attr('cy', 270 - data_2014[i] * 48 / 0.0001)
                .attr('r', 5)
                .style("fill", color[0])
                .attr("stroke", "white")
                .attr("stroke-width", 1)
                
                svg_dot.append("circle")
                .attr('cx', 57 * (i+1))
                .attr('cy', 270 - data_2015[i] * 48 / 0.0001)
                .attr('r', 5)
                .style("fill", color[1])
                .attr("stroke", "white")
                .attr("stroke-width", 1)

                svg_dot.append("circle")
                .attr('cx', 57 * (i+1))
                .attr('cy', 270 - data_2016[i] * 48 / 0.0001)
                .attr('r', 5)
                .style("fill", color[2])
                .attr("stroke", "white")
                .attr("stroke-width", 1)

                svg_dot.append("circle")
                .attr('cx', 57 * (i+1))
                .attr('cy', 270 - data_2017[i] * 48 / 0.0001)
                .attr('r', 5)
                .style("fill", color[3])
                .attr("stroke", "white")
                .attr("stroke-width", 1)

                svg_dot.append("circle")
                .attr('cx', 57 * (i+1))
                .attr('cy', 270 - data_2018[i] * 48 / 0.0001)
                .attr('r', 5)
                .style("fill", color[4])
                .attr("stroke", "white")
                .attr("stroke-width", 1)
        }

        
        for(var i = 0; i < 5; i++) {
            svg_dot.append("rect")
            .attr("x", 957) 
            .attr("y", 34 + i*21)
            .attr("width", 19) 
            .attr("height", 19) 
            .attr("fill", color[i])

            svg_dot.append("text")
            .attr("x", 900) 
            .attr("y", 48 + i*21)
            .text(series[i])
            .style("font-size", "13px")
            .attr("font-family", "맑은고딕")
            .attr("fill", "black")
        }


        function dot_interaction() {
            var cb1 = document.getElementById('s1');
            var cb2 = document.getElementById('s2');
            var cb3 = document.getElementById('s3');
            var cb4 = document.getElementById('s4');
            var cb5 = document.getElementById('s5');

            var color_tmp = ["#ea5e5e", "#ffdc34", "#1fab89" , "#1089ff", "#8d448b"];
    
            if(cb1.checked != false || cb2.checked != false || cb3.checked != false || cb4.checked != false || cb5.checked != false)
            {

                for(var i = 0; i < 17; i++) {
                    svg_dot.append("circle")
                        .attr('cx', 57 * (i+1))
                        .attr('cy', 270 - data_2014[i] * 48 / 0.0001)
                        .attr('r', 5)
                        .style("fill", "gray")
                        .attr("stroke", "white")
                        .attr("stroke-width", 1)

                        svg_dot.append("circle")
                        .attr('cx', 57 * (i+1))
                        .attr('cy', 270 - data_2015[i] * 48 / 0.0001)
                        .attr('r', 5)
                        .style("fill", "gray")
                        .attr("stroke", "white")
                        .attr("stroke-width", 1)
        
                        svg_dot.append("circle")
                        .attr('cx', 57 * (i+1))
                        .attr('cy', 270 - data_2016[i] * 48 / 0.0001)
                        .attr('r', 5)
                        .style("fill", "gray")
                        .attr("stroke", "white")
                        .attr("stroke-width", 1)
        
                        svg_dot.append("circle")
                        .attr('cx', 57 * (i+1))
                        .attr('cy', 270 - data_2017[i] * 48 / 0.0001)
                        .attr('r', 5)
                        .style("fill", "gray")
                        .attr("stroke", "white")
                        .attr("stroke-width", 1)
        
                        svg_dot.append("circle")
                        .attr('cx', 57 * (i+1))
                        .attr('cy', 270 - data_2018[i] * 48 / 0.0001)
                        .attr('r', 5)
                        .style("fill", "gray")
                        .attr("stroke", "white")
                        .attr("stroke-width", 1)
                }

                if(cb1.checked == true){
                    for(var i = 0; i < 17; i++) {
                        svg_dot.append("circle")
                            .attr('cx', 57 * (i+1))
                            .attr('cy', 270 - data_2014[i] * 48 / 0.0001)
                            .attr('r', 5)
                            .style("fill", color_tmp[0])
                            .attr("stroke", "white")
                            .attr("stroke-width", 1)
                    }
                }
    
                if(cb2.checked == true){
                    for(var i = 0; i < 17; i++) {
                        svg_dot.append("circle")
                            .attr('cx', 57 * (i+1))
                            .attr('cy', 270 - data_2015[i] * 48 / 0.0001)
                            .attr('r', 5)
                            .style("fill", color_tmp[1])
                            .attr("stroke", "white")
                            .attr("stroke-width", 1)
                    }
                }
    
                if(cb3.checked == true){
                    for(var i = 0; i < 17; i++) {
                        svg_dot.append("circle")
                            .attr('cx', 57 * (i+1))
                            .attr('cy', 270 - data_2016[i] * 48 / 0.0001)
                            .attr('r', 5)
                            .style("fill", color_tmp[2])
                            .attr("stroke", "white")
                            .attr("stroke-width", 1)
                    }
                }
    
                if(cb4.checked == true){
                    for(var i = 0; i < 17; i++) {
                        svg_dot.append("circle")
                            .attr('cx', 57 * (i+1))
                            .attr('cy', 270 - data_2017[i] * 48 / 0.0001)
                            .attr('r', 5)
                            .style("fill", color_tmp[3])
                            .attr("stroke", "white")
                            .attr("stroke-width", 1)
                    }
                }
    
                if(cb5.checked == true){
                    for(var i = 0; i < 17; i++) {
                        svg_dot.append("circle")
                            .attr('cx', 57 * (i+1))
                            .attr('cy', 270 - data_2018[i] * 48 / 0.0001)
                            .attr('r', 5)
                            .style("fill", color_tmp[4])
                            .attr("stroke", "white")
                            .attr("stroke-width", 1)
                    }
                }
            }
            else {
                for(var i = 0; i < 17; i++) {
                    svg_dot.append("circle")
                        .attr('cx', 57 * (i+1))
                        .attr('cy', 270 - data_2014[i] * 48 / 0.0001)
                        .attr('r', 5)
                        .style("fill", color_tmp[0])
                        .attr("stroke", "white")
                        .attr("stroke-width", 1)
                        
                        svg_dot.append("circle")
                        .attr('cx', 57 * (i+1))
                        .attr('cy', 270 - data_2015[i] * 48 / 0.0001)
                        .attr('r', 5)
                        .style("fill", color_tmp[1])
                        .attr("stroke", "white")
                        .attr("stroke-width", 1)
        
                        svg_dot.append("circle")
                        .attr('cx', 57 * (i+1))
                        .attr('cy', 270 - data_2016[i] * 48 / 0.0001)
                        .attr('r', 5)
                        .style("fill", color_tmp[2])
                        .attr("stroke", "white")
                        .attr("stroke-width", 1)
        
                        svg_dot.append("circle")
                        .attr('cx', 57 * (i+1))
                        .attr('cy', 270 - data_2017[i] * 48 / 0.0001)
                        .attr('r', 5)
                        .style("fill", color_tmp[3])
                        .attr("stroke", "white")
                        .attr("stroke-width", 1)
        
                        svg_dot.append("circle")
                        .attr('cx', 57 * (i+1))
                        .attr('cy', 270 - data_2018[i] * 48 / 0.0001)
                        .attr('r', 5)
                        .style("fill", color_tmp[4])
                        .attr("stroke", "white")
                        .attr("stroke-width", 1)
                }
            }
        }
       