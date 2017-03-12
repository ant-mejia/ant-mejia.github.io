import React from 'react';
import axios from 'axios';
import {AreaChart, Area, ResponsiveContainer, Tooltip} from 'recharts';

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
    const data = [this.state.stats];
    return (
      <section id="skills" className="uk-padding-large" data-uk-height-viewport>
        <h1 className="uk-text-center uk-text-left@m section-title">Skills</h1>
        <ResponsiveContainer width="100%" minHeight={280} maxHeight={400}>
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
        </ResponsiveContainer>
        {Object.keys(this.props.skills).map((key) => {
          return <div key={key}>Key: {key}, Value: {this.props.skills[key]}</div>;
        })}
      </section>
    );
  }

}

export default Skills;
