import "../App.css";
import KevinPhoto from "../assets/ImagenMe.png";

import ImgDesarrolloWeb from "../assets/imagenes/imagenWeb.png";
import ImgRedes from "../assets/imagenes/Redes.png";
import ImgSistemas from "../assets/imagenes/imagesLinux.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="info">
          <span className="hello">Hola, soy Kevin </span>

          <h1>Backend Developer</h1>

          <p>
            Cuento con experiencia práctica implementando arquitecturas limpias,
            mecanismos de autenticación seguros (JWT/Hashing) y manipulación de
            datos estructurados. Cuento con bases sólidas en redes,
            comunicaciones e infraestructura (<u>Cisco</u>,{" "}
            <u>Windows Server</u> y<u>Active Directory</u>), así como
            experiencia en análisis y visualización de datos con <u>Power BI</u>{" "}
            y procesamiento de datos con
            <u>Databricks</u>, lo que me permite abordar el desarrollo de
            software desde una perspectiva integral de seguridad, eficiencia y
            escalabilidad. Actualmente cursando 7.º semestre de Ingeniería en
            Desarrollo de Software.
          </p>

          <div className="buttons">
            <button
              className="btnPrimary"
              onClick={() =>
                window.open(
                  "/HvMe/Hoja de Vida de Kevin Andres Cuesta Caicedo.pdf",
                )
              }
            >
              Descargar CV
            </button>
          </div>
        </div>

        <div className="photo">
          <img src={KevinPhoto} alt="Kevin Andres Cuesta Caicedo" />
        </div>
      </section>

      <section className="cards">
        {/* Seccion de Tarjetas */}
        <Link to="/desarrollo-web" className="card">
          <div className="card-header">
            <h3>Desarrollo Web</h3>
          </div>
          <div className="card-image-container">
            <img src={ImgDesarrolloWeb} alt="Desarrollo Web" />
          </div>
        </Link>

        <Link to="/redes" className="card">
          <div className="card-header">
            <h3>Redes y Comunicaciones</h3>
          </div>
          <div className="card-image-container">
            <img src={ImgRedes} alt="Redes y Comunicaciones" />
          </div>
        </Link>

        <Link to="/sistemas" className="card">
          <div className="card-header">
            <h3>CiberSeguridad</h3>
          </div>
          <div className="card-image-container">
            <img src={ImgSistemas} alt="Sistemas e Infraestructura" />
          </div>
        </Link>
      </section>
    </>
  );
}

export default Home;
