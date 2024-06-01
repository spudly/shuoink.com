import {
  FC,
  PropsWithChildren,
  createContext,
  use,
  useRef,
  useState,
} from 'react';
import {useEffectOnce} from '../hooks/useEffectOnce';

const ZContext = createContext<{z: number; inc: () => number}>({
  z: 0,
  inc: () => 0,
});

export const ZContextProvider: FC<PropsWithChildren> = ({children}) => {
  const zRef = useRef<number>(0);
  const [z, setZ] = useState(0);

  const inc = (): number => {
    zRef.current++;
    setZ(() => zRef.current);
    return zRef.current;
  };

  return <ZContext.Provider value={{z, inc}}>{children}</ZContext.Provider>;
};

export const useZContext = () => {
  const context = use(ZContext);
  if (!context) {
    throw new Error('useZContext must be used within an ZContext.Provider');
  }
  const {z: maxZ, inc} = context;
  const [z, setZ] = useState(() => maxZ + 1);

  useEffectOnce(() => {
    setZ(inc()); // syncs z from context with the +1 in the initial state
  });

  const moveToTop = () => {
    setZ(inc());
  };

  return [z, moveToTop] as const;
};
