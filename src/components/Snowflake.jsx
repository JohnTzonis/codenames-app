const Snowflake = ({ randomX }) => {
  const size = Math.random() * 5 + 5;
  const animationDuration = Math.random() * 8 + 1;
  const opacity = Math.random() * 0.5 + 0.5;

  const snowflakeStyle = {
    width: `${size}px`,
    height: `${size}px`,
    opacity: opacity,
    animation: `fall linear ${animationDuration}s infinite`,
    left: `calc(100vw * ${randomX})`,
  };

  return <div className="snowflake" style={snowflakeStyle}></div>;
};

export default Snowflake;
