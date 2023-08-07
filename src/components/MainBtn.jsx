// funkcinis komponentas yra funkcija prasideda diziaja raide
// grazina jsx
function MainBtn(props) {
  if (props.outline === true) {
    return <button className='btn btnOutline'>{props.children}</button>;
  }
  // props.children - yra tai kas ikelta tarp pradzio ir pabaigos tagu
  return <button className='btn'>{props.children}</button>;
}

export default MainBtn;
