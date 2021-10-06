import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displayMissions, joinMission, leaveMission } from '../../redux/missions/missions';

export default function Missions() {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayMissions());
  }, []);

  const handleClick = (id, type) => {
    if (type === 'Join') {
      dispatch(joinMission(id));
    } else {
      dispatch(leaveMission(id));
    }
  };

  const parsed = missions.map((mission) => (
    <tr key={mission.mission_id}>
      <td className="mName">{mission.mission_name}</td>
      <td className="mDescription">{mission.description}</td>
      <td className="mStatusRow">
        {mission.reserved ? (
          <span className="Active">
            Active Member
          </span>
        ) : (
          <span className="inActive">
            NOT A MEMBER
          </span>
        )}

      </td>
      <td className="mBook">
        {mission.reserved ? (
          <button
            type="button"
            onClick={() => handleClick(mission.mission_id, 'Leave')}
            className="leaveBtn btn-join-mission"
          >
            Leave Mission
          </button>
        )
          : (
            <button
              type="button"
              onClick={() => handleClick(mission.mission_id, 'Join')}
              className="joinBtn btn-join-mission"
            >
              Join Mission
            </button>
          )}

      </td>
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
