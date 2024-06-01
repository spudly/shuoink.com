import {FC, PropsWithChildren, useState} from 'react';
import {TitleBar} from './TitleBar';
import {StatusBar} from './StatusBar';
import {AppWindow, Rect} from '../types/types';
import {WindowContext} from '../contexts/WindowContext';
import {useMaxRect} from '../hooks/useMaxRect';
import {useZContext} from '../contexts/ZContext';
import {usePreviousDistinct} from '@react-hookz/web';
import {useEffectOnce} from '../hooks/useEffectOnce';
import clsx from 'clsx';

const getDefaultRect = (): Rect => ({
  x: window.innerWidth / 4,
  y: window.innerHeight / 4,
  width: window.innerWidth / 2,
  height: window.innerHeight / 2,
});

export const Window: FC<
  PropsWithChildren<{appWindow: AppWindow; close: VoidFunction}>
> = ({appWindow, children, close}) => {
  const [rect, setRect] = useState<Rect | null>(null);
  const prevRect = usePreviousDistinct(rect);
  const maxRect = useMaxRect();
  const [zIndex, moveToTop] = useZContext();

  const isMinimized = rect === null;
  const isMaximized =
    (rect &&
      rect.x === 0 &&
      rect.y === 0 &&
      rect.width === maxRect.width &&
      rect.height === maxRect.height) ||
    false;

  const windowContext = {
    ...appWindow,
    minimize: () => setRect(null),
    maximize: () =>
      setRect({x: 0, y: 0, width: maxRect.width, height: maxRect.height}),
    unmaximize: () => setRect(prevRect ?? getDefaultRect()),
    isMaximized,
    prevRect,
    close,
  };

  useEffectOnce(() => {
    setRect(getDefaultRect());
  });

  if (isMinimized) {
    return null;
  }

  return (
    <WindowContext.Provider key={appWindow.id} value={windowContext}>
      <dialog
        open
        className={clsx(
          'fixed border border-black m-0 shadow-2xl shadow-black flex flex-col',
          {
            'duration-100': true,
          }
        )}
        style={{
          transform: `translate(${rect.x}px, ${rect.y}px)`,
          width: rect.width,
          height: rect.height,
          zIndex,
        }}
        onMouseDown={() => moveToTop()}
      >
        <TitleBar
          onDrag={(x, y) => {
            setRect(rect => {
              if (!rect) {
                return null;
              }
              return {...rect, x, y};
            });
          }}
        />
        <div className="flex-grow flex flex-col overflow-auto">{children}</div>
        <StatusBar />
      </dialog>
    </WindowContext.Provider>
  );
};
