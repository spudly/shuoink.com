import {useEffect, useRef} from 'react';

export const useEffectOnce = (effect: VoidFunction) => {
  const executedRef = useRef(false);

  useEffect(() => {
    if (executedRef.current) {
      return;
    }
    effect();
    executedRef.current = true;
  }, [effect]);
};
