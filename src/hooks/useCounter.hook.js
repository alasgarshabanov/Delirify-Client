import { useState, useCallback, useRef } from "react";

export default (initialValue, ms) => {
  const [count, setCount] = useState(initialValue);
  const intervalRef = useRef(null);
  const start = useCallback(() => {
    if (intervalRef.current !== null) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setCount(c => c + 1);
    }, ms);
  }, [ms]);
  const stop = useCallback(() => {
    if (intervalRef.current === null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);
  const reset = useCallback(() => {
    setCount(0);
  }, []);
  return { count, start, stop, reset };
}

// const { count, start, stop, reset } = useCounter(0, 500);
// <div>
//   count => {count}
//   <button onClick={start}>start</button>
//   <button onClick={stop}>stop</button>
//   <button onClick={reset}>reset</button>
// </div>
