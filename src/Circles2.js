import React, { Component } from 'react';
import * as d3 from 'd3';
import './styleCircles.css';

class Chart extends Component {

    constructor(props) {
        super(props);
        this.draw = this.draw.bind(this);
        this.saveContainer = this.saveContainer.bind(this);
    }

    componentDidMount() {

        this.svg = d3.select(this.container)
            .append('svg')
            .attr('width', 1140)
            .attr('height', 1140);

        let tooltip = d3.select(this.container).append("div")
            .attr("class", "circlesTooltip")
            .style("opacity", 0);

        tooltip.append("div").attr("class", "innerTooltip")
            .style("background", "white");

        tooltip.append("div").attr("class", "buttonTooltip")
            .style("background", "white")
            .html("View Profile");

        this.margin = 50;
        this.diameter = 1140;
        this.g = this.svg.append("g").attr("transform", "translate(" + this.diameter / 2 + "," + this.diameter / 2 + ")");

        this.color = d3.scaleLinear()
            .domain([-1, 5])
            .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
            .interpolate(d3.interpolateHcl);

        this.pack = d3.pack()
            .size([this.diameter - this.margin, this.diameter - this.margin])
            .padding(2);

        var defs = this.svg.append("defs");

        var filter = defs.append("filter")
            .attr("id", "drop-shadow")
            .attr("width", "130%")
            .attr("height", "130%");

        filter.append("feGaussianBlur")
            .attr("in", "SourceAlpha")
            .attr("stdDeviation", 3);


        filter.append("feOffset")
            .attr("dx", 1)
            .attr("dy", 1)
            .attr("result", "offsetBlur");

        var feComponentTransfer = filter.append("feComponentTransfer");
        feComponentTransfer.append("feFuncA")
            .attr("type", "linear")
            .attr("slope", 0.2);

        var feMerge = filter.append("feMerge");
        feMerge.append("feMergeNode");
        feMerge.append("feMergeNode")
            .attr("in", "SourceGraphic");

        this.draw(this.props);

    }

    // shouldComponentUpdate(nextProps) {
    //     return !isEqual(this.props, nextProps);
    // }

    componentWillUpdate(nextProps) {
        this.draw(nextProps);
    }

    draw(props) {

        let component = this;

        let data = props.data;

        let colors = {
            firm: "#3798ED",
            fund: "#1DD8CF",
            sector: "#BABFC2",
            subsector: "#E5E9EB",
            team: "#D97FEB",
            people: "#FFA8AF"
        }

        var root = d3.hierarchy(data)
            .sum(function (d) { return d.size; })
            .sort(function (a, b) { return b.value - a.value; });

        var focus = root,
            nodes = this.pack(root).descendants(),
            view;

        // var node = this.g.selectAll("g")
        //             .data(nodes)
        //             .enter().append("g"); 

        var circle = this.g.selectAll("circle")
            .data(nodes)
            .enter().append("circle")
            .each(function (d) { d.node = this; })
            .attr("class", function (d) {
                return d.parent ? d.children ? "node" : "node node--leaf" : "node--root";
            })
            .style("fill", function (d) {
                if (!d.parent) {
                    return "none";
                } else {
                    return d.children ? "white" : null;
                }
            })
            .style("stroke", function (d) {

                let stroke;

                if (d.depth < 2) {
                    return null;
                } else if (colors[d.data.type]) {
                    stroke = colors[d.data.type];
                }

                d.oldStroke = stroke;
                return "lightgrey";
            })
            // .style("stroke-width", function (d) {
            //     return d.depth >= 2 ? 2 : null;
            // })
            .style("pointer-events", "none")//function (d) {
            //return d.depth > 1 ? "none" : "all";
            //return "none";
            //})
            .style("filter", function (d) {
                return d.depth === 1 ? "url(#drop-shadow)" : null;
            })
            // .on("mouseover", function (d) {
            //     if (d.depth === 1) {
            //         d3.select(this).style("stroke", "#3798ED");
            //         //addColor(d);
            //     } else {
            //         d3.select(this).style("stroke", function (d) {

            //             let stroke;

            //             if (d.depth < 2) {
            //                 return null;
            //             } else if (colors[d.data.type]) {
            //                 stroke = colors[d.data.type];
            //             }

            //             //d.oldStroke = stroke;
            //             return stroke;
            //         })
            //     }



            // })
            .on("mouseover", hovered())
            .on("mouseout", mouseout())
            .on("click", function (d) {
                if (focus !== d) {
                    d3.event.stopPropagation();
                    zoom(d);
                };

            });

        this.g.selectAll("text")
            .data(nodes)
            .enter().append("text")
            .attr("class", function (d) {
                if (d.depth === 1) {
                    return d.data.name.replace(/\W/g, '') + " label";
                }
                return "label";
            })
            .style("font-size", 14)
            .style("font-family", "sans-serif")
            .style("font-weight", "bold")
            .style("fill", function (d) {
                if (d.depth === 1) {
                    return "#9AA2A6";
                } else if (colors[d.data.type]) {
                    return colors[d.data.type];
                }
            })
            .style("text-anchor", "middle")
            .style("fill-opacity", function (d) { return d.parent === root ? 1 : 0; })
            .style("display", function (d) { return d.parent === root ? "inline" : "none"; })
            .text(function (d) { return d.data.name; });


        var node = this.g.selectAll("circle,text");

        this.svg
            .on("click", function () { zoom(root); });

        zoomTo([root.x, root.y, root.r * 2 + this.margin], 0);

        function zoom(d) {
            //var focus0 = focus; 
            var focus = d;

            var transition = d3.transition()
                .duration(750)
                .tween("zoom", function (d) {
                    var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + component.margin]);
                    return function (t) { zoomTo(i(t), focus.depth); };
                });

