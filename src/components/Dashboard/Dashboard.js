import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    LineChart, Line,
    Legend
} from "recharts";


const Dashboard = () => {
    const data = [
        {
            name: "Mar",
            uv: 100000,
            pv: 241,
            amt: 10401
        },
        {
            name: "Apr",
            uv: 200000,
            pv: 423,
            amt: 24500
        },
        {
            name: "May",
            uv: 500000,
            pv: 726,
            amt: 67010
        },
        {
            name: "Jun",
            uv: 500000,
            pv: 529,
            amt: 40405
        },
        {
            name: "Jul",
            uv: 600000,
            pv: 601,
            amt: 50900
        },
        {
            name: "Aug",
            uv: 700000,
            pv: 670,
            amt: 61000
        }
    ]
    return (
        <div>
            <div>
                <h1 className='text-2xl md:text-5xl w-4/7 flex justify-center m-5'>Some Charts for your understanding</h1>
            </div>
            <div className='mt-20 grid grid-cols-1 md:grid-cols-2'>
                <div>
                    <LineChart
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
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </div>
                <div>
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="uv"
                            stackId="1"
                            stroke="#8884d8"
                            fill="#8884d8"
                        />
                        <Area
                            type="monotone"
                            dataKey="pv"
                            stackId="1"
                            stroke="#82ca9d"
                            fill="#82ca9d"
                        />
                        <Area
                            type="monotone"
                            dataKey="amt"
                            stackId="1"
                            stroke="#ffc658"
                            fill="#ffc658"
                        />
                    </AreaChart>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;