import React from 'react';
import { useSelector } from 'react-redux';

export default function Missions() {
  const missions = useSelector((state) => state.missions);

  const parsed = missions.map((mission) => (
    <tr key={mission.id}>
      <td className="mName">{mission.mission_name}</td>
      <td className="mDescription">{mission.description}</td>
      <td className="mStatusRow">Place Holder</td>
      <td className="mBook"><button type="button" className="btn-join-mission">Join Mission</button></td>
    </tr>
  ));

  return (
    <div className="container">
      <table>
        <tr>
          <th className="mTitle">Mission</th>
          <th className="mDes">Description</th>
          <th className="mStatus">Status</th>
          <th>
            {' '}
          </th>
        </tr>
        {parsed}
      </table>
    </div>
  );
}
