import React from 'react';
import { Human } from '../../shared/api/types';
import { HumanCard } from '../HumanCard';

import styles from './HumanList.module.scss';

interface HumanListProps {
  humans: Human[];
}

class HumanList extends React.PureComponent<HumanListProps> {
  render() {
    const { humans } = this.props;
    return (
      <ul className={styles.HumanList}>
        {humans.map((human) => (
          <HumanCard key={human.id} human={human} />
        ))}
      </ul>
    );
  }
}

export default HumanList;
