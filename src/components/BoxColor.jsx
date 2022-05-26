// Iteration 4

const componentToHex = (c) => {
  const hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
};

const rgbToHex = (r, g, b) =>
  `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;

const BoxColor = (props) => {
  const color = `rgb(${props.r},${props.g},${props.b})`;
  const hexColor = rgbToHex(props.r, props.g, props.b);
  const backgroundIsLight = props.r + props.g + props.b > (255 * 3) / 2;
  return (
    <div
      className="box-color"
      style={{
        backgroundColor: color,
        color: backgroundIsLight ? 'black' : 'white',
      }}
    >
      {color}
      <br />
      {hexColor}
    </div>
  );
};

export default BoxColor;
