```javascript
//pages/aboutSolution.js
import {useEffect, useState} from 'react';

export default function About() {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let interval;
    if(mounted){
        interval = setInterval(() => {
          setCount(prevCount => prevCount + 1);
        }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [mounted]);

  return (
    <div>
      <h1>About Us</h1>
      <p>Count: {count}</p>
    </div>
  );
}
```