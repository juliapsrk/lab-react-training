// Iteration 16

import { useState } from 'react';
import ColorSquare from './ColorSquare';
import SingleColorPicker from './SingleColorPicker';

const RGBColorPicker = () => {
  const [rValue, setRValue] = useState(255);
  const [gValue, setGValue] = useState(255);
  const [bValue, setBValue] = useState(255);

  return (
    <div>
      <SingleColorPicker color="r" value={rValue} onChange={setRValue} />
      <SingleColorPicker color="g" value={gValue} onChange={setGValue} />
      <SingleColorPicker color="b" value={bValue} onChange={setBValue} />
      <ColorSquare r={rValue} g={gValue} b={bValue} />
      <span>
        rgb({rValue}, {gValue}, {bValue})
      </span>
    </div>
  );
};

export default RGBColorPicker;
