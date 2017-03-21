import React from 'react';
import axios from 'axios';
import {AreaChart, Area, ResponsiveContainer, Tooltip} from 'recharts';
import ReactHighcharts from 'react-highcharts';
import $ from 'jquery';
import FullPanel from '../../components/FullPanel';
import Panel from '../../components/Panel';

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: {},
      repos: []
    };
  }
  componentDidMount() {
    this.getSkillCommits();
  }

  getSkillCommits = () => {
    let repos = this.state.repos,
      stats = this.state.stats,
      list = [];
    axios.get('https://api.github.com/users/ant-mejia/repos').then((data) => {
      data.data.map((item) => {
        if (!item.fork) {
          repos.push(item.languages_url)
        }
      });
    }).then(() => {
      repos.forEach((item) => {
        axios.get(item).then((data) => {
          data = data.data;
          Object.keys(data).map((key) => {
            if (isNaN(data[key]) || data[key] === null) {
              data[key] = 0;
            }
            if (stats[key] === undefined) {
              stats[key] = {
                name: key,
                rp: 0
              }
            }
            stats[key].rp += data[key];
          });
        });
      });
    });

    this.setState({repos, stats});
  }

  getLanguage = (url) => {
    return axios.get(url)
  }

  render() {
    let min = [].slice.call(this.props.data).sort((a, b) => a - b)[0] - 15;
    let height = $(window).width() < 875
      ? '40%'
      : '25%';
    let config = {
      chart: {
        height: height,
        spacingLeft: 0,
        spacingRight: 0,
        type: 'areaspline'
      },
      title: {
        text: null
      },
      xAxis: {
        categories: [
          "Adobe",
          "CSS",
          "Express",
          "Firebase",
          "HTML",
          "JQuery",
          "Javascript",
          "NodeJS",
          "PostgreSQL",
          "ReactJS",
          "Ruby"
        ],
        lineWidth: 0,
        labels: {
          enabled: false
        },
        tickWidth: 0
      },
      yAxis: {
        floor: min,
        gridLineWidth: 0,
        labels: {
          enabled: false
        },
        maxPadding: 0,
        startOnTick: false,
        endOnTick: false,
        title: {
          text: null,
          margin: 0
        }
      },
      legend: {
        enabled: false
      },
      tooltip: {
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderColor: "rgba(77, 77, 77, 1)",
        headerFormat: '<span class="tooltip-header">{point.key}</span><br/>',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
        padding: 16,
        shared: true,
        shadow: false
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        areaspline: {
          fillOpacity: 0.5
        },
        series: {
          animation: {
            duration: 3000
          },
          marker: {
            enabled: false
          }
        }
      },
      series: [
        {
          name: 'Level',
          data: this.props.data,
          marker: {
            symbol: 'circle'
          },
          color: {
            linearGradient: {
              x1: 0,
              x2: 0,
              y1: 0,
              y2: 1.5
            },
            stops: [
              [
                0, '#514A9D'
              ],
              [1, '#2495dd']
            ]
          }
        }
      ]
    };
    return (
      <section id="skills" className="uk-padding-large" data-uk-height-viewport>
        <h1 className="uk-text-center uk-text-left@m section-title uk-margin-xlarge-bottom">Skills</h1>
        <ReactHighcharts config={config} ref="chart"></ReactHighcharts>
        <div className="uk-margin-xlarge">
          <div className="uk-hidden@m">
            {this.props.skills.map((item, index) => {
              return <FullPanel key={index} icon={item.icon} text={item.content} reverse={index % 2 !== 0}/>
            })}
          </div>
          <div className="uk-visible@m">
            <div className="uk-child-width-expand@s" data-uk-grid>
              {this.props.skills.map((item, index) => {
                return <Panel key={index} title={item.content} icon={item.icon}/>
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }

}

export default Skills;

/* <ResponsiveContainer width="100%" minHeight={280} maxHeight={400}>
  <AreaChart data={data} margin={{
    top: 10,
    right: 30,
    left: 0,
    bottom: 0
  }}>
    <Tooltip cursor={false}/>
    <Area type='monotone' dataKey='rp' stroke="transparent" fill='#3067f2'/>
    <Area type='monotone' dataKey='pv' stroke="transparent" fill='#1686d6'/>
  </AreaChart>
</ResponsiveContainer> */
