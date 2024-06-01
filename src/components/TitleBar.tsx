import {
  FC,
  MouseEventHandler,
  ReactElement,
  use,
  useEffect,
  useRef,
} from 'react';
import {MenuBar} from './MenuBar';
import {useWindowContext} from '../contexts/WindowContext';
import {useAppContext} from '../contexts/AppContext';
import {FaMaximize, FaMinimize} from 'react-icons/fa6';
import {
  FaWindowClose,
  FaWindowMaximize,
  FaWindowMinimize,
  FaWindowRestore,
} from 'react-icons/fa';

export const TitleBar: FC<{onDrag: (x: number, y: number) => void}> = ({
  onDrag,
}) => {
  const {icon} = useAppContext();
  const {name} = useWindowContext();
  const {minimize, maximize, isMaximized, unmaximize, close} =
    useWindowContext();
  const nodeRef = useRef<HTMLDivElement>(null);

  const startOffsetRef = useRef<{x: number; y: number} | null>(null);

  const handleMouseDown: MouseEventHandler = e => {
    if (e.target instanceof HTMLButtonElement) {
      return;
    }
    if (nodeRef.current == null) {
      throw new Error('nodeRef.current is null');
    }
    const rect = nodeRef.current.getBoundingClientRect();
    startOffsetRef.current = {x: e.clientX - rect.x, y: e.clientY - rect.y};
  };

  useEffect(() => {
    const handleMouseUp = (e: MouseEvent) => {
      startOffsetRef.current = null;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const offset = startOffsetRef.current;
      if (offset != null) {
        onDrag(e.clientX - offset.x, e.clientY - offset.y);
      }
    };

    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={nodeRef}
      className="flex bg-gray-900 text-white border-b border-black select-none cursor-grab items-center"
      onMouseDown={handleMouseDown}
    >
      <div className="p-2">{icon}</div>
      <MenuBar />
      <div className="flex-1" />
      {name}
      <div className="flex-1" />
      {minimize ? (
        <button
          type="button"
          onClick={minimize}
          className="hover:bg-white text-white hover:text-gray-900 p-2"
        >
          <FaWindowMinimize />
        </button>
      ) : null}
      {!isMaximized && maximize ? (
        <button
          type="button"
          onClick={maximize}
          className="hover:bg-white text-white hover:text-gray-900 p-2"
        >
          <FaWindowMaximize />{' '}
        </button>
      ) : null}
      {isMaximized && unmaximize ? (
        <button
          type="button"
          onClick={unmaximize}
          className="hover:bg-white text-white hover:text-gray-900 p-2"
        >
          <FaWindowRestore />{' '}
        </button>
      ) : null}
      {close ? (
        <button
          type="button"
          onClick={close}
          className="hover:bg-white text-white hover:text-gray-900 p-2"
        >
          <FaWindowClose />
        </button>
      ) : null}
    </div>
  );
};
