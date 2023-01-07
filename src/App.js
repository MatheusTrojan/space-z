import { BrowserRouter, Route, Routes } from "react-router-dom";
import InitialPage from "./pages/InitialPage"
import About from "./pages/About"
import Menu from "./components/Menu";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={ <InitialPage/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="*" element={ <h1>Página não encontrada!</h1> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
