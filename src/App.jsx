import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import { Layout } from "./Components/Layout";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import ContextGlobal from "./Components/utils/global.context";


function App() {
  return (
    <BrowserRouter>
      <ContextGlobal>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="/favs" element={<Favs />} />

          <Route path="/dentist/:id" element={<Detail />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </ContextGlobal>
  </BrowserRouter>
  );
}

export default App;
