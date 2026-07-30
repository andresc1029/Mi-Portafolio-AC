import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import DesarrolloWeb from "./pages/DesarrolloWeb";
import Redes from "./pages/Redes";
import Sistemas from "./pages/Sistemas";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/desarrollo-web" element={<DesarrolloWeb />} />
          <Route path="/redes" element={<Redes />} />
          <Route path="/sistemas" element={<Sistemas />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;