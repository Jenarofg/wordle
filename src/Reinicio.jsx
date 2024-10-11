import React from 'react';

const RestartButton = () => {
  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <button onClick={handleRestart}>
      Reiniciar App
    </button>
  );
};

export default RestartButton;
