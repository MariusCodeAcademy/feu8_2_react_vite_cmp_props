import Card1 from './Card1';

function CardList(props) {
  return (
    <div className='cardsList grid3'>
      {props.list.map((townObj) => (
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
