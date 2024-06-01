import {useEffect, useState} from 'react';
import {Rect} from '../types/types';

export const useMaxRect = () => {
  const [maxRect, setMaxRect] = useState<Rect>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    setMaxRect({
      x: width,
      y: height,
      width,
      height,
    });
  }, []);

  return maxRect;
};
