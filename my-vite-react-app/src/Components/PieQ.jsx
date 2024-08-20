
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#0088FE', '#FF8042'];

const PieQ = ({ correct, wrong }) => {
  const data = [
    { name: 'Correct', value: correct },
    { name: 'Wrong', value: wrong },
  ];

  return (
    <PieChart width={400} height={400}>
         
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
        
      </Pie>
      
      <Tooltip />
      <Legend layout="horizontal" align="bottom" verticalAlign="bottom" />
    </PieChart>
  );
};

export default PieQ;
