import "./App.css";
import Navbar from "./components/Navbar";
import EditComment from "./components/EditComment";
import Home from "./components/Home";
import { Route } from "react-router-dom";
import Details from "./components/Details";
import NewComment from "./components/NewComment";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "tailwindcss/tailwind.css"




function App() {
      return (
        <div className="App">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-400 mb-3">
  <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
    <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
      <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#pablo">
     <Route exact path="/"><div>Nameless</div></Route>
      </a>
      <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
        <span className="block relative w-6 h-px rounded-sm bg-white"></span>
        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
      </button>
    </div>
    <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
      <ul className="flex flex-col lg:flex-row list-none ml-auto">
          <li className="nav-item">
            <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
        <button class="bg-green-500 hover:bg-red-500 text-black font-bold py-2 px-4 border border-blue-700 rounded">
 All Comments <Route exact path="/names/:id"></Route>
</button>
 </a>
          </li>
          
      </ul>
    </div>
  </div>
 </nav>
        
           {/* NAVBAR */}
          <Navbar /> 

          {/* ROUTES  */}
          <Route exact path="/">
            <div>Home</div>
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
<footer class='w-full text-center border-t border-grey p-4'>
            This is our footer
      </footer>
      </div>

export default App;
