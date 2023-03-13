import React from 'react';

interface CardProps {}

interface CardState {}

class Card extends React.Component<CardProps, CardState> {
  constructor(props: CardProps) {
    super(props);
  }
  render() {
    return <div>card</div>;
  }
}

export default Card;
