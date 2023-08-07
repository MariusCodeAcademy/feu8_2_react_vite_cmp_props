function Weather(props) {
  // oras gali buti ['lyja', 'saule', 'debesuota']
  const dabartinisOras = props.condition;

  return (
    <div>
      <h2>Orai</h2>

      {dabartinisOras === 'lyja' && (
        <div>
          <h3>Lyja</h3>
          <img src='/img/oras/rain.jpg' alt='lietus' />
        </div>
      )}
      {dabartinisOras === 'saule' && (
        <div>
          <h3>Sviecia Saule</h3>
          <img src='/img/oras/sun.jpg' alt='saule' />
        </div>
      )}
      {dabartinisOras === 'debesuota' && <h3>Debesuota</h3>}
    </div>
  );
}
export default Weather;
