import React from 'react';
//import PropTypes from 'prop-types';
import { withFauxDOM } from 'react-faux-dom';
import * as d3 from 'd3';
import './styleCircles.css';


class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.renderD3 = this.renderD3.bind(this);
    }

    componentDidMount() {
        this.renderD3();
    }

    componentDidUpdate(prevProps, prevState) {
        // do not compare props.chart as it gets updated in updateD3()
        if (this.props.data !== prevProps.data) {
            this.renderD3();
        }
    }

    render() {
        return (
            <div>
                {this.props.chart}
            </div>
        )
    }

    renderD3() {

        var component = this;

        var root = this.props.data;

        // This will create a faux div and store its virtual DOM in state.chart
        var faux = this.props.connectFauxDOM('div', 'chart');
        var dataId = null;

        d3.select(faux).select("svg").remove();

        var width = 1140;
        var height = 1200;

        var svg = d3.select(faux).append('svg')
            .attr("width", width)
            .attr("height", height);

        var defs = svg.append("defs");

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

        var margin = 20,
            diameter = width,
            g = svg.append("g").attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

        var color = d3.scaleLinear()
            .domain([-1, 5])
            .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
            .interpolate(d3.interpolateHcl);

        var pack = d3.pack()
            .size([diameter - margin, diameter - margin])
            .padding(2);


        root = d3.hierarchy(root)
            .sum(function (d) { return d.size; })
            //.sum(function (d) { return d.children.length; })
            .sort(function (a, b) { return b.value - a.value; });

        var focus = root,
            nodes = pack(root).descendants(),
            view;

        var circle = g.selectAll("circle")
            .data(nodes)
            .enter().append("circle")
            .attr("class", function (d) { return d.parent ? d.children ? "node" : "node node--leaf" : "node node--root"; })
            .style("fill", function (d) {
                if (!d.parent) {
                    return "none";
                } else {
                    //return d.children ? color(d.depth) : null;
                    return d.children ? "white" : null;
                }
            })
            .style("stroke", function (d) {
                return d.depth === 2 ? "lightgrey" : null;
            })
            .style("stroke-width", function (d) {
                return d.depth === 2 ? 2 : null;
            })
            .style("filter", function (d) {
                return d.depth === 1 ? "url(#drop-shadow)" : null;
            })
            .on("click", function (d) {
                if (focus !== d) {
                    zoom(d);
                    d3.event.stopPropagation();
                    component.props.animateFauxDOM(800);
                };

            });

        var text = g.selectAll("text")
            .data(nodes)
            .enter().append("text")
            .attr("class", "label")
            .style("font-size", 12)
            .style("font-family", "sans-serif")
            .style("font-weight", "bold")
            //.style("fill", "darkgrey")
            .style("text-anchor", "middle")
            .style("fill-opacity", function (d) { return d.parent === root ? 1 : 0; })
            .style("display", function (d) { return d.parent === root ? "inline" : "none"; })
            .text(function (d) { return d.data.name; });

        var node = g.selectAll("circle,text");

        svg
            .on("click", function () {
                zoom(root);
                component.props.animateFauxDOM(800);
            });

        zoomTo([root.x, root.y, root.r * 2 + margin]);

        function zoom(d) {

            //console.log(d)
            var focus0 = focus; focus = d;

            var transition = d3.transition()
                .duration(550)
                .tween("zoom", function () {

                    component.props.animateFauxDOM(800);
                    var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + margin]);

                    return function (t) { zoomTo(i(t)); };

                });

            // console.log(transition.selectAll("text"))
            // console.log(svg.selectAll("text"))

            // transition.selectAll("text")
            //     .on("start", function () { 
            //         console.log(this)
            //         this.style.display = "none"; 
            //     })

            transition.selectAll("text")
                .filter(function (d) {
                    console.log(d)
                    return d.parent === focus || this.style.display === "inline";
                })
                .style("fill-opacity", function (d) { return d.parent === focus ? 1 : 0; })
                .on("start", function (d) { if (d.parent === focus) this.style.display = "inline"; })
                .on("end", function (d) { if (d.parent !== focus) this.style.display = "none"; });

        }

        function zoomTo(v) {
            var k = diameter / v[2]; view = v;
            node.attr("transform", function (d) { return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")"; });
            circle.attr("r", function (d) { return d.r * k; });

            component.props.animateFauxDOM(800);
        }
        //});

    }

}

// Chart.defaultProps = {
//   chart: 'loading...'
// }

// Chart.propTypes = {
//   title: PropTypes.string.isRequired,
//   data: PropTypes.arrayOf(PropTypes.number).isRequired
// }

const FauxChart = withFauxDOM(Chart);

export default FauxChart;
