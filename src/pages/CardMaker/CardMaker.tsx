import React from 'react';
import { Form } from '../../components/Form';
import { HumanList } from '../../components/HumanList';
import { Toast } from '../../components/Toast';
import { Human } from '../../shared/api/types';

interface GeneratorState {
  humans: Human[];
  isAlertVisible: boolean;
}

class CardMaker extends React.Component<Record<string, never>, GeneratorState> {
  constructor(props: never) {
    super(props);

    this.state = {
      humans: [],
      isAlertVisible: false,
    };
  }

  addHuman = (human: Human) => {
    const { humans } = this.state;
    this.setState(
      (prevState) => {
        return { ...prevState, humans: [...humans, human], isAlertVisible: true };
      },
      () => {
        setTimeout(() => {
          this.setState((prevState) => {
            return { ...prevState, isAlertVisible: false };
          });
        }, 2000);
      }
    );
  };

  render() {
    const { humans, isAlertVisible } = this.state;
    return (
      <div className="container">
        <Form addHuman={this.addHuman} />
        <HumanList humans={humans} />
        <Toast notification="Data saved" show={isAlertVisible} />
      </div>
    );
  }
}

export default CardMaker;
