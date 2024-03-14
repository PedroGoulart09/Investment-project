import { data } from '@/app/utils/constants';
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default class Graphic extends PureComponent {
    render() {
        return (
            <div className='flex justify-center'>
                <ResponsiveContainer width={'70%'} height={300}>
                    <LineChart
                        data={data}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="Petrobras" stroke="#8884d8" />
                        <Line type="monotone" dataKey="Tesla" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="Facebook" stroke="#ff0000" />
                        <Line type="monotone" dataKey="McDonalds" stroke="#00ff00" />
                        <Line type="monotone" dataKey="BancoDoBrasil" stroke="#0000ff" />
                        <Line type="monotone" dataKey="Itaú" stroke="#000" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        );
    }
}