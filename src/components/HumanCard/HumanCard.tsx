import { Human } from '../../shared/api/types';
import Background from './Background';
import styles from './HumanCard.module.scss';

interface HumanCardProps {
  human: Human;
}

export default function HumanCard({ human }: HumanCardProps) {
  const { avatar, name, birthday, country, gender, agreement } = human;

  return (
    <li className={styles.humanCard}>
      <Background className={styles.humanCard__background} />
      <div className={styles.humanCard__container}>
        <img className={styles.humanCard__avatar} src={avatar} alt={`${human.name} avatar`} />
        <h2 className={styles.humanCard__text}>{name}</h2>
        <p className={styles.humanCard__text}>{birthday}</p>
        <div className={styles.humanCard__inner}>
          <div className={styles.humanCard__text}>{country}</div>
          <div className={styles.humanCard__text}>{gender}</div>
        </div>
        {agreement && <div className={styles.humanCard__text}>Approved</div>}
      </div>
    </li>
  );
}
