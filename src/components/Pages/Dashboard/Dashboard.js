import React, { useEffect, useState } from 'react';
import {Bar, BarChart, CartesianGrid, LabelList, Legend, Line, LineChart, Tooltip, XAxis, YAxis, } from 'recharts';

const Dashboard = () => {
  const [data, setData] = useState();

  useEffect (()=>{
    fetch('data.json')
      .then (res => res.json())
      .then (data => setData(data))
      .catch (() => console.log('Data not found'));
  }, [])


  
  return (

    <div className='w-full max-w-screen-xl mt-10 mb-40'>
      <div className='bg-teal-500 mb-10 p-2 text-xl font-bold'>
        <h2>Movie related visual data</h2>
      </div>

      <div className='flex justify-evenly'>
        <div>
          <LineChart width={400} height={300} data={data}>
            <Line type="monotone" dataKey={'box_Office'} stroke="#8884d8" strokeWidth={2} />
            <XAxis dataKey={'month'} />
            <YAxis />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Tooltip />
            <Legend />
          </LineChart>
          <p className='border-l-2 border-orange-500 pl-5 font-semibold inline-block mt-5'>Box office collection 2004</p>
        </div>
        
        <div>
        {
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={'box_Office'} fill="#8884d8" minPointSize={5}>
              <LabelList dataKey="name" />
            </Bar>
            <Bar dataKey={'targe-collection'} fill="#82ca9d" minPointSize={10} />
          </BarChart>
        }
          <p className='border-l-2 border-orange-500 pl-5 font-semibold inline-block mt-5'>Compare between target-collection and actual-collection</p>
        </div>
      </div>

    </div>
   
      
        
  
  )
};

export default Dashboard;