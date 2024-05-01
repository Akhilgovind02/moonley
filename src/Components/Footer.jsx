import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []); 

  return (
    <div style={{marginTop:'80px',height:'160px'}}>
      <h1>
  <span style={{ marginRight: '100px' }}>{count}K+</span>{" "}
  <span style={{ marginRight: '100px' }}>|</span>{" "}
  <span style={{ marginRight: '100px' }}>{count}+</span>{" "}
  <span style={{ marginRight: '100px' }}>|</span>{" "}
  <span style={{ marginRight: '100px' }}>{count}K+</span>
</h1>

<p>
  Years of experience
  <span className="ml-20">Successfull Projects</span>
  <span className="ml-44">Happy Clients</span>

</p>    
</div>
  );
};

export default Counter;
