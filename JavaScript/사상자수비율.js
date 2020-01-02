
var c = ['#f7f7f7','#cccccc','#969696','#636363','#252525'];

var svg_map = d3.select(".map1")
            .append("svg")
            .attr('width', 400)
            .attr('height', 400)

    for (var i = 0; i < 5; i++) {
        svg_map.append("rect")
            .attr("x", 5)
            .attr("y", 82 + (48 * i))
            .attr("width", 20)
            .attr("height", 48)
            .attr("fill", c[i])        
    }

    for (var i = 0; i <= 5; i++) {
        var text = i * (0.0001);
        svg_map.append('text')
            .attr('x', 26)
            .attr('y', 85 + (48 * i))
            .text(text.toFixed(4))
            .style("font-size", "13px")
            .attr("font-family", "맑은고딕")
            .attr("fill", "black")
    }

var x = d3.scaleLinear().range([50, 400]);
var y = d3.scaleLinear().range([400, 0]);
    x.domain([124, 131.7]);
    y.domain([32.5, 39.5]);

    //대구
    var color = "#969696";

    svg_map.data([대구]).append("polygon")
                .attr("points", function (d) {
                        return d.map(function (d) {
                        return [x(d[0]), y(d[1])].join(",");
                    }).join(" ");
                })
                .attr("stroke", "black")
                .attr('stroke-width', 0.5)
                .attr("fill", color)

    //대전
    var color = "#cccccc";
    
    svg_map.data([대전]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    //경기  
    var color = "#f7f7f7";

    svg_map.data([경기]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    //강원    
    var color = "#f7f7f7";
            
    svg_map.data([강원]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    //부산
    var color = "#cccccc";
    
    svg_map.data([부산1]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

                    svg_map.data([부산2]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([부산2]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([부산3]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    //서울
    var color = "#cccccc";

    svg_map.data([서울]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)
    
                    
    //세종
    var color = "#f7f7f7";

    svg_map.data([세종]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)
    
    //울산
    var color = "#cccccc";
    
    svg_map.data([울산]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    //인천
    var color = "#f7f7f7";
    
    svg_map.data([인천1]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([인천2]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)


    svg_map.data([인천3]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([인천4]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)


    svg_map.data([인천5]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([인천6]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([인천7]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([인천8]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([인천9]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([인천10]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    //제주
    var color = "#cccccc";
    
    svg_map.data([제주]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    //경남
    var color = "#f7f7f7";

    svg_map.data([경남1]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([경남2]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([경남3]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([경남4]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([경남5]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([경남6]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([경남7]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    //경북
    var color = "#cccccc";

    svg_map.data([경북1]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([경북2]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    //충남
    var color = "#f7f7f7";

    svg_map.data([충남1]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([충남2]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    //충북 
    var color = "#cccccc";
    
    svg_map.data([충북]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    //전남
    var color = "#cccccc";

    svg_map.data([전남1]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([전남2]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([전남3]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([전남4]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([전남5]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([전남6]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)
                    
    svg_map.data([전남7]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([전남8]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([전남9]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([전남10]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([전남11]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([전남12]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([전남13]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([전남14]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([전남15]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([전남16]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([전남17]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([전남18]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([전남19]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([전남20]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([전남21]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([전남22]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([전남23]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([전남24]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([전남25]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([전남26]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([전남27]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([전남28]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([전남29]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([전남30]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([전남31]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([전남32]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([전남33]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([전남34]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([전남35]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    //광주
    var color = "#cccccc";

    svg_map.data([광주]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    //전북
    var color = "#cccccc";
    
    svg_map.data([전북1]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([전북2]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

    svg_map.data([전북3]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

                                    

function map_interaction() {
    var cb0 = document.getElementById('s0');
    var cb1 = document.getElementById('s1');
    var cb2 = document.getElementById('s2');
    var cb3 = document.getElementById('s3');
    var cb4 = document.getElementById('s4');
    var cb5 = document.getElementById('s5');

    if (cb0.checked == true) {
        var c = ['#f7f7f7','#cccccc','#969696','#636363','#252525'];

        for (var i = 0; i < 5; i++) {
            svg_map.append("rect")
                .attr("x", 5)
                .attr("y", 82 + (48 * i))
                .attr("width", 20)
                .attr("height", 48)
                .attr("fill", c[i])        
        }

        var x = d3.scaleLinear().range([50, 400]);
        var y = d3.scaleLinear().range([400, 0]);
            x.domain([124, 131.7]);
            y.domain([32.5, 39.5]);

        //대구
        var color = "#969696";

        svg_map.data([대구]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)

        //대전
        var color = "#cccccc";
        
        svg_map.data([대전]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        //경기  
        var color = "#f7f7f7";

        svg_map.data([경기]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        //강원    
        var color = "#f7f7f7";
                
        svg_map.data([강원]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        //부산
        var color = "#cccccc";
        
        svg_map.data([부산1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

                        svg_map.data([부산2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([부산2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([부산3]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        //서울
        var color = "#cccccc";

        svg_map.data([서울]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
        
                        
        //세종
        var color = "#f7f7f7";

        svg_map.data([세종]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
        
        //울산
        var color = "#cccccc";
        
        svg_map.data([울산]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        //인천
        var color = "#f7f7f7";
        
        svg_map.data([인천1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([인천2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)


        svg_map.data([인천3]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([인천4]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)


        svg_map.data([인천5]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([인천6]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([인천7]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([인천8]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([인천9]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([인천10]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        //제주
        var color = "#cccccc";
        
        svg_map.data([제주]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        //경남
        var color = "#f7f7f7";

        svg_map.data([경남1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([경남2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([경남3]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([경남4]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([경남5]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([경남6]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([경남7]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        //경북
        var color = "#cccccc";

        svg_map.data([경북1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([경북2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        //충남
        var color = "#f7f7f7";

        svg_map.data([충남1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([충남2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        //충북 
        var color = "#cccccc";
        
        svg_map.data([충북]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        //전남
        var color = "#cccccc";

        svg_map.data([전남1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([전남2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([전남3]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([전남4]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([전남5]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([전남6]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
                        
        svg_map.data([전남7]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([전남8]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([전남9]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([전남10]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([전남11]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([전남12]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([전남13]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([전남14]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([전남15]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([전남16]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([전남17]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([전남18]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([전남19]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([전남20]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([전남21]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([전남22]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([전남23]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([전남24]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([전남25]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([전남26]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([전남27]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([전남28]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([전남29]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([전남30]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([전남31]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([전남32]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([전남33]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([전남34]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([전남35]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        //광주
        var color = "#cccccc";

        svg_map.data([광주]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        //전북
        var color = "#cccccc";
        
        svg_map.data([전북1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([전북2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

        svg_map.data([전북3]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    }
    else if (cb1.checked == true) {
        var c = ['#fee5d9','#fcae91','#fb6a4a','#de2d26','#a50f15'];

        for (var i = 0; i < 5; i++) {
            svg_map.append("rect")
                .attr("x", 5)
                .attr("y", 82 + (48 * i))
                .attr("width", 20)
                .attr("height", 48)
                .attr("fill", c[i])        
        }
    
        var x = d3.scaleLinear().range([50, 400]);
        var y = d3.scaleLinear().range([400, 0]);
            x.domain([124, 131.7]);
            y.domain([32.5, 39.5]);
        
        //대구
        var color = "#de2d26";
        svg_map.data([대구]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)
    
        //대전
        var color = "#fcae91";
        
        svg_map.data([대전]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //경기  
        var color = "#fcae91";
    
        svg_map.data([경기]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //강원    
        var color = "#fee5d9";
                
        svg_map.data([강원]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //부산
        var color = "#fcae91";
        
        svg_map.data([부산1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
                        svg_map.data([부산2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([부산2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([부산3]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //서울
        var color = "#fb6a4a";
        svg_map.data([서울]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
        
                        
        //세종
        var color = "#fee5d9";
    
        svg_map.data([세종]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
        
        //울산
        var color = "#fcae91";
        
        svg_map.data([울산]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //인천
        var color = "#fcae91";
        
        svg_map.data([인천1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([인천2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
    
        svg_map.data([인천3]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([인천4]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
    
        svg_map.data([인천5]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([인천6]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([인천7]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([인천8]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([인천9]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([인천10]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //제주
        var color = "#fcae91";
        
        svg_map.data([제주]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //경남
        var color = "#fcae91";
    
        svg_map.data([경남1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([경남2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([경남3]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([경남4]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([경남5]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([경남6]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([경남7]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //경북
        var color = "#fcae91";
    
        svg_map.data([경북1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([경북2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //충남
        var color = "#fee5d9";
    
        svg_map.data([충남1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([충남2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //충북 
        var color = "#fcae91";
        
        svg_map.data([충북]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //전남
        var color = "#fee5d9";
    
        svg_map.data([전남1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남3]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남4]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남5]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남6]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
                        
        svg_map.data([전남7]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남8]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남9]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남10]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남11]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남12]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남13]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남14]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남15]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남16]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남17]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남18]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남19]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남20]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남21]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남22]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남23]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남24]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남25]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남26]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남27]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남28]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남29]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남30]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남31]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남32]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남33]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남34]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남35]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //광주
        var color = "#fcae91";
    
        svg_map.data([광주]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //전북
        var color = "#fcae91";
        
        svg_map.data([전북1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전북2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전북3]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
        
    }
    else if (cb2.checked == true) {
        var c = ['#ffffd4','#fed98e','#fe9929','#d95f0e','#993404'];

        for (var i = 0; i < 5; i++) {
            svg_map.append("rect")
                .attr("x", 5)
                .attr("y", 82 + (48 * i))
                .attr("width", 20)
                .attr("height", 48)
                .attr("fill", c[i])        
        }
    
        var x = d3.scaleLinear().range([50, 400]);
        var y = d3.scaleLinear().range([400, 0]);
            x.domain([124, 131.7]);
            y.domain([32.5, 39.5]);
    
        //대구
        var color = "#de2d26";
        svg_map.data([대구]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)
    
        //대전
        var color = "#fed98e";
        
        svg_map.data([대전]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //경기  
        var color = "#fed98e";
    
        svg_map.data([경기]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //강원    
        var color = "#ffffd4";
                
        svg_map.data([강원]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //부산
        var color = "#fed98e";
        
        svg_map.data([부산1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
                        svg_map.data([부산2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([부산2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([부산3]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //서울
        var color = "#fe9929";
        svg_map.data([서울]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
        
                        
        //세종
        var color = "#ffffd4";
    
        svg_map.data([세종]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
        
        //울산
        var color = "#fed98e";
        
        svg_map.data([울산]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //인천
        var color = "#fed98e";
        
        svg_map.data([인천1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([인천2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
    
        svg_map.data([인천3]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([인천4]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
    
        svg_map.data([인천5]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([인천6]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([인천7]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([인천8]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([인천9]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([인천10]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //제주
        var color = "#fed98e";
        
        svg_map.data([제주]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //경남
        var color = "#ffffd4";
    
        svg_map.data([경남1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([경남2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([경남3]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([경남4]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([경남5]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([경남6]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([경남7]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //경북
        var color = "#fed98e";
    
        svg_map.data([경북1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([경북2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //충남
        var color = "#ffffd4";
    
        svg_map.data([충남1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([충남2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //충북 
        var color = "#fed98e";
        
        svg_map.data([충북]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //전남
        var color = "#fed98e";
    
        svg_map.data([전남1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남3]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남4]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남5]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남6]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
                        
        svg_map.data([전남7]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남8]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남9]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남10]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남11]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남12]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남13]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남14]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남15]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남16]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남17]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남18]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남19]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남20]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남21]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남22]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남23]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남24]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남25]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남26]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남27]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남28]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남29]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남30]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남31]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남32]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남33]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남34]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남35]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //광주
        var color = "#fed98e";
    
        svg_map.data([광주]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //전북
        var color = "#fed98e";
        
        svg_map.data([전북1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전북2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전북3]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
        
    }
    else if (cb3.checked == true) {
        var c = ['#edf8e9','#bae4b3','#74c476','#31a354','#006d2c'];

        for (var i = 0; i < 5; i++) {
            svg_map.append("rect")
                .attr("x", 5)
                .attr("y", 82 + (48 * i))
                .attr("width", 20)
                .attr("height", 48)
                .attr("fill", c[i])        
        }
    
        var x = d3.scaleLinear().range([50, 400]);
        var y = d3.scaleLinear().range([400, 0]);
            x.domain([124, 131.7]);
            y.domain([32.5, 39.5]);
    
        //대구
        var color = "#74c476";
        svg_map.data([대구]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)
    
        //대전
        var color = "#bae4b3";
        
        svg_map.data([대전]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //경기  
        var color = "#bae4b3";
    
        svg_map.data([경기]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //강원    
        var color = "#edf8e9";
                
        svg_map.data([강원]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //부산
        var color = "#bae4b3";
        
        svg_map.data([부산1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
                        svg_map.data([부산2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([부산2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([부산3]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //서울
        var color = "#74c476";
        svg_map.data([서울]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
        
                        
        //세종
        var color = "#edf8e9";
    
        svg_map.data([세종]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
        
        //울산
        var color = "#bae4b3";
        
        svg_map.data([울산]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //인천
        var color = "#edf8e9";
        
        svg_map.data([인천1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([인천2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
    
        svg_map.data([인천3]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([인천4]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
    
        svg_map.data([인천5]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([인천6]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([인천7]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([인천8]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([인천9]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([인천10]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //제주
        var color = "#bae4b3";
        
        svg_map.data([제주]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //경남
        var color = "#edf8e9";
    
        svg_map.data([경남1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([경남2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([경남3]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([경남4]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([경남5]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([경남6]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([경남7]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //경북
        var color = "#bae4b3";
    
        svg_map.data([경북1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([경북2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //충남
        var color = "#edf8e9";
    
        svg_map.data([충남1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([충남2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //충북 
        var color = "#bae4b3";
        
        svg_map.data([충북]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //전남
        var color = "#edf8e9";
    
        svg_map.data([전남1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남3]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남4]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남5]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남6]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
                        
        svg_map.data([전남7]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남8]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남9]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남10]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남11]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남12]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남13]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남14]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남15]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남16]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남17]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남18]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남19]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남20]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남21]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남22]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남23]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남24]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남25]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남26]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남27]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남28]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남29]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남30]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남31]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남32]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남33]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남34]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남35]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //광주
        var color = "#bae4b3";
    
        svg_map.data([광주]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //전북
        var color = "#bae4b3";
        
        svg_map.data([전북1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전북2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전북3]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
    }
    else if (cb4.checked == true) {
        var c = ['#eff3ff','#bdd7e7','#6baed6','#3182bd','#08519c'];

        for (var i = 0; i < 5; i++) {
            svg_map.append("rect")
                .attr("x", 5)
                .attr("y", 82 + (48 * i))
                .attr("width", 20)
                .attr("height", 48)
                .attr("fill", c[i])        
        }
    
        var x = d3.scaleLinear().range([50, 400]);
        var y = d3.scaleLinear().range([400, 0]);
            x.domain([124, 131.7]);
            y.domain([32.5, 39.5]);
    
        //대구
        var color = "#6baed6";
        svg_map.data([대구]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)
    
        //대전
        var color = "#bdd7e7";
        
        svg_map.data([대전]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //경기  
        var color = "#eff3ff";
    
        svg_map.data([경기]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //강원    
        var color = "#eff3ff";
                
        svg_map.data([강원]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //부산
        var color = "#bdd7e7";
        
        svg_map.data([부산1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
                        svg_map.data([부산2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([부산2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([부산3]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //서울
        var color = "#6baed6";
        svg_map.data([서울]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
        
                        
        //세종
        var color = "#eff3ff";
    
        svg_map.data([세종]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
        
        //울산
        var color = "#eff3ff";
        
        svg_map.data([울산]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //인천
        var color = "#eff3ff";
        
        svg_map.data([인천1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([인천2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
    
        svg_map.data([인천3]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([인천4]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
    
        svg_map.data([인천5]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([인천6]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([인천7]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([인천8]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([인천9]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([인천10]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //제주
        var color = "#eff3ff";
        
        svg_map.data([제주]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //경남
        var color = "#eff3ff";
    
        svg_map.data([경남1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([경남2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([경남3]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([경남4]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([경남5]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([경남6]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([경남7]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //경북
        var color = "#bdd7e7";
    
        svg_map.data([경북1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([경북2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //충남
        var color = "#eff3ff";
    
        svg_map.data([충남1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([충남2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //충북 
        var color = "#bdd7e7";
        
        svg_map.data([충북]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //전남
        var color = "#bdd7e7";
    
        svg_map.data([전남1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남3]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남4]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남5]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남6]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
                        
        svg_map.data([전남7]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남8]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남9]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남10]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남11]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남12]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남13]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남14]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남15]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남16]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남17]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남18]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남19]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남20]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남21]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남22]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남23]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남24]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남25]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남26]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남27]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남28]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남29]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남30]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남31]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남32]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남33]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남34]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남35]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //광주
        var color = "#bdd7e7";
    
        svg_map.data([광주]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //전북
        var color = "#bdd7e7";
        
        svg_map.data([전북1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전북2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전북3]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
    }
    else if (cb5.checked == true) {
        var c = ['#f2f0f7','#cbc9e2','#9e9ac8','#756bb1','#54278f'];

        for (var i = 0; i < 5; i++) {
            svg_map.append("rect")
                .attr("x", 5)
                .attr("y", 82 + (48 * i))
                .attr("width", 20)
                .attr("height", 48)
                .attr("fill", c[i])        
        }
    
        var x = d3.scaleLinear().range([50, 400]);
        var y = d3.scaleLinear().range([400, 0]);
            x.domain([124, 131.7]);
            y.domain([32.5, 39.5]);
    
        //대구
        var color = "#cbc9e2";
    
        svg_map.data([대구]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "black")
                    .attr('stroke-width', 0.5)
                    .attr("fill", color)
    
        //대전
        var color = "#f2f0f7";
        
        svg_map.data([대전]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //경기  
        var color = "#f2f0f7";
    
        svg_map.data([경기]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //강원    
        var color = "#f2f0f7";
                
        svg_map.data([강원]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //부산
        var color = "#cbc9e2";
        
        svg_map.data([부산1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
                        svg_map.data([부산2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([부산2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([부산3]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //서울
        var color = "#cbc9e2";
    
        svg_map.data([서울]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
        
                        
        //세종
        var color = "#f2f0f7";
    
        svg_map.data([세종]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
        
        //울산
        var color = "#f2f0f7";
        
        svg_map.data([울산]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //인천
        var color = "#f2f0f7";
        
        svg_map.data([인천1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([인천2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
    
        svg_map.data([인천3]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([인천4]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
    
        svg_map.data([인천5]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([인천6]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([인천7]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([인천8]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([인천9]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([인천10]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //제주
        var color = "#cbc9e2";
        
        svg_map.data([제주]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //경남
        var color = "#f2f0f7";
    
        svg_map.data([경남1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([경남2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([경남3]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([경남4]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([경남5]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([경남6]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([경남7]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //경북
        var color = "#cbc9e2";
    
        svg_map.data([경북1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([경북2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //충남
        var color = "#f2f0f7";
    
        svg_map.data([충남1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([충남2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //충북 
        var color = "#cbc9e2";
        
        svg_map.data([충북]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //전남
        var color = "#cbc9e2";
    
        svg_map.data([전남1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남3]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남4]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남5]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남6]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
                        
        svg_map.data([전남7]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남8]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남9]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남10]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남11]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남12]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남13]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남14]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남15]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남16]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남17]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남18]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남19]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남20]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남21]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남22]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남23]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남24]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남25]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남26]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남27]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남28]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남29]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남30]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남31]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남32]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남33]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남34]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전남35]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //광주
        var color = "#f2f0f7";
    
        svg_map.data([광주]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        //전북
        var color = "#f2f0f7";
        
        svg_map.data([전북1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전북2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
        svg_map.data([전북3]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
    
    }
}