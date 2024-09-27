import React from 'react';
import {Legend, ScatterChart, Scatter, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
// import db from 'sqlite3'
const generateEnhancedData = () => {

  const students = [];

  for (let i = 0; i < 60; i++) {
        students.push("La Bionda " + (i + 1));
  }

  return students.map(name => ({
    name,
    commits: Math.floor(Math.random() * 100) + 1,
    linesAdded: Math.floor(Math.random() * 1000) + 100,
    linesDeleted: Math.floor(Math.random() * 500) + 50,
  }));
};
const CustomTooltip = ({ active, payload }) => {
    if (!active || !payload) return null;
  
    const studentData = payload[0].payload;
  
    return (
      <div className="custom-tooltip">
        <p><b>Student:</b> {studentData.name}</p>
        <p><b>Commits:</b> {studentData.commits}</p>
        <p><b>Lines Added:</b> {studentData.linesAdded}</p>
      </div>
    );
};

const data = generateEnhancedData();

const MetricCard = ({ title, value }) => (
  <div className="bg-white shadow rounded-lg p-4 w-full md:w-1/2 lg:w-1/3">
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-2xl font-semibold">{value}</p>
  </div>
);

const EnhancedStudentPerformanceDashboard = () => {
    const totalCommits = data.reduce((sum, student) => sum + student.commits, 0);
    const averageCommits = Math.round(totalCommits / data.length);
    const topPerformer = data.reduce((top, student) => 
        student.commits > top.commits ? student : top
    );
    const topContributor = data.reduce((top, student) => 
        (student.linesAdded - student.linesDeleted) > (top.linesAdded - top.linesDeleted) ? student : top
    );

    return (
        <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-500">UHO Student Performance Dashboard</h1>
        <img className="h-20 w-20 mx-auto rounded-full border-2 border-blue-500" src="/Logo_Universitas_Halu_Oleo.png" alt="Logo" />
        <div className="flex flex-wrap gap-4 mb-6">
            <MetricCard title="Total Commits" value={totalCommits} />
            <MetricCard title="Average Commits" value={averageCommits} />
            <MetricCard title="Top Performer" value={`${topPerformer.name} (${topPerformer.commits} commits)`} />
            <MetricCard title="Top Contributor" value={`${topContributor.name} (${topContributor.linesAdded - topContributor.linesDeleted} net lines)`} />
        </div>
        <div className="bg-white shadow rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">Performance Distribution</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <Legend/>
                <CartesianGrid />
                <XAxis type="number" dataKey="commits" name="Commits" />
                <YAxis type="number" dataKey="linesAdded" name="Lines Added" />
                <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="Students" data={data} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
          <ul>
            <li>X-Axis : Number of Commits</li>
            <li>Y-Axis : Lines Added</li>
          </ul>
        </div>
        <br/>
        <br/>
        </div>
        <div className="bg-white shadow rounded-lg p-4 mb-6">
            <h2 className="text-xl font-semibold mb-4">Number of Commits</h2>
            <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="commits" fill="#8884d8" name="Commit" />
                </BarChart>
            </ResponsiveContainer>
            </div>
        </div>

        <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Code Contribution</h2>
            <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="linesAdded" stroke="#8884d8" name="Lines Added" />
                <Line type="monotone" dataKey="linesDeleted" stroke="#82ca9d" name="Lines Deleted" />
                </LineChart>
            </ResponsiveContainer>
            </div>
        </div>
        </div>
    );
};

export default EnhancedStudentPerformanceDashboard;