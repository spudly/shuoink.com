import clsx from 'clsx';
import {FC, cloneElement} from 'react';
import {IconGridIcon} from '../types/types';

export const IconGrid: FC<{
  icons: IconGridIcon[];
  iconPosition?: 'left' | 'right' | 'top';
  launch: (id: string) => void;
  grow?: boolean;
}> = ({icons, launch, grow, iconPosition = 'top'}) => {
  return (
    <div
      className={clsx('flex p-4 gap-4 w-full h-full flex-wrap select-none', {
        'flex-grow': grow,
        'flex-col': iconPosition === 'left',
        'flex-col-reverse': iconPosition === 'right',
        'justify-start': iconPosition === 'left' || iconPosition === 'top',
        'justify-end': iconPosition === 'right',
        'items-start': iconPosition === 'top',
        'items-end': iconPosition === 'right',
      })}
    >
      {icons.map(icon => {
        return (
          <button
            key={icon.id}
            type="button"
            className="group flex flex-col gap-2 items-center w-20"
            onDoubleClick={e => {
              launch(icon.id);
              e.currentTarget.blur();
            }}
          >
            <div className="w-8 h-8 group-focus:bg-blue-700 group-focus:bg-opacity-25 text-white p-4 box-content">
              {cloneElement(icon.icon, {className: 'w-full h-full'})}
            </div>
            <div>
              <div className="group-focus:bg-blue-700 group-focus:bg-opacity-25 text-white text-ellipsis whitespace-nowrap h-6 max-w-64 [text-shadow:_0_0_5px_rgb(0_0_0_/_100%)] group-focus:[text-shadow:none] px-2">
                {icon.name}
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};
