// import logo from './assets/logo.svg';
import './style/common.css';
import './style/App.css';
import './style/responsive.css';
import CardList from './components/CardList';
import Header from './components/layout/Header';
import MainBtn from './components/MainBtn';
import TitlesMap from './components/TitlesMap';
import Weather from './components/Weather';

function App() {
  // const now = new Date();
  // const formatedDate = now.toLocaleString('LT-lt', { dateStyle: 'full' });
  const showTitles = false;
  return (
    <div className='App container'>
      <Header />
      {false && <Weather condition='debesuota' />}
      {/* daznai naudojama atvaizduo arba neatvaizduoti elementams */}
      {/* if showTitles === true  */}
      {showTitles && <TitlesMap />}
      {/* else */}
      {!showTitles && <h2>Titles siuo metu nerodomi</h2>}
      {/* {showTitles ? <TitlesMap /> : <h2>Titles siuo metu nerodomi</h2>} */}
      <MainBtn outline>Light mode</MainBtn>
      {true && <CardList />}
    </div>
  );
}

export default App;
