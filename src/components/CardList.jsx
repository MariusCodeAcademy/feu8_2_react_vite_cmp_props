import Card1 from './Card1';

const cardsArr = [
  {
    id: '1',
    city: 'New York !!',
    heroImage: '/img/newyork.jpg',
    date: '2023-07-08',
  },
  {
    id: '2',
    city: 'Paris !!',
    heroImage: '/img/paris.jpg',
    date: '2023-07-08',
  },
  {
    id: '3',
    city: 'San Francisco !!',
    heroImage: '/img/sanfran.jpg',
    date: '2023-07-08',
  },
  {
    id: '4',
    city: 'New York !!',
    heroImage: '/img/newyork.jpg',
    date: '2023-07-08',
  },
];

function CardList() {
  return (
    <div className='cardsList grid3'>
      {cardsArr.map((townObj) => (
        <Card1
          key={townObj.id}
          city={townObj.city}
          heroImage={townObj.heroImage}
          date={townObj.date}
        />
      ))}
    </div>
  );
}

export default CardList;
