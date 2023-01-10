import { BrowserRouter, Route, Routes } from "react-router-dom";
import InitialPage from "./pages/InitialPage"
import About from "./pages/About"
import Menu from "./components/Menu";
import Footer from "components/Footer";
import DefaultPage from "components/DefaultPage";
import Post from "pages/Post";

function AppRoutes() {
   return (
      <BrowserRouter>

         <Menu />
         
         <Routes>
         
            <Route path="/" element={ <DefaultPage /> }>
               <Route index element={ <InitialPage/> } />
               <Route path="about" element={ <About/> } />
               <Route path="posts/:id" element={ <Post /> } />
            </Route>

            {/* 
               Na rota com path = "/" a estrutura a ser renderizada é:

                  <DefaultPage>
                     <InitialPage />
                  </DefaultPage>
            */}
            
            <Route path="*" element={ <h1>Página não encontrada!</h1> } />
         
         </Routes>
         
         <Footer />
      
      </BrowserRouter>
      );
   }
   
   export default AppRoutes;
