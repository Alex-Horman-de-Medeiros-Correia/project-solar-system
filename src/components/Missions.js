import React from 'react';
import Title from './Title';
import Missionss from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />

        <section className="mission-all">
          {Missionss
            .map((element) => (<MissionCard
              key={ element.name }
              name={ element.name }
              year={ element.year }
              country={ element.country }
              destination={ element.destination }
            />))}
        </section>
      </div>
    );
  }
}

export default Missions;
