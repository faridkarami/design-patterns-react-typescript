import ConcreteMediator from './pattern/concrete-mediator';
import Player from './pattern/Player/Player';

const Game: React.FC = () => {
  const mediator = new ConcreteMediator();

  return (
    <div>
      <Player mediator={mediator} name='Player 1' />
      <hr />
      <Player mediator={mediator} name='Player 2' />
      <hr />
      <Player mediator={mediator} name='Player 3' />
    </div>
  );
};

export default Game;
