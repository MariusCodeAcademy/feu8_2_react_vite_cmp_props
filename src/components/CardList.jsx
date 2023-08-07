import Card1 from './Card1';

const card1Data = {
  city: 'New York !!',
  heroImage: '/img/newyork.jpg',
  date: '2023-07-08',
};

const cardsArr = [
  {
    city: 'New York !!',
    heroImage: '/img/newyork.jpg',
    date: '2023-07-08',
  },
  {
    city: 'Paris !!',
    heroImage: '/img/paris.jpg',
    date: '2023-07-08',
  },
  {
    city: 'San Francisco !!',
    heroImage: '/img/sanfran.jpg',
    date: '2023-07-08',
  },
];

function CardList() {
  return (
    <div className='cardsList grid3'>
      <Card1
        city={cardsArr[0].city}
        heroImage={cardsArr[0].heroImage}
        date={cardsArr[0].date}
      />
      <Card1
        city={cardsArr[1].city}
        heroImage={cardsArr[1].heroImage}
        date={cardsArr[1].date}
      />
      <Card1
        city={cardsArr[2].city}
        heroImage={cardsArr[2].heroImage}
        date={cardsArr[2].date}
      />
    </div>
  );
}

export default CardList;
