import { useEffect, useMemo, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Colleague from '../interfaces/colleague.interface';
import PlayerProps from './player.props';
import './style.css';

const Player: React.FC<PlayerProps> = ({ name, mediator }) => {
  const [message, setMessage] = useState<string>('');
  const [highlight, setHighlight] = useState(false);

  const player: Colleague = useMemo(
    () => ({
      id: uuid(),
      receiveMessage: (message: string) => {
        setMessage(message);
        highlighter();
      },
    }),
    []
  );

  useEffect(() => {
    mediator.register(player);
  }, [mediator, player]);

  const handleClick = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    mediator.sendMessage(`${name} rolled a ${roll}`, player);
  };

  const highlighter = () => {
    setHighlight(true);
    setTimeout(() => setHighlight(false), 1000);
  };

  return (
    <div>
      <h3>{name}</h3>
      <button onClick={handleClick}>Roll Dice</button>
      {message && (
        <span className={`content ${highlight ? 'highlight' : ''}`}>{message}</span>
      )}
    </div>
  );
};

export default Player;
