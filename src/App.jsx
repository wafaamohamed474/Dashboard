import { RouterProvider } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
 
import { routes } from "./routes";

function App() {
  return (
    <>
      <Navbar />
       <RouterProvider router={routes}/>
      <Footer/>
    </>
  );
}

export default App;
