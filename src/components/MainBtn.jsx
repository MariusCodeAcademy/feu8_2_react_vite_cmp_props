// funkcinis komponentas yra funkcija prasideda diziaja raide
// grazina jsx
function MainBtn(props) {
  let btnClasses = props.outline === true ? 'btn btnOutline' : 'btn';
  // btnClasses = `btn ${props.outline === true ? 'btnOutline' : ''}`;
  // let btnClasses = 'btn';
  // if (props.outline === true) {
  //   btnClasses += ' btnOutline';
  // }
  // console.log('btnClasses ===', btnClasses);
  // props.children - yra tai kas ikelta tarp pradzio ir pabaigos tagu
  return <button className={btnClasses}>{props.children}</button>;
}

export default MainBtn;
