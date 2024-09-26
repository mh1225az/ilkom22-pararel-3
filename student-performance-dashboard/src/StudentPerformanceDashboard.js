import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
const generateEnhancedData = () => {
  const students = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
  return students.map(name => ({
    name,
    commits: Math.floor(Math.random() * 100) + 1,
    linesAdded: Math.floor(Math.random() * 1000) + 100,
    linesDeleted: Math.floor(Math.random() * 500) + 50,
  }));
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
    
    return (
        <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Enhanced Student Performance Dashboard</h1>
        <div className="flex flex-wrap gap-4 mb-6">
            <MetricCard title="Total Commits" value={totalCommits} />
            <MetricCard title="Average Commits" value={averageCommits} />
            <MetricCard title="Top Performer" value={`${topPerformer.name} (${topPerformer.commits} commits)`} />
        </div>
        <div className="bg-white shadow rounded-lg p-4 mb-6">
            <h2 className="text-xl font-semibold mb-4">Pull Requests and Issues Closed</h2>
            <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="commits" fill="#8884d8" name="Commits" />
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