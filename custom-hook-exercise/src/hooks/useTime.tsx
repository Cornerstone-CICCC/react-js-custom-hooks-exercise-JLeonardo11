import { useState, useEffect } from 'react';

function useTime<T extends 'day' | 'hour'>(type: T): string {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      if (type === 'day') {
        setTime(now.toLocaleDateString('en-US', { weekday: 'long' })); 
      } else if (type === 'hour') {
        setTime(now.getHours().toString()); 
      }
    };

    updateTime();

    const interval = setInterval(updateTime, 1000 * 60); 
    return () => clearInterval(interval);
  }, [type]);

  return time;
}

export default useTime;
