import React from 'react';
import { Human } from '../../shared/api/types';

interface HumanCardProps {
  human: Human;
}

class HumanCard extends React.PureComponent<HumanCardProps> {
  render() {
    const { human } = this.props;
    return (
      <li>
        <img src={human.avatar} alt={`${human.name} avatar`} />
        <div>{human.name}</div>
        <div>{human.birthday}</div>
        <div>{human.country}</div>
        <div>{human.gender}</div>
        <div>{human.agreement}</div>
      </li>
    );
  }
}

export default HumanCard;
