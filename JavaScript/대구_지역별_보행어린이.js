//중구 동구 서구 남구 북구 수성구 달서구 달성군
var data_set = ['3%', '0%', '37%', '5%', '14%', '14%', '25%', '2%'];

var svg_map2_4 = d3.select(".map2_4")
            .append("svg")
            .attr('width', 200)
            .attr('height', 300);

var x = d3.scaleLinear().range([0, 200]);
var y = d3.scaleLinear().range([300, 0]);
    x.domain([128.35, 128.78]);
    y.domain([35.58, 36.05]);

    svg_map2_4.data([중구]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "white")
                    .attr('stroke-width', 1)
                    .attr("fill", "#fcc5c0")

    svg_map2_4.data([동구]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "white")
                    .attr('stroke-width', 1)
                    .attr("fill", "#dddddd")

    svg_map2_4.data([서구]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "white")
                    .attr('stroke-width', 1)
                    .attr("fill", "#7a0177")

    svg_map2_4.data([남구]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "white")
                    .attr('stroke-width', 1)
                    .attr("fill", "#fa9fb5")

    svg_map2_4.data([북구]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "white")
                    .attr('stroke-width', 1)
                    .attr("fill", "#f768a1")

    svg_map2_4.data([수성구]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "white")
                    .attr('stroke-width', 1)
                    .attr("fill", "#f768a1")
            
    svg_map2_4.data([달서구]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "white")
                    .attr('stroke-width', 1)
                    .attr("fill", "#c51b8a")

    svg_map2_4.data([달성군1]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "white")
                    .attr('stroke-width', 1)
                    .attr("fill", "#feebe2")


    svg_map2_4.data([달성군2]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "white")
                    .attr('stroke-width', 1)
                    .attr("fill", "#feebe2")

            svg_map2_4.append('text')
                    .attr('x', 105)
                    .attr('y', 120)
                    .text(data_set[0])
                    .style("font-size", "10px")
                    .attr("font-family", "맑은고딕")
                    .attr("fill", "black")
                    .attr("font-weight", "bold")
        
            svg_map2_4.append('text')
                    .attr('x', 150)
                    .attr('y', 80)
                    .text(data_set[1])
                    .style("font-size", "10px")
                    .attr("font-family", "맑은고딕")
                    .attr("fill", "black")
                    .attr("font-weight", "bold")
        
            svg_map2_4.append('text')
                     .attr('x', 80)
                     .attr('y', 115)
                     .text(data_set[2])
                     .style("font-size", "10px")
                     .attr("font-family", "맑은고딕")
                     .attr("fill", "white")
                     .attr("font-weight", "bold")
        
            svg_map2_4.append('text')
                     .attr('x', 100)
                     .attr('y', 140)
                     .text(data_set[3])
                     .style("font-size", "10px")
                     .attr("font-family", "맑은고딕")
                     .attr("fill", "black")
                     .attr("font-weight", "bold")
        
            svg_map2_4.append('text')
                    .attr('x', 95)
                    .attr('y', 80)
                     .text(data_set[4])
                     .style("font-size", "10px")
                     .attr("font-family", "맑은고딕")
                     .attr("fill", "white")
                     .attr("font-weight", "bold")
        
            svg_map2_4.append('text')
                     .attr('x', 135)
                     .attr('y', 140)
                      .text(data_set[5])
                      .style("font-size", "10px")
                      .attr("font-family", "맑은고딕")
                      .attr("fill", "white")
                      .attr("font-weight", "bold")
        
            svg_map2_4.append('text')
                      .attr('x', 70)
                      .attr('y', 140)
                       .text(data_set[6])
                       .style("font-size", "10px")
                       .attr("font-family", "맑은고딕")
                       .attr("fill", "white")
                       .attr("font-weight", "bold")
        
            svg_map2_4.append('text')
                       .attr('x', 60)
                       .attr('y', 200)
                        .text(data_set[7])
                        .style("font-size", "10px")
                        .attr("font-family", "맑은고딕")
                        .attr("fill", "black")
                        .attr("font-weight", "bold")

