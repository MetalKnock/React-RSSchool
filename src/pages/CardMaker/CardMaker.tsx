import { Form } from '../../components/Form';
import { HumanList } from '../../components/HumanList';
import { useAppSelector } from '../../shared/hooks/redux';

export default function CardMaker() {
  const { humans } = useAppSelector((state) => state.humansSlice);

  return (
    <div className="container">
      <Form />
      <HumanList humans={humans} />
    </div>
  );
}
