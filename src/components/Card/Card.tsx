import { useState } from 'react';
import { Character } from '../../shared/api/types';
import { Modal } from '../Modal';
import styles from './Card.module.scss';

interface CardProps {
  character: Character;
}

export default function Card({ character }: CardProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => setIsOpenModal(true);

  const closeModal = () => setIsOpenModal(false);

  return (
    <>
      <li className={styles.card} onClick={openModal} role="menuitem">
        <div className={styles.card__header}>
          <img
            className={styles.card__image}
            src={character.image}
            alt={`${character.name} avatar`}
          />
          <div className={styles.card__statusWrapper}>
            <div className={styles.card__status}>{character.status}</div>
          </div>
        </div>
        <div className={styles.card__content}>
          <div className={styles.card__name}>{character.name}</div>
          <div className={styles.card__species}>{character.species}</div>
          <div className={styles.card__episodes}>
            Number of episodes: {character.episode.length}
          </div>
        </div>
      </li>
      {isOpenModal && <Modal character={character} closeModal={closeModal} />}
    </>
  );
}
