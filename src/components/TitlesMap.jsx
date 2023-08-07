const colorTitles = ['red', 'green', 'blue'];

function TitlesMap() {
  // inline style object
  const divStyle = {
    backgroundColor: 'white',
    padding: '15px',
  };
  return (
    <div style={divStyle}>
      {colorTitles.map((color) => (
        <h2 style={{ color: color }} key={color}>
          {color}
        </h2>
      ))}
    </div>
  );
}

export default TitlesMap;
