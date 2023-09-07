import { useState, useEffect } from 'react';

interface IWindowDimension {
  height: number;
  width: number;
}

type TWindowDimension = IWindowDimension | object | null;

function getDimensions(): TWindowDimension {
  if (typeof window !== 'object') return {};
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height
  };
}

export function useWindowDimensions(): TWindowDimension {
  const [windowDimensions, setWindowDimensions] = useState<TWindowDimension>(
    getDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getDimensions());
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
