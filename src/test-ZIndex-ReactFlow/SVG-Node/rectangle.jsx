function Rectangle({ width, height, ...svgAttributes }) {
  return <rect x={0} y={0} width={width} height={height} {...svgAttributes} />;
}
export default Rectangle;
