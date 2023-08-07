// import logo from './assets/logo.svg';
import './style/common.css';
import './style/App.css';
import './style/responsive.css';
import Card1 from './components/Card1';
import Header from './components/layout/Header';
import MainBtn from './components/MainBtn';
// export import Card2

function App() {
  // const now = new Date();
  // const formatedDate = now.toLocaleString('LT-lt', { dateStyle: 'full' });
  return (
    <div className='App container'>
      <Header />
      <MainBtn outline>Light mode</MainBtn>
      <div className='cardsList grid3'>
        <Card1
          city='New York !'
          heroImage='/img/newyork.jpg'
          date='2023-07-08'
        />
        <Card1 city='Paris !' heroImage='/img/paris.jpg' date='2024-07-08' />
        <Card1
          city='San Francisco !'
          heroImage='/img/sanfran.jpg'
          date='2019-07-08'
        />
      </div>
    </div>
  );
}

export default App;
