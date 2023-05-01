import { Human } from '../../shared/api/types';
import { HumanCard } from '../HumanCard';

import styles from './HumanList.module.scss';

interface HumanListProps {
  humans: Human[];
}

export default function HumanList({ humans }: HumanListProps) {
  return (
    <ul className={styles.humanList} data-testid="humanList">
      {humans.map((human) => (
        <HumanCard key={human.id} human={human} />
      ))}
    </ul>
  );
}
