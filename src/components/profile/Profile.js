import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((state) => state.rocketsReducer.rockets);
  const missions = useSelector((state) => state.missions);

  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  const reservedMissions = missions.filter((mission) => mission.reserved);

  return (
    <div className="main-container">
      <div className="missions-section">
        <h2>My Missions</h2>
        {
          reservedMissions.map((mission) => (
            <div key={mission.mission_id} className="reserved">{mission.mission_name}</div>
          ))
        }
      </div>
      <div className="rockets-section">
        <h2>My Rockets</h2>
        {
          reservedRockets.map((rocket) => (
            <div key={rocket.id} className="reserved">{rocket.rocket_name}</div>
          ))
        }
      </div>
    </div>
  );
};

export default Profile;
