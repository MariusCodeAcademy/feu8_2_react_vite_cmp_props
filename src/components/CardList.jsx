import Card1 from './Card1';

const card1Data = {
  city: 'New York !!',
  heroImage: '/img/newyork.jpg',
  date: '2023-07-08',
};

function CardList() {
  return (
    <div className='cardsList grid3'>
      <Card1
        city={card1Data.city}
        heroImage={card1Data.heroImage}
        date={card1Data.date}
      />
      <Card1 city='Paris !' heroImage='/img/paris.jpg' date='2024-07-08' />
      <Card1
        city='San Francisco !'
        heroImage='/img/sanfran.jpg'
        date='2019-07-08'
      />
    </div>
  );
}

export default CardList;
