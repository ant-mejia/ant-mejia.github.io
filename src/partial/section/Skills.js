import React from 'react';
import {AreaChart, Area, ResponsiveContainer, Tooltip} from 'recharts';

class Skills extends React.Component {

  render() {
    const data = [
      {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400
      }, {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210
      }, {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290
      }, {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000
      }, {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181
      }, {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500
      }, {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100
      }
    ];
    return (
      <section id="skills" className="uk-padding-large">
        <h1>Skills</h1>
        <ResponsiveContainer width="100%" minHeight={280}>
          <AreaChart data={data} margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}>
            <Tooltip cursor={false}/>
            <Area type='monotone' dataKey='uv' stroke='transparent' fill='#3b8bde'/>
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
