import React, { useState } from 'react';

function Alerts() {
  const [alerts] = useState([
    { id: 1, type: 'Flood', location: 'Region A', severity: 'High', date: '2023-09-10' },
    { id: 2, type: 'Earthquake', location: 'Region B', severity: 'Moderate', date: '2023-09-12' },
    { id: 3, type: 'Cyclone', location: 'Region C', severity: 'Severe', date: '2023-09-15' },
  ]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Disaster Alerts</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="border px-4 py-2">Type</th>
            <th className="border px-4 py-2">Location</th>
            <th className="border px-4 py-2">Severity</th>
            <th className="border px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {alerts.map(alert => (
            <tr key={alert.id}>
              <td className="border px-4 py-2">{alert.type}</td>
              <td className="border px-4 py-2">{alert.location}</td>
              <td className="border px-4 py-2">{alert.severity}</td>
              <td className="border px-4 py-2">{alert.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Alerts;
