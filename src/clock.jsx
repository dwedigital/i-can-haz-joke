import { useEffect, useState } from "preact/hooks";

export default function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <span class="text-pretty text-5xl font-semibold dark:text-slate-100 text-green-600">
      {time}
    </span>
  );
}
