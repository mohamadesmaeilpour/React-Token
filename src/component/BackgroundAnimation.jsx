import React, { useState } from 'react';

const BackgroundAnimation = () => {
  const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  const [boxShadow, setBoxShadow] = useState(
    'inset 5px 5px 15px rgba(0,0,0,0.15),inset -5px -5px 15px rgba(255,255,255,0.15), 5px 5px 15px rgba(0,0,0,0.15), -5px -5px 15px rgba(252, 236, 19, 0.15)'
  );
  return (
    <ul className="background">
      {count.map((item) => {
        return <li key={item} style={{ background: boxShadow }}></li>;
      })}
    </ul>
  );
};

export default BackgroundAnimation;
