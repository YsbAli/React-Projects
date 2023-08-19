import styles from "../Navbar/Navbar.module.css"

function Navbar() {
  const NavData = ["Home", "About", "Contact"];
  return (
    <nav className={`${styles.Navbar} container`}>
      <div className="logo">
        <img src="./images/NavLogo.png" alt="logo" />
      </div>
      <ul>
        {NavData.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
