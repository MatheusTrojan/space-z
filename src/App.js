import About from "./pages/About";
import InitialPage from "./pages/InitialPage";

console.log(window.location)

const page = window.location.pathname === "/" 
  ? <InitialPage /> 
  : <About />

function App() {
  return (
    page
  );
}

export default App;
