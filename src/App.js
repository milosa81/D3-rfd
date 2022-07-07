import React from 'react';
// import Chart from './Chart'
import Tree from './Tree'
// import Circles2 from './Circles2';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      dataArray0: [30, 35, 45, 55, 70],
      dataArray1: [50, 55, 45, 35, 20, 25, 25, 40],
      dataIndex: 0,
      treeData0: {
        "name": "Top Level",
        "material": "Basic Materials",
        "subselectors": "All Subselectors",
        "children": [
          {
            "name": "Tim McGough",
            "position": "Point72, PM",
            "children": [
              {
                "name": "Jane Waldorf",
                "position": "Goldman Sasch, Analyst",
                "star": "yes",
                "value": "RE",
                "education": "University of Washington (2008)",
                "info": "12 Years on Buy Side",
                "data": [
                  {
                    "name": "Style",
                    "value": "79"
                  },
                  {
                    "name": "Firm",
                    "value": "96"
                  },
                  {
                    "name": "Edu",
                    "value": "88"
                  },
                  {
                    "name": "Conn",
                    "value": "98"
                  }
                ]
              }
            ]
          },
          {
            "name": "Jane Waldorf",
            "position": "Point72, Analyst",
            "children": [
              {
                "name": "Eric Jameson",
                "position": "Goldman Sasch, Analyst",
                "star": "yes",
                "value": "HM",
                "education": "University of Washington (2008)",
                "info": "12 Years on Buy Side",
                "data": [
                  {
                    "name": "Style",
                    "value": "92"
                  },
                  {
                    "name": "Firm",
                    "value": "97"
                  },
                  {
                    "name": "Edu",
                    "value": "95"
                  },
                  {
                    "name": "Conn",
                    "value": "99"
                  }
                ]
              },
              {
                "name": "Jane Waldorf",
                "position": "Goldman Sasch, Analyst",
                "star": "no",
                "value": "NH",
                "education": "University of Washington (2008)",
                "info": "12 Years on Buy Side",
                "data": [
                  {
                    "name": "Style",
                    "value": "80"
                  },
                  {
                    "name": "Firm",
                    "value": "60"
                  },
                  {
                    "name": "Edu",
                    "value": "55"
                  },
                  {
                    "name": "Conn",
                    "value": "95"
                  }
                ]
              },
              {
                "name": "Jane Waldorf",
                "position": "Goldman Sasch, Analyst",
                "star": "no",
                "value": "RE",
                "education": "University of Washington (2008)",
                "info": "12 Years on Buy Side",
                "data": [
                  {
                    "name": "Style",
                    "value": "77"
                  },
                  {
                    "name": "Firm",
                    "value": "84"
                  },
                  {
                    "name": "Edu",
                    "value": "92"
                  },
                  {
                    "name": "Conn",
                    "value": "99"
                  }
                ]
              }
            ]
          },
          {
            "name": "Jane Waldorf",
            "position": "Point72, Analyst",
            "children": [
              {
                "name": "Eric Jameson",
                "position": "Goldman Sasch, Analyst",
                "star": "no",
                "value": "HM",
                "education": "University of Washington (2008)",
                "info": "12 Years on Buy Side",
                "data": [
                  {
                    "name": "Style",
                    "value": "82"
                  },
                  {
                    "name": "Firm",
                    "value": "82"
                  },
                  {
                    "name": "Edu",
                    "value": "82"
                  },
                  {
                    "name": "Conn",
                    "value": "97"
                  }
                ]
              },
              {
                "name": "Jane Waldorf",
                "position": "Goldman Sasch, Analyst",
                "star": "no",
                "value": "NH",
                "education": "University of Washington (2008)",
                "info": "12 Years on Buy Side",
                "data": [
                  {
                    "name": "Style",
                    "value": "96"
                  },
                  {
                    "name": "Firm",
                    "value": "96"
                  },
                  {
                    "name": "Edu",
                    "value": "96"
                  },
                  {
                    "name": "Conn",
                    "value": "77"
                  }
                ]
              }
            ]
          },
          {
            "name": "Jane Waldorf",
            "position": "Point72, Analyst",
            "children": [
              {
                "name": "Eric Jameson",
                "position": "Goldman Sasch, Analyst",
                "star": "no",
                "value": "HM",
                "education": "University of Washington (2008)",
                "info": "12 Years on Buy Side",
                "data": [
                  {
                    "name": "Style",
                    "value": "91"
                  },
                  {
                    "name": "Firm",
                    "value": "92"
                  },
                  {
                    "name": "Edu",
                    "value": "92"
                  },
                  {
                    "name": "Conn",
                    "value": "89"
                  }
                ]
              },
              {
                "name": "Jane Waldorf",
                "position": "Goldman Sasch, Analyst",
                "star": "no",
                "value": "NH",
                "education": "University of Washington (2008)",
                "info": "12 Years on Buy Side",
                "data": [
                  {
                    "name": "Style",
                    "value": "99"
                  },
                  {
                    "name": "Firm",
                    "value": "82"
                  },
                  {
                    "name": "Edu",
                    "value": "92"
                  },
                  {
                    "name": "Conn",
                    "value": "99"
                  }
                ]
              },
              {
                "name": "Jane Waldorf",
                "position": "Goldman Sasch, Analyst",
                "star": "no",
                "value": "RE",
                "education": "University of Washington (2008)",
                "info": "12 Years on Buy Side",
                "data": [
                  {
                    "name": "Style",
                    "value": "96"
                  },
                  {
                    "name": "Firm",
                    "value": "82"
                  },
                  {
                    "name": "Edu",
                    "value": "92"
                  },
                  {
                    "name": "Conn",
                    "value": "78"
                  }
                ]
              },
              {
                "name": "Jane Waldorf",
                "position": "Goldman Sasch, Analyst",
                "star": "no",
                "value": "",
                "education": "University of Washington (2008)",
                "info": "12 Years on Buy Side",
                "data": [
                  {
                    "name": "Style",
                    "value": "84"
                  },
                  {
                    "name": "Firm",
                    "value": "82"
                  },
                  {
                    "name": "Edu",
                    "value": "99"
                  },
                  {
                    "name": "Conn",
                    "value": "90"
                  }
                ]
              }
            ]
          },
          {
            "name": "Jane Waldorf",
            "position": "Point72, Analyst",
            "children": [
              {
                "name": "Eric Jameson",
                "position": "Goldman Sasch, Analyst",
                "star": "no",
                "value": "HM",
                "education": "University of Washington (2008)",
                "info": "12 Years on Buy Side",
                "data": [
                  {
                    "name": "Style",
                    "value": "91"
                  },
                  {
                    "name": "Firm",
                    "value": "82"
                  },
                  {
                    "name": "Edu",
                    "value": "82"
                  },
                  {
                    "name": "Conn",
                    "value": "97"
                  }
                ]
              },
              {
                "name": "Jane Waldorf",
                "position": "Goldman Sasch, Analyst",
                "star": "no",
                "value": "NH",
                "education": "University of Washington (2008)",
                "info": "12 Years on Buy Side",
                "data": [
                  {
                    "name": "Style",
                    "value": "80"
                  },
                  {
                    "name": "Firm",
                    "value": "82"
                  },
                  {
                    "name": "Edu",
                    "value": "92"
                  },
                  {
                    "name": "Conn",
                    "value": "88"
                  }
                ]
              }
            ]
          }
        ]
      },
      treeData1: {
        "name": "Top Level",
        "material": "Basic Materials",
        "subselectors": "All Subselectors",
        "children": [
          {
            "name": "Tim McGough",
            "position": "Point72, PM",
            "children": [
              {
                "name": "Jane Waldorf",
                "position": "Goldman Sasch, Analyst",
                "star": "yes",
                "value": "RE",
                "education": "University of Washington (2008)",
                "info": "12 Years on Buy Side",
                "data": [
                  {
                    "name": "Style",
                    "value": "79"
                  },
                  {
                    "name": "Firm",
                    "value": "96"
                  },
                  {
                    "name": "Edu",
                    "value": "88"
                  },
                  {
                    "name": "Conn",
                    "value": "98"
                  }
                ]
              },
              {
                "name": "Eric Jameson",
                "position": "Goldman Sasch, Analyst",
                "star": "no",
                "value": "HM",
                "education": "University of Washington (2008)",
                "info": "12 Years on Buy Side",
                "data": [
                  {
                    "name": "Style",
                    "value": "82"
                  },
                  {
                    "name": "Firm",
                    "value": "82"
                  },
                  {
                    "name": "Edu",
                    "value": "82"
                  },
                  {
                    "name": "Conn",
                    "value": "97"
                  }
                ]
              }
            ]
          },
          {
            "name": "Jane Waldorf",
            "position": "Point72, Analyst",
            "children": [
              {
                "name": "Eric Jameson",
                "position": "Goldman Sasch, Analyst",
                "star": "no",
                "value": "HM",
                "education": "University of Washington (2008)",
                "info": "12 Years on Buy Side",
                "data": [
                  {
                    "name": "Style",
                    "value": "82"
                  },
                  {
                    "name": "Firm",
                    "value": "82"
                  },
                  {
                    "name": "Edu",
                    "value": "82"
                  },
                  {
                    "name": "Conn",
                    "value": "97"
                  }
                ]
              },
              {
                "name": "Jane Waldorf",
                "position": "Goldman Sasch, Analyst",
                "star": "no",
                "value": "NH",
                "education": "University of Washington (2008)",
                "info": "12 Years on Buy Side",
                "data": [
                  {
                    "name": "Style",
                    "value": "96"
                  },
                  {
                    "name": "Firm",
                    "value": "96"
                  },
                  {
                    "name": "Edu",
                    "value": "96"
                  },
                  {
                    "name": "Conn",
                    "value": "77"
                  }
                ]
              }
            ]
          },
          {
            "name": "Jane Waldorf",
            "position": "Point72, Analyst",
            "children": [
              {
                "name": "Eric Jameson",
                "position": "Goldman Sasch, Analyst",
                "star": "no",
                "value": "HM",
                "education": "University of Washington (2008)",
                "info": "12 Years on Buy Side",
                "data": [
                  {
                    "name": "Style",
                    "value": "91"
                  },
                  {
                    "name": "Firm",
                    "value": "92"
                  },
                  {
                    "name": "Edu",
                    "value": "92"
                  },
                  {
                    "name": "Conn",
                    "value": "89"
                  }
                ]
              },
              {
                "name": "Jane Waldorf",
                "position": "Goldman Sasch, Analyst",
                "star": "no",
                "value": "NH",
                "education": "University of Washington (2008)",
                "info": "12 Years on Buy Side",
                "data": [
                  {
                    "name": "Style",
                    "value": "99"
                  },
                  {
                    "name": "Firm",
                    "value": "82"
                  },
                  {
                    "name": "Edu",
                    "value": "92"
                  },
                  {
                    "name": "Conn",
                    "value": "99"
                  }
                ]
              },
              {
                "name": "Jane Waldorf",
                "position": "Goldman Sasch, Analyst",
                "star": "no",
                "value": "RE",
                "education": "University of Washington (2008)",
                "info": "12 Years on Buy Side",
                "data": [
                  {
                    "name": "Style",
                    "value": "96"
                  },
                  {
                    "name": "Firm",
                    "value": "82"
                  },
                  {
                    "name": "Edu",
                    "value": "92"
                  },
                  {
                    "name": "Conn",
                    "value": "78"
                  }
                ]
              },
              {
                "name": "Jane Waldorf",
                "position": "Goldman Sasch, Analyst",
                "star": "no",
                "value": "",
                "education": "University of Washington (2008)",
                "info": "12 Years on Buy Side",
                "data": [
                  {
                    "name": "Style",
                    "value": "84"
                  },
                  {
                    "name": "Firm",
                    "value": "82"
                  },
                  {
                    "name": "Edu",
                    "value": "99"
                  },
                  {
                    "name": "Conn",
                    "value": "90"
                  }
                ]
              }
            ]
          }
        ]
      },
      circlesData: {
        "name": "flare",
        "children": [
          {
            "name": "Goldman Sachs",
            "type": "firm",
            "children": [
              {
                "name": "FAF Small-Mid Cap Core",
                "type": "fund",
                "children": [
                  {
                    "name": "Finance Advising",
                    "type": "team",
                    "children": [
                      {
                        "name": "Finance Advising",
                        "size": 1,
                        "type": "team",
                        "data": [
                          {
                            "name": "Tim Carrington",
                            "position": "PM"
                          },
                          {
                            "name": "Tim Carrington",
                            "position": "PM"
                          },
                          {
                            "name": "Tim Carrington",
                            "position": "PM"
                          },
                          {
                            "name": "Tim Carrington",
                            "position": "PM"
                          },
                          {
                            "name": "Tim Carrington",
                            "position": "PM"
                          },
                          {
                            "name": "Tim Carrington",
                            "position": "PM"
                          },
                          {
                            "name": "Jane Waldorf",
                            "position": "Analyst"
                          },
                          {
                            "name": "Jane Waldorf",
                            "position": "Analyst"
                          },
                          {
                            "name": "Jane Waldorf",
                            "position": "Analyst"
                          },
                          {
                            "name": "Jane Waldorf",
                            "position": "Analyst"
                          },
                          {
                            "name": "Jane Waldorf",
                            "position": "Analyst"
                          },
                          {
                            "name": "Jane Waldorf",
                            "position": "Analyst"
                          },
                          {
                            "name": "Jane Waldorf",
                            "position": "Analyst"
                          },
                          {
                            "name": "Jane Waldorf",
                            "position": "Analyst"
                          },
                          {
                            "name": "Jane Waldorf",
                            "position": "Analyst"
                          },
                          {
                            "name": "Jane Waldorf",
                            "position": "Analyst"
                          }
                        ]
                      },
                      { "name": "Team name", "type": "team", "size": 1 },
                      { "name": "Team name", "type": "team", "size": 1 },
                      { "name": "Team name", "type": "team", "size": 1 }
                    ]
                  },
                  { "name": "Team name", "type": "team", "size": 1 },
                  { "name": "Team name", "type": "team", "size": 1 },
                  { "name": "Team name", "type": "team", "size": 1 }
                ]
              },
              {
                "name": "FAF Small-Mid Cap Core",
                "type": "team",
                "children": [
                  { "name": "Team name", "type": "team", "size": 1 },
                  { "name": "Team name", "type": "team", "size": 1 },
                  { "name": "Team name", "type": "team", "size": 1 },
                  { "name": "Team name", "type": "team", "size": 1 },
                  { "name": "Team name", "type": "team", "size": 1 },
                  { "name": "Team name", "type": "team", "size": 1 }
                ]
              },
              {
                "name": "FAF Small-Mid Cap Core",
                "type":"sector",
                "children": [
                  { "name": "Subsector", "type":"subsector", "size": 1 },
                  { "name": "Subsector", "type":"subsector", "size": 1 }
                ]
              },
              {
                "name": "Sector Name",
                "type":"sector",
                "children": [
                  { "name": "Subsector", "type":"subsector", "size": 1 },
                  { "name": "Subsector", "type":"subsector", "size": 1 }
                ]
              },
              {
                "name": "Sector Name",
                "type":"sector",
                "children": [
                  { "name": "Subsector", "type":"subsector", "size": 1 },
                  { "name": "Subsector", "type":"subsector", "size": 1 }
                ]
              },
              {
                "name": "Sector Name",
                "type":"sector",
                "children": [
                  { "name": "Subsector", "type":"subsector", "size": 1 },
                  { "name": "Subsector", "type":"subsector", "size": 1 }
                ]
              },
              {
                "name": "Sector Name",
                "type":"sector",
                "children": [
                  { "name": "Subsector", "type":"subsector", "size": 1 },
                  { "name": "Subsector", "type":"subsector", "size": 1 }
                ]
              }
            ]
          },
          {
            "name": "Robert May & Sons",
            "type": "firm",
            "children": [
              {
                "name": "FAF Small-Mid Cap Core",
                "type": "fund",
                "children": [
                  { "name": "CommunityStructure", "size": 1 },
                  { "name": "HierarchicalCluster", "size": 1 },
                  { "name": "MergeEdge", "size": 1 }
                ]
              },
              {
                "name": "FAF Small-Mid Cap Core",
                "type": "team",
                "children": [
                  { "name": "ShortestPaths", "size": 1 },
                  { "name": "SpanningTree", "size": 1 }
                ]
              },
              {
                "name": "FAF Small-Mid Cap Core",
                "type": "fund",
                "children": [
                  { "name": "AspectRatioBanker", "size": 1 }
                ]
              },
              {
                "name": "Sector Name",
                "type": "team",
                "children": [
                  { "name": "AspectRatioBanker", "size": 1 },
                  { "name": "AspectRatioBanker", "size": 1 }
                ]
              },
              {
                "name": "Sector Name",
                "type": "team",
                "children": [
                  { "name": "AspectRatioBanker", "size": 1 }
                ]
              },
              {
                "name": "Sector Name",
                "type": "team",
                "children": [
                  { "name": "AspectRatioBanker", "size": 1 }
                ]
              }
            ]
          },
          {
            "name": "Citadel",
            "type": "firm",
            "children": [
              {
                "name": "FAF Small-Mid Cap Core",
                "type": "fund",
                "children": [
                  { "name": "HierarchicalCluster", "size": 1 },
                  { "name": "MergeEdge", "size": 1 }
                ]
              },
              {
                "name": "FAF Small-Mid Cap Core",
                "type": "team",
                "children": [
                  { "name": "BetweennessCentrality", "size": 1 },
                  { "name": "LinkDistance", "size": 1 }
                ]
              },
              {
                "name": "FAF Small-Mid Cap Core",
                "type": "fund",
                "children": [
                  { "name": "AspectRatioBanker", "size": 1 }
                ]
              },
              {
                "name": "Sector Name",
                "type": "fund",
                "children": [
                  { "name": "AspectRatioBanker", "size": 1 }
                ]
              }
            ]
          },
          {
            "name": "UGB Landers, LP",
            "type": "firm",
            "children": [
              {
                "name": "FAF Small-Mid Cap Core",
                "type":"sector",
                "children": [
                  { "name": "BetweennessCentrality", "size": 1 },
                  { "name": "LinkDistance", "size": 1 },
                  { "name": "MaxFlowMinCut", "size": 1 },
                  { "name": "ShortestPaths", "size": 1 },
                  { "name": "SpanningTree", "size": 1 }
                ]
              },
              {
                "name": "FAF Small-Mid Cap Core",
                "type":"team",
                "children": [
                  { "name": "AspectRatioBanker", "size": 1 }
                ]
              }
            ]
          },
          {
            "name": "Jackson Myers, LP",
            "type": "firm",
            "children": [
              {
                "name": "FAF Small-Mid Cap Core",
                "type":"sector",
                "children": [
                  {
                    "name": "Finance Advising", 
                    "type":"fund",
                    "children": [
                      {
                        "name": "Finance Advising",
                        "size": 1,
                        "data": [
                          {
                            "name": "Tim Carrington",
                            "position": "PM"
                          },
                          {
                            "name": "Tim Carrington",
                            "position": "PM"
                          },
                          {
                            "name": "Tim Carrington",
                            "position": "PM"
                          },
                          {
                            "name": "Tim Carrington",
                            "position": "PM"
                          },
                          {
                            "name": "Tim Carrington",
                            "position": "PM"
                          },
                          {
                            "name": "Tim Carrington",
                            "position": "PM"
                          },
                          {
                            "name": "Jane Waldorf",
                            "position": "Analyst"
                          },
                          {
                            "name": "Jane Waldorf",
                            "position": "Analyst"
                          },
                          {
                            "name": "Jane Waldorf",
                            "position": "Analyst"
                          },
                          {
                            "name": "Jane Waldorf",
                            "position": "Analyst"
                          },
                          {
                            "name": "Jane Waldorf",
                            "position": "Analyst"
                          },
                          {
                            "name": "Jane Waldorf",
                            "position": "Analyst"
                          },
                          {
                            "name": "Jane Waldorf",
                            "position": "Analyst"
                          },
                          {
                            "name": "Jane Waldorf",
                            "position": "Analyst"
                          },
                          {
                            "name": "Jane Waldorf",
                            "position": "Analyst"
                          },
                          {
                            "name": "Jane Waldorf",
                            "position": "Analyst"
                          }
                        ]
                      },
                      { "name": "CommunityStructure", "size": 1 },
                      { "name": "HierarchicalCluster", "size": 1 },
                      { "name": "MergeEdge", "size": 1 }
                    ]
                  },
                  { "name": "CommunityStructure", "size": 1 },
                  { "name": "HierarchicalCluster", "size": 1 },
                  { "name": "MergeEdge", "size": 1 }
                ]
              },
              {
                "name": "Sector Name",
                "type":"team",
                "children": [
                  { "name": "AspectRatioBanker", "size": 1 }
                ]
              }
            ]
          },

        ]
      }
    }

    this.changeData = this.changeData.bind(this);
  }

  changeData() {
    this.setState(state => ({
      dataIndex: (state.dataIndex + 1) % 2
    }))
  }

  render() {
    return (
      <div style={{ "backgroundColor": "#F6F7F9" }}>
        <button onClick={this.changeData}>Change data</button>
        <div>
          {/* <Chart
            data={this.state['dataArray' + this.state.dataIndex]}
            title={'dataset ' + this.state.dataIndex}
          /> */}
          <Tree
            data={this.state['treeData' + this.state.dataIndex]}
            title={'dataset ' + this.state.dataIndex}
          />

          {/* <Circles2
            data={this.state.circlesData}
            title={'dataset ' + this.state.dataIndex}
          /> */}
        </div>


      </div>
    )
  }
}

export default App
