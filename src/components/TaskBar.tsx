import {FC} from 'react';
import {useShellContext} from '../contexts/ShellContext';
import {Clock} from './Clock';
import {FaVoicemail} from 'react-icons/fa';
import {FaMessage} from 'react-icons/fa6';

export const TaskBar: FC = () => {
  const {runningApps} = useShellContext();

  return (
    <div className="bg-gray-200 border border-black fixed top-0 right-0 flex items-stretch flex-col select-none">
      <div className="border-b border-black p-1 flex items-center justify-center">
        <div>s:OS</div>
      </div>

      <div className="border-b border-black p-1 flex items-center">
        <div className="border shadow-black shadow-inner bg-gray-300 flex items-center py-1 px-2 gap-2">
          <FaVoicemail />
          <FaMessage />
          <div className="flex-1 min-w-8" />
          <div>
            <Clock />
          </div>
        </div>
      </div>

      {runningApps.map(app => (
        <button
          key={app.instanceId}
          className="border-b border-black px-2 py-1 flex items-center gap-2"
        >
          {app.icon}
          {app.name}
        </button>
      ))}
    </div>
  );
};
