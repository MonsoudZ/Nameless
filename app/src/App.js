import "./App.css";
import Navbar from "./components/Navbar";
import EditComment from "./components/EditComment";
import Home from "./components/Home";
import { Route } from "react-router-dom";
import Details from "./components/Details";
import NewComment from "./components/NewComment";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "tailwindcss/tailwind.css";
import { Link } from "react-router-dom";
import DropDown from "./components/DropDown"


function App() {
  return (
    <div className="App">
          <nav className="items-center justify-between px-1 py-1 bg-blue-400 mb-3">
  <div className="container px-4 mx-auto flex items-center justify-between">
    <div className="w-full justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
      <a className="text-sm leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#nameless">
    Nameless
      </a>
      <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
        <span className="block relative w-6 h-px rounded-sm bg-white"></span>
        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
      </button>
    </div>
    <div className="items-center" id="example-navbar-warning">
      <ul className="list-none ml-auto">
          <li className="nav-item">
            <a className="px-2 py-1 items-center text-xs leading-snug text-white hover:opacity-75" href="#pablo">
        <Link to="/names" class="bg--500 hover:bg-red-300 text-black py-2 px-4 border border-500 rounded">
            All Comments
                  </Link>
 </a>
                  <DropDown>

                  </DropDown>
          </li>
          
      </ul>
    </div>
  </div>
          </nav>
          

        
           {/* NAVBAR */}
         {/* <Navbar />   */}

          {/* ROUTES  */}
          <Route exact path="/">
          </Route> 
          <Route exact path="/names">
            <Home />
          </Route>
          <Route exact path="/names/:id">
            <Details />
          </Route>
          <Route path="/new">
            <NewComment />
          </Route>
          <Route path="/names/:id/edit">
            <EditComment />
          </Route>
          <ToastContainer />
        </div>
      );
}
    <div>
      </div>

export default App;
