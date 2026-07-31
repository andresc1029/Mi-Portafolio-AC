import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Desarrolloweb from "./pages/Desarrolloweb";
import Redes from "./pages/Redes";
import Sistemas from "./pages/Sistemas";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/desarrollo-web" element={<Desarrolloweb />} />
        <Route path="/redes" element={<Redes />} />
        <Route path="/sistemas" element={<Sistemas />} />
        <Route path="/contacto" element={<Contacto />} />
      </Route>
    </Routes>
  );
}

export default App;