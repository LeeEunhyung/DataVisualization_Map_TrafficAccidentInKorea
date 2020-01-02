var color = ['#fff7f3','#fde0dd','#fcc5c0','#fa9fb5','#f768a1','#dd3497','#ae017e','#7a0177'];

var svg_color = d3.select(".color")
            .append("svg")
            .attr('width', 1000)
            .attr('height', 100)

    for (var i = 0; i < 8; i++) {
        svg_color.append("rect")
            .attr("x", 100 + (100 * i))
            .attr("y", 20)
            .attr("width", 100)
            .attr("height", 50)
            .attr("fill", color[i])        
    }

    svg_color.append('text')
            .attr('x', 40)
            .attr('y', 55)
            .text("비율")
            .style("font-size", "25px")
            .attr("font-family", "맑은고딕")
            .attr("fill", "black")

            svg_color.append('text')
            .attr('x', 100)
            .attr('y', 90)
            .text("낮음")
            .style("font-size", "13px")
            .attr("font-family", "맑은고딕")
            .attr("fill", "black")

            svg_color.append('text')
            .attr('x', 870)
            .attr('y', 90)
            .text("높음")
            .style("font-size", "13px")
            .attr("font-family", "맑은고딕")
            .attr("fill", "black")