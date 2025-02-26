```javascript
//pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About page</a>
      </Link>
    </div>
  );
}
```
```javascript
//pages/about.js
import {useEffect, useState} from 'react';

export default function About() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted');
    // Simulate an asynchronous operation
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>About Us</h1>
      <p>Count: {count}</p>
    </div>
  );
}
```