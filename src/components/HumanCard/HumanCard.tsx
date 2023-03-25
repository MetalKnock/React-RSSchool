import React from 'react';
import { Human } from '../../shared/api/types';
import Background from './Background';

import styles from './HumanCard.module.scss';

interface HumanCardProps {
  human: Human;
}

class HumanCard extends React.PureComponent<HumanCardProps> {
  render() {
    const { human } = this.props;
    return (
      <li className={styles.humanCard}>
        <Background className={styles.humanCard__background} />
        <div className={styles.humanCard__container}>
          <img
            className={styles.humanCard__avatar}
            src={human.avatar}
            alt={`${human.name} avatar`}
          />
          <h2 className={styles.humanCard__text}>{human.name}</h2>
          <p className={styles.humanCard__text}>{human.birthday}</p>
          <div className={styles.humanCard__inner}>
            <div className={styles.humanCard__text}>{human.country}</div>
            <div className={styles.humanCard__text}>{human.gender}</div>
          </div>
          <div className={styles.humanCard__text}>{human.agreement ? 'Approved' : 'Reject'}</div>
        </div>
      </li>
    );
  }
}

export default HumanCard;
