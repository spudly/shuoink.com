import {FC} from 'react';
import {useEffectOnce} from '../../hooks/useEffectOnce';
import {useAppWindows} from '../../hooks/useAppWindows';
import {Window} from '../Window';
import {IconGrid} from '../IconGrid';
import {useShellContext} from '../../contexts/ShellContext';
import {APPS} from '.';

const Launcher: FC = () => {
  const [windows, openWindow, closeWindow] = useAppWindows();
  const {launchApp} = useShellContext();

  useEffectOnce(openWindow);

  return (
    <div>
      {windows.map(window => (
        <Window
          key={window.id}
          appWindow={window}
          close={() => closeWindow(window.id)}
        >
          <IconGrid icons={Object.values(APPS)} launch={launchApp} />
        </Window>
      ))}
    </div>
  );
};

export default Launcher;
