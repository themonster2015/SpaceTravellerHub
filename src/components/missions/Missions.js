import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displayMissions, joinMission } from '../../redux/missions/missions';

export default function Missions() {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayMissions());
  }, []);

  const handleClick = (id) => {
    console.log(id);
    dispatch(joinMission(id));
  };

  const parsed = missions.map((mission) => (
    <tr key={mission.mission_id}>
      <td className="mName">{mission.mission_name}</td>
      <td className="mDescription">{mission.description}</td>
      <td className="mStatusRow">
        <span className={mission.reserved ? 'Active' : 'inActive'}>
          {mission.reserved ? 'Active Member' : 'Not a Member'}
          {' '}
        </span>
      </td>
      <td className="mBook"><button type="button" onClick={() => handleClick(mission.mission_id)} className="btn-join-mission">Join Mission</button></td>
    </tr>
  ));

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th className="mTitle">Mission</th>
            <th className="mDes">Description</th>
            <th className="mStatus">Status</th>
            <th>
              {' '}
            </th>
          </tr>
        </thead>
        <tbody>
          {parsed}
        </tbody>
      </table>
    </div>
  );
}
