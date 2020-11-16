import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <nav className='nav'>
        <div className='nav__brand'>
          {/* <span className='brand'>Weather App</span> */}
          <img
            src={process.env.PUBLIC_URL + '/weather.png'}
            alt='Logo'
            className='logo'
          />
        </div>
      </nav>
    </header>
  );
};
export default Header;
