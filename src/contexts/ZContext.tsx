import {
  FC,
  PropsWithChildren,
  createContext,
  use,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

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

  return (
    <ZContext.Provider value={{z: zRef.current, inc}}>
      {children}
    </ZContext.Provider>
  );
};

export const useZContext = () => {
  const context = use(ZContext);
  if (!context) {
    throw new Error('useZContext must be used within an ZContext.Provider');
  }
  const {z: maxZ, inc} = context;
  const [z, setZ] = useState(() => maxZ + 1);

  useLayoutEffect(() => {
    setZ(inc());
  }, []);

  const moveToTop = () => {
    setZ(inc());
  };

  return [z, moveToTop] as const;
};
