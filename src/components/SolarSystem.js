import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="planets">
        <Title headline="Planetas" />

        <div className="planet-all">
          {Planets
            .map((element) => (
              <PlanetCard
                key={ element.name }
                planetName={ element.name }
                planetImage={ element.image }
              />
            ))}
        </div>

      </div>
    );
  }
}

export default SolarSystem;