function m4() {
    var data_set = ['3%', '0%', '37%', '5%', '14%', '14%', '25%', '2%'];
    var cb1 = document.getElementById('c1'); //중구
    var cb2 = document.getElementById('c2'); //동구
    var cb3 = document.getElementById('c3'); //서구
    var cb4 = document.getElementById('c4'); //남구
    var cb5 = document.getElementById('c5'); //북구
    var cb6 = document.getElementById('c6'); //수성구
    var cb7 = document.getElementById('c7'); //달서구
    var cb8 = document.getElementById('c8'); //달성군

    if(cb1.checked != false || cb2.checked != false || cb3.checked != false || cb4.checked != false || cb5.checked != false || cb6.checked != false || cb7.checked != false || cb8.checked != false) {
        svg_map2_4.data([중구]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "white")
                    .attr('stroke-width', 1)
                    .attr("fill", "white")

        svg_map2_4.data([동구]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "white")
                        .attr('stroke-width', 1)
                        .attr("fill", "white")

        svg_map2_4.data([서구]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "white")
                        .attr('stroke-width', 1)
                        .attr("fill", "white")

        svg_map2_4.data([남구]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "white")
                        .attr('stroke-width', 1)
                        .attr("fill", "white")

        svg_map2_4.data([북구]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "white")
                        .attr('stroke-width', 1)
                        .attr("fill", "white")

        svg_map2_4.data([수성구]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "white")
                        .attr('stroke-width', 1)
                        .attr("fill", "white")
                
        svg_map2_4.data([달서구]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "white")
                        .attr('stroke-width', 1)
                        .attr("fill", "white")

        svg_map2_4.data([달성군1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "white")
                        .attr('stroke-width', 1)
                        .attr("fill", "white")


        svg_map2_4.data([달성군2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "white")
                        .attr('stroke-width', 1)
                        .attr("fill", "white")

        if(cb1.checked == true) {
            svg_map2_4.data([중구]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "white")
                    .attr('stroke-width', 1)
                    .attr("fill", "#fcc5c0")

                    svg_map2_4.append('text')
                    .attr('x', 105)
                    .attr('y', 120)
                    .text(data_set[0])
                    .style("font-size", "10px")
                    .attr("font-family", "맑은고딕")
                    .attr("fill", "black")
                    .attr("font-weight", "bold")
        }

        if(cb2.checked == true) {
            svg_map2_4.data([동구]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "white")
                    .attr('stroke-width', 1)
                    .attr("fill", "#dddddd")

                    svg_map2_4.append('text')
                    .attr('x', 150)
                    .attr('y', 80)
                    .text(data_set[1])
                    .style("font-size", "10px")
                    .attr("font-family", "맑은고딕")
                    .attr("fill", "black")
                    .attr("font-weight", "bold")
        }

        if(cb3.checked == true) {
            svg_map2_4.data([서구]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "white")
                    .attr('stroke-width', 1)
                    .attr("fill", "#7a0177")

                    svg_map2_4.append('text')
                     .attr('x', 80)
                     .attr('y', 115)
                     .text(data_set[2])
                     .style("font-size", "10px")
                     .attr("font-family", "맑은고딕")
                     .attr("fill", "white")
                     .attr("font-weight", "bold")
        }

        if(cb4.checked == true) {
            svg_map2_4.data([남구]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "white")
                    .attr('stroke-width', 1)
                    .attr("fill", "#fa9fb5")

                    svg_map2_4.append('text')
                     .attr('x', 100)
                     .attr('y', 140)
                     .text(data_set[3])
                     .style("font-size", "10px")
                     .attr("font-family", "맑은고딕")
                     .attr("fill", "black")
                     .attr("font-weight", "bold")
        }

        if(cb5.checked == true) {
            svg_map2_4.data([북구]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "white")
                    .attr('stroke-width', 1)
                    .attr("fill", "#f768a1")

                    svg_map2_4.append('text')
                    .attr('x', 95)
                    .attr('y', 80)
                     .text(data_set[4])
                     .style("font-size", "10px")
                     .attr("font-family", "맑은고딕")
                     .attr("fill", "white")
                     .attr("font-weight", "bold")
        }

        if(cb6.checked == true) {
            svg_map2_4.data([수성구]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "white")
                    .attr('stroke-width', 1)
                    .attr("fill", "#f768a1")

                    svg_map2_4.append('text')
                     .attr('x', 135)
                     .attr('y', 140)
                      .text(data_set[5])
                      .style("font-size", "10px")
                      .attr("font-family", "맑은고딕")
                      .attr("fill", "white")
                      .attr("font-weight", "bold")
        }

        if(cb7.checked == true) {
            svg_map2_4.data([달서구]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "white")
                    .attr('stroke-width', 1)
                    .attr("fill", "#c51b8a")

                    svg_map2_4.append('text')
                      .attr('x', 70)
                      .attr('y', 140)
                       .text(data_set[6])
                       .style("font-size", "10px")
                       .attr("font-family", "맑은고딕")
                       .attr("fill", "white")
                       .attr("font-weight", "bold")
        }

        if(cb8.checked == true) {
            svg_map2_4.data([달성군1]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "white")
                    .attr('stroke-width', 1)
                    .attr("fill", "#feebe2")

            svg_map2_4.data([달성군2]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "white")
                    .attr('stroke-width', 1)
                    .attr("fill", "#feebe2")

                    svg_map2_4.append('text')
                       .attr('x', 60)
                       .attr('y', 200)
                        .text(data_set[7])
                        .style("font-size", "10px")
                        .attr("font-family", "맑은고딕")
                        .attr("fill", "black")
                        .attr("font-weight", "bold")
        }
    } else {
        svg_map2_4.data([중구]).append("polygon")
                    .attr("points", function (d) {
                            return d.map(function (d) {
                            return [x(d[0]), y(d[1])].join(",");
                        }).join(" ");
                    })
                    .attr("stroke", "white")
                    .attr('stroke-width', 1)
                    .attr("fill", "#fcc5c0")

        svg_map2_4.data([동구]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "white")
                        .attr('stroke-width', 1)
                        .attr("fill", "#dddddd")

        svg_map2_4.data([서구]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "white")
                        .attr('stroke-width', 1)
                        .attr("fill", "#7a0177")

        svg_map2_4.data([남구]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "white")
                        .attr('stroke-width', 1)
                        .attr("fill", "#fa9fb5")

        svg_map2_4.data([북구]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "white")
                        .attr('stroke-width', 1)
                        .attr("fill", "#f768a1")

        svg_map2_4.data([수성구]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "white")
                        .attr('stroke-width', 1)
                        .attr("fill", "#f768a1")
                
        svg_map2_4.data([달서구]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "white")
                        .attr('stroke-width', 1)
                        .attr("fill", "#c51b8a")

        svg_map2_4.data([달성군1]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "white")
                        .attr('stroke-width', 1)
                        .attr("fill", "#feebe2")


        svg_map2_4.data([달성군2]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "white")
                        .attr('stroke-width', 1)
                        .attr("fill", "#feebe2")

                        svg_map2_4.append('text')
                    .attr('x', 105)
                    .attr('y', 120)
                    .text(data_set[0])
                    .style("font-size", "10px")
                    .attr("font-family", "맑은고딕")
                    .attr("fill", "black")
                    .attr("font-weight", "bold")
        
            svg_map2_4.append('text')
                    .attr('x', 150)
                    .attr('y', 80)
                    .text(data_set[1])
                    .style("font-size", "10px")
                    .attr("font-family", "맑은고딕")
                    .attr("fill", "black")
                    .attr("font-weight", "bold")
        
            svg_map2_4.append('text')
                     .attr('x', 80)
                     .attr('y', 115)
                     .text(data_set[2])
                     .style("font-size", "10px")
                     .attr("font-family", "맑은고딕")
                     .attr("fill", "white")
                     .attr("font-weight", "bold")
        
            svg_map2_4.append('text')
                     .attr('x', 100)
                     .attr('y', 140)
                     .text(data_set[3])
                     .style("font-size", "10px")
                     .attr("font-family", "맑은고딕")
                     .attr("fill", "black")
                     .attr("font-weight", "bold")
        
            svg_map2_4.append('text')
                    .attr('x', 95)
                    .attr('y', 80)
                     .text(data_set[4])
                     .style("font-size", "10px")
                     .attr("font-family", "맑은고딕")
                     .attr("fill", "white")
                     .attr("font-weight", "bold")
        
            svg_map2_4.append('text')
                     .attr('x', 135)
                     .attr('y', 140)
                      .text(data_set[5])
                      .style("font-size", "10px")
                      .attr("font-family", "맑은고딕")
                      .attr("fill", "white")
                      .attr("font-weight", "bold")
        
            svg_map2_4.append('text')
                      .attr('x', 70)
                      .attr('y', 140)
                       .text(data_set[6])
                       .style("font-size", "10px")
                       .attr("font-family", "맑은고딕")
                       .attr("fill", "white")
                       .attr("font-weight", "bold")
        
            svg_map2_4.append('text')
                       .attr('x', 60)
                       .attr('y', 200)
                        .text(data_set[7])
                        .style("font-size", "10px")
                        .attr("font-family", "맑은고딕")
                        .attr("fill", "black")
                        .attr("font-weight", "bold")
            }
}