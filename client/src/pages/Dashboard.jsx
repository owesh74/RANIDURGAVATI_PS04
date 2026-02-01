import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = ({ userId }) => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const res = await axios.get(`http://localhost:5000/api/reports/${userId}`);
      setReports(res.data.reports);
    };
    fetchHistory();
  }, [userId]);

  return (
    <div className="w-full max-w-5xl p-6">
      <h2 className="text-3xl font-bold mb-8">Your Interview History</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reports.map((report) => (
          <div key={report._id} className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all">
            <div className="flex justify-between items-center mb-4">
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs font-bold uppercase">
                {report.domain}
              </span>
              <span className="text-2xl font-black text-green-400">{report.overallScore}%</span>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              {new Date(report.createdAt).toLocaleDateString()}
            </p>
            <div className="text-sm text-slate-300 italic">
              " {report.transcript.substring(0, 100)}... "
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;