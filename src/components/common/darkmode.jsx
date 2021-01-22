/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';

function DarkMode() {
  const [mode, setMode] = useState(localStorage.getItem('dark') === 'true');

  useEffect(() => {
    mode
      ? document.body.classList.add('dark')
      : document.body.classList.remove('dark');
    localStorage.setItem('dark', mode);
  }, [mode]);

  const onClickHandler = () => {
    setMode(() => !mode);
  };
  return (
    <div className="toggle" onClick={onClickHandler}>
      <span>{mode ? '🌞' : '🌙'}</span>
    </div>
  );
}

export default DarkMode;
