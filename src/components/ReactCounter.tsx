import { useState } from 'react';

export default function ReactCounter() {
  const [count, setCount] = useState<number>(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
