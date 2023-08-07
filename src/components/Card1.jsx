import MainBtn from './MainBtn';

function Card1(props) {
  // console.log('props ===', props);
  const cityName = props.city;
  return (
    <div>
      <article className='singleCard'>
        <img src={props.heroImage} alt='new york' className='cardImg' />
        <div className='cardInfo'>
          <h3 className='cardTitle'>{cityName}</h3>
          <p className='cardDate'>{props.date}</p>
          <p className='text'>
            Praesent tincidunt sed tellus ut rutrum sed vitae justo.
          </p>
          <MainBtn>Pirkti bilietus</MainBtn>
        </div>
      </article>
    </div>
  );
}

export default Card1;
