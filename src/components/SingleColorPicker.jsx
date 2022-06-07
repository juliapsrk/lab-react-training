// Iteration 16

import ColorSquare from './ColorSquare';

const SingleColorPicker = (props) => {
  const handleValueChange = (event) => {
    const value = event.target.valueAsNumber;
    props.onChange(Number.isNaN(value) ? 0 : value);
  };

  return (
    <div>
      <ColorSquare
        r={props.color === 'r' ? props.value : 0}
        g={props.color === 'g' ? props.value : 0}
        b={props.color === 'b' ? props.value : 0}
      />
      <span>{props.color.toUpperCase()}:</span>
      <input
        type="number"
        min="0"
        max="255"
        value={props.value}
        onChange={handleValueChange}
      />
    </div>
  );
};

export default SingleColorPicker;
