import './Navbar.css';

const Navbar = () => {
  const NavLi = ["Home", "About", "Skills", "Projects", "Contact"];
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <img src="./Assets/brand_logo.png" alt="Logo" />
          </div>
          <ul>
            {NavLi.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <button className='login'>Resume</button>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
