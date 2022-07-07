import { useEffect, useRef } from 'react';

export default function useTouchedOutside(touchCallback) {
  const ref = useRef(null);

  const handleTouchOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      touchCallback(event);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleTouchOutside, true);
    return () => {
      document.removeEventListener('mousedown', handleTouchOutside, true);
    };
  });

  return ref;
}
