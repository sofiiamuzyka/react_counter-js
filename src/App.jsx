import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);
  const [increasePressed, setIncreasePressed] = useState(false);

  const addOne = () => {
    setCount(prCount => {
      const newCount = prCount + 1;

      if (increasePressed && newCount % 5 === 0) {
        return newCount + 100;
      }

      return newCount;
    });

    setIncreasePressed(false);
  };

  const add100 = () => {
    setCount(prCount => {
      return prCount + 100;
    });

    setIncreasePressed(true);
  };

  // DON'T change the code below
  const increase = () => {
    if (count % 5 === 0) {
      add100();
    }

    addOne();
  };

  return (
    <div className="App">
      <h1 className="App__title">{`Count: ${count}`}</h1>

      <button type="button" className="App__add-one" onClick={addOne}>
        Add 1
      </button>

      <button type="button" className="App__add-100" onClick={add100}>
        Add 100
      </button>

      <button type="button" className="App__increase" onClick={increase}>
        Increase
      </button>
    </div>
  );
};
