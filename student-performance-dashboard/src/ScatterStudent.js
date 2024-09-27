import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { ScatterChart, Scatter, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const MetricCard = ({ title, value }) => (
  <div className="bg-white shadow rounded-lg p-4 w-full md:w-1/3">
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-2xl font-semibold">{value}</p>
  </div>
);

const EnhancedStudentPerformanceDashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch('/data/students.csv');
      // const reader = response.body.getReader();
      // const result = await reader.read();
      // const decoder = new TextDecoder('utf-8');
      // const csv = decoder.decode(result.value);
      // const results = Papa.parse(csv, { header: true });
       const results = {data: ['rian','bio']}
      // Simulate GitHub data for each student
      const studentsWithData = results.data.map(student => ({
        ...student,
        commits: Math.floor(Math.random() * 100) + 1,
        linesAdded: Math.floor(Math.random() * 1000) + 100,
        linesDeleted: Math.floor(Math.random() * 500) + 50,
      }));
      
      setData(studentsWithData);
    };

    fetchData();
  }, []);

  const totalCommits = data.reduce((sum, student) => sum + student.commits, 0);
  const averageCommits = Math.round(totalCommits / data.length);
  const topContributor = data.reduce((top, student) => 
    (student.linesAdded - student.linesDeleted) > (top.linesAdded - top.linesDeleted) ? student : top
  , { linesAdded: 0, linesDeleted: 0 });

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Student Performance Dashboard</h1>
      
      <div className="flex flex-wrap gap-4 mb-6">
        <MetricCard title="Total Commits" value={totalCommits} />
        <MetricCard title="Average Commits" value={averageCommits} />
        <MetricCard title="Top Contributor" value={topContributor['Nama-Anggota'] ? `${topContributor['Nama-Anggota']} (${topContributor.linesAdded - topContributor.linesDeleted} net lines)` : 'N/A'} />
      </div>
      
      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">Commits Distribution</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid />
              <XAxis type="number" dataKey="commits" name="Commits" />
              <YAxis type="number" dataKey="linesAdded" name="Lines Added" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter name="Students" data={data} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Code Contribution</h2>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              layout="vertical"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="Nama-Anggota" type="category" width={150} />
              <Tooltip />
              <Legend />
              <Bar dataKey="linesAdded" stackId="a" fill="#82ca9d" name="Lines Added" />
              <Bar dataKey="linesDeleted" stackId="a" fill="#8884d8" name="Lines Deleted" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default EnhancedStudentPerformanceDashboard;