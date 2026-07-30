import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav>
        <h2>Kevin Andres Cuesta Caicedo</h2>

        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;