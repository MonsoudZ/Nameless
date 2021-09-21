import "./App.css";
import Navbar from "./components/Navbar";
import EditComment from "./components/EditComment";
import Home from "./components/Home";
import { Route } from "react-router-dom";
import Details from "./components/Details";
import NewComment from "./components/NewComment";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      {/* NAVBAR */}
      <Navbar />

      {/* ROUTES */}
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

export default App;