            transition.selectAll("text")
                .filter(function (d) { return d.parent === focus || this.style.display === "inline"; })
                .style("fill-opacity", function (d) { return d.parent === focus ? 1 : 0; })
                .on("start", function (d) { if (d.parent === focus) this.style.display = "inline"; })
                .on("end", function (d) { if (d.parent !== focus) this.style.display = "none"; });
        }

        function zoomTo(v, focusDepth) {

            var k = component.diameter / v[2]; view = v;

            node.attr("transform", function (d) {
                return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")";
            });

            circle
                .attr("r", function (d) {
                    return (d.r - 3) * k;
                })
                .style("display", function (d) {
                    if (focusDepth === 0) {
                        return d.depth > 2 ? "none" : "inline";
                    } else {
                        return d.depth > focusDepth + 1 ? "none" : "inline";
                    }
                })
                // .style("stroke", function (d) {

                //     let stroke;

                //     if (d.depth < 2) {
                //         return null;
                //     } else if (colors[d.data.type]) {
                //         stroke = colors[d.data.type];
                //     }

                //     //d.oldStroke = stroke;
                //     return "lightgrey";
                // })
                .style("pointer-events", function (d) {
                    if (focusDepth === 0) {
                        return d.depth > 1 ? "none" : "all";
                    } else {
                        return d.depth > focusDepth + 1 ? "none" : "all";
                    }
                })
        }

        function hovered() {

            return function (d) {
                //console.log(d)

                // d.descendants().map(function (d) { 
                //     console.log(d); 
                // })



                if (d.depth === 1) {

                    d3.select("." + d.data.name.replace(/\W/g, '')).style("fill", colors[d.data.type]);
                }

                if (d.depth > 0) {

                    let content = d.descendants().reduce(function (obj, d) {
                        if (d.data.type && (d.data.type !== "firm")) {
                            obj[d.data.type] += 1;

                        }
                        return obj;
                    }, { fund: 0, sector: 0, subsector: 0, team: 0, people: 0 });


                    d3.select(component.container).select(".circlesTooltip")
                        .style("opacity", 1)
                        .style("background", colors[d.data.type])
                        .style("left", (d3.event.pageX) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");


                    d3.select(component.container).select(".innerTooltip")
                        .html("<strong>" + d.data.name + "</strong>"
                        + "<div class='list'>"
                        + "<br/>" + content.fund + " Funds"
                        + "<br/>" + content.sector + " Sectors"
                        + "<br/>" + content.subsector + " Subsectors"
                        + "<br/>" + content.team + " Teams"
                        + "<br/>" + content.people + " People"
                        + "<div>"
                        )



                    d3.select(component.container).select(".buttonTooltip")
                        .style("background", colors[d.data.type]);


                    d3.selectAll(d.descendants().map(function (d) { return d.node; }))
                        .style("stroke", function (d) {
                            let stroke;

                            if (d.depth < 1) {
                                return null;
                            } else if (colors[d.data.type]) {
                                stroke = colors[d.data.type];
                            }


                            return stroke;
                        });
                }
            };
        }

        function mouseout() {

            return function (d) {

                d3.select(component.container).select(".circlesTooltip")
                    .style("opacity", 0);

                if (d.depth === 1) {

                    d3.select("." + d.data.name.replace(/\W/g, '')).style("fill", "#9AA2A6");
                }

                if (d.depth > 0) {
                    d3.selectAll(d.descendants().map(function (d) { return d.node; }))
                        .style("stroke", function (d) {
                            let stroke;
                            if (d.depth < 2) {
                                return null;
                            } else if (colors[d.data.type]) {
                                stroke = "lightgrey";
                            }

                            //d.oldStroke = stroke;
                            return stroke;
                        });
                }

            };
        }

    };

    saveContainer(container) {
        this.container = container;
    }

    render() {
        return (
            <div ref={this.saveContainer} />
        );
    }

}

export default Chart;