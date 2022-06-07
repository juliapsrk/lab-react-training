// Iteration 16

const ColorSquare = (props) => {
  return (
    <div
      style={{
        display: 'block',
        width: '2em',
        height: '2em',
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
      }}
    ></div>
  );
};

export default ColorSquare;
