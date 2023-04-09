import React from 'react';
import styles from './Modal.module.scss';
import { Character } from '../../shared/api/types';

interface ModalProps {
  character: Character;
  closeModal: () => void;
}

export default function Modal({ character, closeModal }: ModalProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.modal} onClick={closeModal}>
      <div className={styles.modal__container} onClick={handleClick}>
        <div className={styles.leftColumn}>
          <img
            className={styles.leftColumn__image}
            src={character.image}
            alt={`${character.name} avatar`}
          />
        </div>
        <div className={styles.rightColumn}>
          <h3 className={styles.rightColumn__title}>INFO</h3>
          <ul className={styles.rightColumn__list}>
            <li className={styles.rightColumn__item}>
              <span className={styles.rightColumn__itemTitle}>{'Name: '}</span>
              <span>{character.name}</span>
            </li>
            <li className={styles.rightColumn__item}>
              <span className={styles.rightColumn__itemTitle}>{'Created: '}</span>
              <span>
                {new Date(character.created).toLocaleDateString('en-EN', {
                  year: '2-digit',
                  month: '2-digit',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </li>
            <li className={styles.rightColumn__item}>
              <span className={styles.rightColumn__itemTitle}>{'Number of episodes: '}</span>
              <span>{character.episode.length}</span>
            </li>
            <li className={styles.rightColumn__item}>
              <span className={styles.rightColumn__itemTitle}>{'Gender: '}</span>
              <span>{character.gender}</span>
            </li>
            <li className={styles.rightColumn__item}>
              <span className={styles.rightColumn__itemTitle}>{'Location: '}</span>
              <span>{character.location.name}</span>
            </li>
            <li className={styles.rightColumn__item}>
              <span className={styles.rightColumn__itemTitle}>{'Id: '}</span>{' '}
              <span>{character.id}</span>
            </li>
            <li className={styles.rightColumn__item}>
              <span className={styles.rightColumn__itemTitle}>{'Status: '}</span>
              <span>{character.status}</span>
            </li>
            <li className={styles.rightColumn__item}>
              <span className={styles.rightColumn__itemTitle}>{'Species: '}</span>
              <span>{character.species}</span>
            </li>
          </ul>
        </div>
        <button
          className={styles.modal__close}
          type="button"
          onClick={closeModal}
          data-testid="closeModal"
        >
          {}
        </button>
      </div>
    </div>
  );
}
