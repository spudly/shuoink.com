import {FC, useState} from 'react';
import {useEffectOnce} from '../../hooks/useEffectOnce';
import {useAppWindows} from '../../hooks/useAppWindows';
import {Window} from '../Window';
import clsx from 'clsx';

const Calc: FC = () => {
  const [formula, setFormula] = useState<Array<string | number>>([]);
  console.log(formula);

  const calculate = () => {
    const result = formula.reduce<number>((acc, curr, index) => {
      if (typeof curr === 'number') {
        const modifier = formula.at(index - 1);
        switch (modifier) {
          case '÷':
            return acc / curr;
          case 'x':
            return acc * curr;
          case '+':
            return acc + curr;
          case '-':
            return acc - curr;
          default:
            return curr;
        }
      }
      return acc;
    }, 0);
    setFormula([result]);
  };

  const handleButton = (which: number | '.' | '÷' | 'x' | '+' | '-') => () => {
    if (typeof which === 'number' || which === '.') {
      setFormula(prev => {
        const last = prev.at(-1);
        if (typeof last === 'number') {
          return [...prev.slice(0, -1), parseFloat(`${last}${which}`)];
        } else {
          return [...prev, which];
        }
      });
    } else {
      calculate();
      setFormula(prev => [...prev, which]);
    }
  };

  const buttonClasses = 'bg-gray-200 hover:bg-gray-300';

  return (
    <form
      className="grid grid-cols-4 flex-1 p-2 gap-2"
      onSubmit={e => {
        e.preventDefault();
        calculate();
      }}
      onReset={() => setFormula([])}
    >
      <input
        type="text"
        readOnly
        className="col-span-4 text-right p-2 text-6xl focus:outline-none pointer-events-none"
        value={formula.findLast(val => typeof val === 'number') || 0}
      />

      <button className={clsx(buttonClasses, 'col-span-3')} type="reset">
        C
      </button>
      <button
        className={buttonClasses}
        type="button"
        onClick={handleButton('+')}
      >
        +
      </button>

      <button className={buttonClasses} type="button" onClick={handleButton(7)}>
        7
      </button>
      <button className={buttonClasses} type="button" onClick={handleButton(8)}>
        8
      </button>
      <button className={buttonClasses} type="button" onClick={handleButton(9)}>
        9
      </button>
      <button
        className={buttonClasses}
        type="button"
        onClick={handleButton('÷')}
      >
        ÷
      </button>

      <button className={buttonClasses} type="button" onClick={handleButton(4)}>
        4
      </button>
      <button className={buttonClasses} type="button" onClick={handleButton(5)}>
        5
      </button>
      <button className={buttonClasses} type="button" onClick={handleButton(6)}>
        6
      </button>
      <button
        className={buttonClasses}
        type="button"
        onClick={handleButton('x')}
      >
        &times;
      </button>

      <button className={buttonClasses} type="button" onClick={handleButton(1)}>
        1
      </button>
      <button className={buttonClasses} type="button" onClick={handleButton(2)}>
        2
      </button>
      <button className={buttonClasses} type="button" onClick={handleButton(3)}>
        3
      </button>
      <button
        className={buttonClasses}
        type="button"
        onClick={handleButton('-')}
      >
        -
      </button>

      <button
        className={buttonClasses}
        type="button"
        onClick={handleButton('.')}
      >
        .
      </button>
      <button className={buttonClasses} type="button" onClick={handleButton(0)}>
        0
      </button>
      <button className={clsx(buttonClasses, 'col-span-2')} type="submit">
        =
      </button>
    </form>
  );
};

const Calculator: FC = () => {
  const [windows, openWindow, closeWindow] = useAppWindows();

  useEffectOnce(openWindow);

  return (
    <div>
      {windows.map(window => (
        <Window
          key={window.id}
          appWindow={window}
          close={() => closeWindow(window.id)}
        >
          <Calc />
        </Window>
      ))}
    </div>
  );
};

export default Calculator;
