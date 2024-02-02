import { createBrowserRouter } from "react-router-dom";
import Fotter from "../components/fotter.jsx";
import Navbar from "../components/navbar.jsx";
import Index from "../components/index.jsx";
import Contact_us from "../components/contactus/Contact_us.jsx";
import Signin from "../components/account/signin.jsx";
import Cart from "../components/Cart.jsx";
import Afchamber from "../components/Chamber_datea_aficher.jsx";
import Creatacc from "@/components/account/creatacc.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/Contact_us",
    element: <Contact_us />
  },
  {
    path: "/Login",
    element:<Signin />
  },
  {
    path: "/creataccount",
    element:<Creatacc />
  },
  {
    path: "/Cart",
    element:<Cart />
  },
  {
    path: "/fotter",
    element: <Fotter />,
  },
  {
    path: "/nav",
    element: <Navbar />,
  },
  {
    path:"/Afchamber",
    element:<Afchamber />,
  },
  {
    path: "*",
    element: <h1>set page not found</h1>,
  }


])