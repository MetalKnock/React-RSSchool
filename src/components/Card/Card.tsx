import React from 'react';
import { Character } from '../../shared/api/types';
import { LOCALE } from '../../shared/config/constants';
import styles from './Card.module.scss';

interface CardProps {
  character: Character;
}

interface CardState {}

class Card extends React.Component<CardProps, CardState> {
  constructor(props: CardProps) {
    super(props);
  }
  render() {
    return (
      <div className={styles.card}>
        <div className={styles.card__header}>
          <img className={styles.card__image} src={this.props.character.image} />
          <div className={styles.card__statusWrapper}>
            <div className={styles.card__status}>{this.props.character.status}</div>
          </div>
        </div>
        <div className={styles.card__content}>
          <div className={styles.card__name}>{this.props.character.name}</div>
          <div className={styles.card__species}>{this.props.character.species}</div>
          <div className={styles.card__episodes}>
            Number of episodes: {this.props.character.episode.length}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
