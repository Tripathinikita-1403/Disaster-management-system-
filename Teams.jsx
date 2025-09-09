import React, { useState } from 'react';

function Teams() {
  const [teams] = useState([
    { id: 1, name: 'Medical Team', contact: '123-456-7890' },
    { id: 2, name: 'Rescue Team', contact: '987-654-3210' },
    { id: 3, name: 'Fire Brigade', contact: '555-555-5555' },
  ]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Emergency Response Teams</h2>
      <ul className="space-y-4">
        {teams.map(team => (
          <li key={team.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">{team.name}</h3>
            <p>Contact: {team.contact}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Teams;
