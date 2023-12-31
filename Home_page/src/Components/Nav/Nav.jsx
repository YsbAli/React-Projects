// import './Nav.css'

function Nav() {
  const NavData = ["Home", "About", "Projects", "Menu", "Contact"];
  return (
   <>
    <header>
      <nav className='container'>
        <div className="logo">
          <img src="/Assets/brand_logo.png" alt="logo" />
        </div>
        <ul>
          {NavData.map((item) => (
            <li className="li-item" key={item}>
              {item}
            </li>
          ))}
        </ul>
        <button className="login">Login</button>
      </nav>
    </header>
   </>
  );
}

export default Nav;
