// funkcinis komponentas yra funkcija prasideda diziaja raide
// grazina jsx
function MainBtn(props) {
  // props.children - yra tai kas ikelta tarp pradzio ir pabaigos tagu
  return <button className='btn'>{props.children}</button>;
}

export default MainBtn;
