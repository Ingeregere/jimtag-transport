import React, { Component } from 'react';
import Dash from "./dash";

export class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      saleOptions : {
        scales: {
          yAxes: [{
            display: false,
            gridLines: {
              drawBorder: false,
              display: false,
              drawTicks: false
            },
            ticks: {
              beginAtZero: true,
              stepSize: 10
            }
          }],
          xAxes: [{
            display: false,
            position: 'bottom',
            gridLines: {
              drawBorder: false,
              display: false,
              drawTicks: false
            },
            ticks: {
              beginAtZero: true,
              stepSize: 10
            }
          }],
        },
        legend: {
          display: false,
        },
        elements: {
          point: {
            radius: 0
          },
          line: {
            tension: .4
          }
        },
        tooltips: {
          backgroundColor: 'rgba(2, 171, 254, 1)',
        },
    
      },
      salespredictionData: {},
      salesprediction2Data : {},
      salesprediction3Data : {},
      salesprediction4Data : {},

    }
  }

  componentDidMount(){



    const newSalespredictionData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [{
        label: 'Margin',
        data: [5, 10, 6, 12, 7, 14, 16],
        // backgroundColor: gradientBg1,
        borderColor: [
          "#a461d8"
        ],
        borderWidth: 3,
        fill: true,
      }],
    };
    const newSalesprediction2Data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [{
        label: 'Margin',
        data: [16, 14, 7, 12, 6, 10, 5],
        // backgroundColor: gradientBg2,
        borderColor: [
          '#a461d8'
        ],
        borderWidth: 3,
        fill: true,
      }],
    };
    const newSalesprediction3Data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [{
        label: 'Margin',
        data: [3, 4, 2, 3, 1, 2, 3],
        // backgroundColor: gradientBg3,
        borderColor: [
          '#0062ff'
        ],
        borderWidth: 3,
        fill: true,
      }],
    };
    const newSalesprediction4Data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [{
        label: 'Margin',
        data: [3, 2, 1, 3, 2, 4, 3],
        // backgroundColor: gradientBg4,
        borderColor: [
          '#0062ff'
        ],
        borderWidth: 3,
        fill: true,
      }],
    };
    this.setState({salespredictionData: newSalespredictionData, salesprediction2Data: newSalesprediction2Data, salesprediction3Data: newSalesprediction3Data, salesprediction4Data: newSalesprediction4Data} )
  }
  totalProfitData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    datasets: [{
      label: 'Margin',
      data: [5, 4, 6, 4.5, 5.5, 4, 5, 4.2, 5.5],
      backgroundColor: [
        '#cfe1ff',
      ],
      borderColor: [
        '#0062ff'
      ],
      borderWidth: 3,
      fill: true,
    }],
  };

  totalProfitOptions = {
    scales: {
      yAxes: [{
        display: false,
        ticks: {
          beginAtZero: true,
          stepSize: 10
        }
      }],
      xAxes: [{
        display: false,
        ticks: {
          beginAtZero: true,
          stepSize: 10
        }
      }],
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0
      },
      line: {
        tension: 0
      }
    },
  };
  totalExpencesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    datasets: [{
      label: 'Margin',
      data: [4, 5, 6, 5, 4, 5, 4, 6, 5],
      backgroundColor: [
        '#e1fff3',
      ],
      borderColor: [
        '#3dd597'
      ],
      borderWidth: 3,
      fill: true,
    }],
  };

  totalExpencesOptions = {
    scales: {
      yAxes: [{
        display: false,
        ticks: {
          beginAtZero: true,
          stepSize: 10
        }
      }],
      xAxes: [{
        display: false,
        ticks: {
          beginAtZero: true,
          stepSize: 10
        }
      }],
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0
      },
      line: {
        tension: 0
      }
    },
  };

  deviceSaleData = {
    labels: ["Iphone", "Google", "Sumsung", "Huawei", "Xiaomi", "Oppo", "Vivo", "Lg"],
    datasets: [{
        label: 'Demand',
        data: [450, 500, 300, 350, 200, 320, 310, 700],
        backgroundColor: [
          '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8',
        ],
        borderColor: [
          '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8',
        ],
        borderWidth: 1,
        fill: false
      },
      {
        label: 'Supply',
        data: [250, 100, 310, 75, 290, 100, 500, 260],
        backgroundColor: [
          '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a',
        ],
        borderColor: [
          '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a',
        ],
        borderWidth: 1,
        fill: false
      }
    ]
  };

  deviceSaleOptions = {
    scales: {
      xAxes: [{
        stacked: false,
        barPercentage: .5,
        categoryPercentage: 0.4,
        position: 'bottom',
        display: true,
        gridLines: {
          display: false,
          drawBorder: false,
          drawTicks: false
        },
        ticks: {
          display: true, //this will remove only the label
          stepSize: 500,
          fontColor: "#a7afb7",
          fontSize: 14,
          padding: 10,
        }
      }],
      yAxes: [{
        stacked: false,
        display: true,
        gridLines: {
          drawBorder: false,
          display: true,
          color: "#eef0fa",
          drawTicks: false,
          zeroLineColor: 'rgba(90, 113, 208, 0)',
        },
        ticks: {
          display: true,
          beginAtZero: true,
          stepSize: 200,
          fontColor: "#a7afb7",
          fontSize: 14,
          callback: function(value) {
            return value + 'k';
          },
        },
      }]
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: 'rgba(0, 0, 0, 1)',
    },
    plugins: {
      datalabels: {
        display: false,
        align: 'center',
        anchor: 'center'
      }
    }
  };
  accountRetensionData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [{
        label: 'Demand',
        data: [33, 48, 39, 36, 36],
        backgroundColor: [
          '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8',
        ],
        borderColor: [
          '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8',
        ],
        borderWidth: 1,
        fill: false
      },
      {
        label: 'Demand',
        data: [94, 28, 49, 25, 20],
        backgroundColor: [
          '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8',
        ],
        borderColor: [
          '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8',
        ],
        borderWidth: 1,
        fill: false
      },
      {
        label: 'Demand',
        data: [66, 33, 25, 36, 69],
        backgroundColor: [
          '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8',
        ],
        borderColor: [
          '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8',
        ],
        borderWidth: 1,
        fill: false
      }
    ]
  };
  accountRetensionOptions = {
    scales: {
      xAxes: [{
        stacked: false,
        position: 'bottom',
        display: true,
        barPercentage: .7,
        categoryPercentage: 1,
        gridLines: {
          display: false,
          drawBorder: false,
          drawTicks: false
        },
        ticks: {
          display: true, //this will remove only the label
          stepSize: 500,
          fontColor: "#a7afb7",
          fontSize: 14,
          padding: 10,
        }
      }],
      yAxes: [{
        stacked: false,
        display: true,
        gridLines: {
          drawBorder: false,
          display: true,
          color: "#c31a56",
          drawTicks: false,
          zeroLineColor: 'rgba(90, 113, 208, 0)',
        },
        ticks: {
          display: false,
          beginAtZero: true,
          stepSize: 40,
          fontColor: "#a7afb7",
          fontSize: 14,
          callback: function(value) {
            return value + 'k';
          },

        },
      }]
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: 'rgba(0, 0, 0, 1)',
    },
    plugins: {
      datalabels: {
        display: false,
        align: 'center',
        anchor: 'center'
      }
    }
  };

  pageViewAnalyticOptions = {
    scales: {
      yAxes: [{
        display: true,
        gridLines: {
          drawBorder: false,
          display: true,
          drawTicks: false,
          color: '#eef0fa',
          zeroLineColor: 'rgba(90, 113, 208, 0)',
        },
        ticks: {
          beginAtZero: true,
          stepSize: 50,
          display: true,
          padding: 10,
        }
      }],
      xAxes: [{
        display: true,
        position: 'bottom',
        gridLines: {
          drawBorder: false,
          display: false,
          drawTicks: false,
        },
        ticks: {
          beginAtZero: true,
          stepSize: 10,
          fontColor: "#a7afb7",
          padding: 10,
        }
      }],
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 1
      },
      line: {
        tension: 0
      }
    },
    tooltips: {
      backgroundColor: 'rgba(2, 171, 254, 1)',
    },
  };
  myBalanceData = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [{
        label: 'Demand',
        data: [90, 85, 100, 105],
        backgroundColor: [
          '#0062ff', '#0062ff', '#0062ff', '#0062ff',
        ],
        borderColor: [
          '#0062ff', '#0062ff', '#0062ff', '#0062ff',
        ],
        borderWidth: 1,
        fill: false
      },
      {
        label: 'Supply',
        data: [200, 200, 200, 200],
        backgroundColor: [
          '#eef0fa', '#eef0fa', '#eef0fa', '#eef0fa',
        ],
        borderColor: [
          '#eef0fa', '#eef0fa', '#eef0fa', '#eef0fa',
        ],
        borderWidth: 1,
        fill: false
      }
    ]
  };

  toggleProBanner() {
    document.querySelector('.proBanner').classList.toggle("hide");
  }
  render () {
    return (
      <Dash />
    );
  }
}
export default Dashboard;