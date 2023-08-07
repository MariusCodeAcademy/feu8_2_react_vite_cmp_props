// import logo from './assets/logo.svg';
import './style/common.css';
import './style/App.css';
import './style/responsive.css';
// import CardList from './components/CardList';
import Header from './components/layout/Header';
import MainBtn from './components/MainBtn';
// export import Card2

const colorTitiles = ['red', 'green', 'blue'];

function App() {
  // const now = new Date();
  // const formatedDate = now.toLocaleString('LT-lt', { dateStyle: 'full' });
  return (
    <div className='App container'>
      <Header />
      {colorTitiles.map((color) => (
        <h2 key={color}>{color}</h2>
      ))}

      <MainBtn outline>Light mode</MainBtn>
      {/* <CardList /> */}
    </div>
  );
}

export default App;
