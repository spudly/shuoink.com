import {FC, PropsWithChildren} from 'react';
import {useEffectOnce} from '../../hooks/useEffectOnce';
import {useAppContext} from '../../contexts/AppContext';
import {useAppWindows} from '../../hooks/useAppWindows';
import {Window} from '../Window';
import {useShellContext} from '../../contexts/ShellContext';

const AppManager: FC = () => {
  const [windows, openWindow, closeWindow] = useAppWindows();
  const {runningApps, killApp} = useShellContext();

  useEffectOnce(openWindow);

  return (
    <div>
      {windows.map(window => (
        <Window
          key={window.id}
          appWindow={window}
          close={() => closeWindow(window.id)}
        >
          <table>
            <thead>
              <tr>
                <th>App Name</th>
                <th>Close</th>
              </tr>
            </thead>
            <tbody>
              {runningApps.map(app => (
                <tr key={app.instanceId}>
                  <td>{app.name}</td>
                  <td>
                    <button onClick={() => killApp(app.instanceId)}>
                      Close
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Window>
      ))}
    </div>
  );
};

export default AppManager;
