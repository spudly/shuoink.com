'use client';
import {FC} from 'react';
import {APPS} from './apps';
import {useShellContext} from '../contexts/ShellContext';
import {IconGrid} from './IconGrid';
import backgroundImage from './nikola-knezevic-ddAHAl1a0gw-unsplash.jpg';

export const Desktop: FC = () => {
  const {launchApp} = useShellContext();
  return (
    <div
      className="fixed inset-0 flex -z-50 bg-cover bg-bottom"
      style={{backgroundImage: `url(${backgroundImage.src})`}}
    >
      <IconGrid
        grow
        icons={Object.values(APPS)}
        launch={launchApp}
        iconPosition="left"
      />
    </div>
  );
};
