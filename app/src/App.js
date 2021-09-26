import "./App.css";
import EditComment from "./components/EditComment";
import Home from "./components/Home";
import { Route } from "react-router-dom";
import Details from "./components/Details";
import NewComment from "./components/NewComment";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "tailwindcss/tailwind.css";
import { Link } from "react-router-dom";



function App() {
  return (
    <div className="App">
          <nav className=" sm:container md:container items-center justify-between px-2 py-4 mb-3 ">
  <div className="sm:text-text-lg container sm:w-82 sm:bg-red-900 px-4 mx-auto flex items-center justify-between ">
    <div className="w-full justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
      <a className="text-sm leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#torch">
   Torch
      </a>
     
    </div>
    <div className="items-center" id="navbar-warning">
      <ul className=" sm:bg-blue-400 list-none ml-auto align-middle">
          <li className="nav-item">
            <a className="px-2 py-1 items-center text-xs leading-snug text-white hover:opacity-75" href="#pablo">
        <Link to="/new" class="bg--500 hover:bg-red-800 text-white py-2 px-4 border border-500 rounded pr-6">
          New Comment
                  </Link> 
                  <Link to="/names" class=" bg--500 hover:bg-red-800 text-white  py-2 px-4 border border-500 rounded pl-6 ">
          All Comments
          </Link>
 </a>
                  
          </li>
      </ul>
    </div>
        </div>
          </nav>
        <hr />
          

        
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
