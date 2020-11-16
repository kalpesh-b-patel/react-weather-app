import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Routes from './Routes';

// 3f3e5ac78183639205fb9d0532713201

function App() {
  return (
    <div className='container'>
      <Header />
      <main className='content'>
        <Routes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
