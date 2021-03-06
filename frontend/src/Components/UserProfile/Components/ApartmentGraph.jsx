import React, { Component } from 'react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// const data = [
// 	{name: , }



// ];

const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

const data2 = [
	{name: 'E to the Ric', percentage: 100},
	{name: 'RyRy', percentage: 70},
	{name: 'Benjy', percentage: 75},
	{name: 'Aiden', percentage: 74}
]

class ApartmentGraph extends Component {
	constructor() {
		super();

	}

	render() {
		return (
			<div>
				<div><h1>Percentage of tasks done on time</h1></div>
				<BarChart width={600} height={300} data={data2} margin={{top: 5, right: 30, left: 20, bottom: 5}} >
	       <CartesianGrid strokeDasharray="3 3"/>
	       <XAxis dataKey="name"/>
	       <YAxis domain={[0, 100]} />
	       <Tooltip/>
	       <Bar dataKey="percentage" fill="#8884d8" />
      	</BarChart>
      </div>
		)
	}
}

export default ApartmentGraph;

// <Legend />