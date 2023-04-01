import { useState } from 'react';
import { Form } from '../../components/Form';
import { HumanList } from '../../components/HumanList';
import { Toast } from '../../components/Toast';
import { Human } from '../../shared/api/types';

export default function CardMaker() {
  const [humans, setHumans] = useState<Human[]>([]);
  const [showToast, setShowToast] = useState(false);

  const addHuman = (human: Human) => {
    setHumans([...humans, human]);
    setShowToast(true);
  };

  const closeToast = () => setShowToast(false);

  return (
    <div className="container">
      <Form addHuman={addHuman} />
      <HumanList humans={humans} />
      <Toast notification="Data saved" showToast={showToast} onClose={closeToast} />
    </div>
  );
}
