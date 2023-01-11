import { BrowserRouter, Route, Routes } from "react-router-dom";
import InitialPage from "./pages/InitialPage"
import About from "./pages/About"
import Menu from "./components/Menu";
import Footer from "components/Footer";
import DefaultPage from "components/DefaultPage";
import Post from "pages/Post";
import NotFound from "pages/NotFound";
import ScrollToTop from "components/ScrollToTop";

function AppRoutes() {
   return (
      <BrowserRouter>
         <ScrollToTop />

         <Menu />
         
         <Routes>
         
            <Route path="/" element={ <DefaultPage /> }>
               <Route index element={ <InitialPage/> } />
               <Route path="about" element={ <About/> } />
            </Route>

            {/* 
               Na rota com path = "/" a estrutura a ser renderizada é:

                  <DefaultPage>
                     <InitialPage />
                  </DefaultPage>
            */}
            <Route path="posts/:id/*" element={ <Post /> } />
            <Route path="*" element={ <NotFound /> } />
         
         </Routes>
         
         <Footer />
      
      </BrowserRouter>
      );
   }
   
   export default AppRoutes;
