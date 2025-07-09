import { useState, useEffect } from "react";
export default function useToggleTimeOut(delay) {
  const [isTrigger, setIsTrigger] = useState(false);

  function start() {
    setIsTrigger(true);
  }

  useEffect(() => {
    if (!isTrigger) return;

    const timeoutId = setTimeout(() => {
      setIsTrigger(false);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [isTrigger, delay]);

  return { isTrigger, start };
}
