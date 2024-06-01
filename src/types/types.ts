import {FC, LazyExoticComponent, PropsWithChildren, ReactElement} from 'react';

export type Application = {
  id: string;
  name: string;
  icon: ReactElement<{className?: string}>;
  component: LazyExoticComponent<FC<PropsWithChildren>>;
};

export type IconGridIcon = Pick<Application, 'id' | 'name' | 'icon'>;

export type ApplicationInstance = Application & {
  instanceId: string;
};

export type AppWindow = {
  id: string;
  name: string;
};

export type Rect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type AppContext = ApplicationInstance & {};
