import { useState } from 'react';
import IsNumberHandler from './handlers/is-number.handler';
import PrefixHandler from './handlers/prefix.handler';
import LengthHandler from './handlers/length.handler';

const MobileNumberForm: React.FC = () => {
  const [mobile, setMobile] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const numberHandler = new IsNumberHandler();
  const prefixHandler = new PrefixHandler();
  const lengthHandler = new LengthHandler();

  numberHandler.setNext(prefixHandler).setNext(lengthHandler);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const validationError = numberHandler.validate(mobile);
    setError(validationError);
    if (!validationError) {
      alert('The mobile number is valid!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='mobile'>Mobile Number: </label>
        <input
          id='mobile'
          type='text'
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type='submit'>Check</button>
    </form>
  );
};

export default MobileNumberForm;
